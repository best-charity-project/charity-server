const mongoose = require('../utils/db.utils');
const error = require('../utils/error');
const ProjectsModel = require('../schemas/projects.schema');
const fs = require('fs');

module.exports = {
    async newProject(req, res) {
        let a = req.body;
        let projects = new ProjectsModel(a);
        if(req.body.imageData){
            let data = a.imageData.replace(/^data:image\/\w+;base64,/, "");
            let buf = new Buffer(data, 'base64');
            let timeStamp = (new Date()).getTime();
            fs.writeFile(`./images/${timeStamp}.png`, buf, err => {
                if(err)  console.log(err);
            });
            projects.image = `${timeStamp}.png`;
        }
        await ProjectsModel.create(projects)
            .then( result => {
                res.status(200).json({
                    projects:result
                });
            });
    },
    async deleteProject(req, res) {
            let id = req.params.id
            let previousProject = await ProjectsModel.findById(id)
            fs.unlink(`./images/${previousProject.image}`, err => {
                if(err) throw err;
            }); 
            ProjectsModel.findByIdAndRemove(id)
                .then((result)=>{
                    res.status(200).json({
                        projects:result
                    });
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
            let data = a.imageData.replace(/^data:image\/\w+;base64,/, "");
            let buf = new Buffer(data, 'base64');
            let timeStamp = (new Date()).getTime()
            fs.writeFile(`./images/${timeStamp}.png`, buf, err => {
                if(err) throw err;
            });
            projects.image = `${timeStamp}.png`;
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