const mongoose = require('../utils/db.utils');
const error = require('../utils/error');
const ProjectsModel = require('../schemas/projects.schema');
const fs = require('fs');

module.exports = {
    async newProject(req, res) {
        let a = req.body;
        let projects = new ProjectsModel(a);
        if(a.imageData){
            let data = a.imageData.replace(/^data:image\/\w+;base64,/, "");
            let buf = new Buffer(data, 'base64');
            let timeStamp = (new Date()).getTime();
            fs.writeFile(`./images/${timeStamp}.png`, buf, err => {
                if(err)  console.log(err);
            });
            projects.image = `${timeStamp}.png`;
        }
        let headArray = Array.from(req.body.headArray)
        let contactsArray =Array.from(req.body.contactsArray)
        let mediaImageArray=Array.from(req.body.mediaImageArray)
        let mediaVideoArray = Array.from(req.body.mediaVideoArray)

        headArray.length       === 0 ? projects.headArray       = headArray       : projects.headArray       = headArray.join('').split(",")
        contactsArray.length   === 0 ? projects.contactsArray   = contactsArray   : projects.contactsArray   = contactsArray.join('').split(",")
        mediaImageArray.length === 0 ? projects.mediaImageArray = mediaImageArray : projects.mediaImageArray = mediaImageArray.join('').split(",")
        mediaVideoArray.length === 0 ? projects.mediaVideoArray = mediaVideoArray : projects.mediaVideoArray = mediaVideoArray.join('').split(",")
        await ProjectsModel.create(projects)
            .then( result => { 
                res.status(200).json({
                    projects:result
                });
            });
    },
    async deleteProjectById(req, res) {
        let id = req.params.id
        let previousProject = await ProjectsModel.findById(id)
        if (previousProject.image) {
        fs.unlink(`./images/${previousProject.image}`, err => {
                if(err) throw err;
            }); 
        }
        ProjectsModel.findByIdAndRemove(id)
            .then((result)=>{
                res.status(200).json({
                    projects:result
                });
            });
    },
    async deleteProjects(req,res){
        let deletedIds = []
        for (let i = 0; i < req.body.checkedIds.length; i++) {
            let previousProjects = await ProjectsModel.findById(req.body.checkedIds[i])
            if (previousProjects.image) {
                fs.unlink(`./images/${previousProjects.image}`, function(err) {
                    if(err) {
                        return console.log(err)
                    }
                }); 
            }
            let deletedItem = await ProjectsModel.findByIdAndRemove(req.body.checkedIds[i])
            deletedIds.push(deletedItem._id)
        }
        res.status(200).json({
            projects: deletedIds
        });
    },
    async getProjects(req, res) {
        let admin = req.query.isAdmin
        let projectsList = (admin) ? await ProjectsModel.find():await ProjectsModel.find({isPublic:true});
        res.status(200).json({
            projects:projectsList
         });    
    },
     async getProjectById(req, res) {
        let id = req.params.id;
        let projects = await ProjectsModel.findById(id);
        res.send(projects)
    },
     async UpdateProject(req, res) {
        let id = req.params.id;
        let projects = req.body;
        if(projects.imageData){
            let previousProject = await ProjectsModel.findById(id)
            fs.unlink(`./images/${previousProject.image}`, err => {
                if(err) throw err;
            });
            let data = projects.imageData.replace(/^data:image\/\w+;base64,/, "");
            let buf = new Buffer(data, 'base64');
            let timeStamp = (new Date()).getTime()
            fs.writeFile(`./images/${timeStamp}.png`, buf, err => {
                if(err) throw err;
            });
            projects.image = `${timeStamp}.png`;
        }
        if(projects.headArray){
            let headArray = Array.from(req.body.headArray)
            headArray.length       === 0 ? projects.headArray       = headArray       : projects.headArray       = headArray.join('').split(",")
        }
        if(projects.contactsArray){
            let contactsArray = Array.from(req.body.contactsArray)
            contactsArray.length   === 0 ? projects.contactsArray   = contactsArray   : projects.contactsArray   = contactsArray.join('').split(",")
        }
        if(projects.mediaImageArray){
            let mediaImageArray = Array.from(req.body.mediaImageArray)
            mediaImageArray.length === 0 ? projects.mediaImageArray = mediaImageArray : projects.mediaImageArray = mediaImageArray.join('').split(",")
        }
        if(projects.mediaVideoArray){
            let mediaVideoArray = Array.from(req.body.mediaVideoArray)
            mediaVideoArray.length === 0 ? projects.mediaVideoArray = mediaVideoArray : projects.mediaVideoArray = mediaVideoArray.join('').split(",")
        }

        await ProjectsModel.findByIdAndUpdate(id,projects)
            .then(()=>ProjectsModel.findById(id))
            .then((result)=>{
                res.status(200).json({
                    projects:result
                })
            })
    }

}