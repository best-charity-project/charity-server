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
            fs.unlink('.' + previousProject.image, err => {
                if(err) throw err;
            }); 
            ProjectsModel.findByIdAndRemove(req.body);
        },
    async getProjects(req, res) {
        let projectsList = await ProjectsModel.find();
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
        let a = req.body;
        if(req.body.imageData){
            let previousProject = await ProjectsModel.findById(id)
            fs.unlink('.' + previousProject.image, err => {
                if(err) throw err;
            });
            let timeStamp = (new Date()).getTime()
            let data = a.imageData.replace(/^data:image\/\w+;base64,/, "");
            let buf = new Buffer(data, 'base64');
            fs.writeFile('./images/' + timeStamp + '.png', buf, err => {
                if(err) throw err;
            });
            a.image = '/images/' + timeStamp + '.png';
        }
        ProjectsModel.findByIdAndUpdate(id, a, {new: true},(err,projects)=>{
            if (err) return res.status(500).send(err);
         return res.send(projects);
        })
     }

}