const mongoose = require('../utils/db.utils');
const error = require('../utils/error');
const ProjectsModel = require('../schemas/projects.schema');
const fs = require('fs');

module.exports = {
    async newProject(req, res, next) {
        let a = req.body;
        if (a.imageData) {
            let data = a.imageData.replace(/^data:image\/\w+;base64,/, "");
            let buf = new Buffer(data, 'base64');
            let timeStamp = (new Date()).getTime();
            fs.writeFile(`./images/${timeStamp}.png`, buf, err => {
                if (err) console.log(err);
            });
            a.image = `${timeStamp}.png`;
        }

        a.headArray ? a.headArray = JSON.parse(a.headArray) :
            a.headArray = []
        a.contactsArray ? a.contactsArray = JSON.parse(a.contactsArray) :
            a.contactsArray = []
        a.mediaImageArray ? a.mediaImageArray = JSON.parse(a.mediaImageArray) :
            a.mediaImageArray = []
        a.mediaVideoArray ? a.mediaVideoArray = JSON.parse(a.mediaVideoArray) :
            a.mediaVideoArray = []

        let projects = new ProjectsModel(a);

        await ProjectsModel.create(projects, (err, result) => {
            if (err) return next(err);
            res.status(200).json({
                projects: result
            });
        });
    },
    async deleteProjectById(req, res, next) {
        let id = req.params.id
        let previousProject = await ProjectsModel.findById(id)
        if (previousProject.image) {
            fs.unlink(`./images/${previousProject.image}`, err => {
                if (err) throw err;
            });
        }
        await ProjectsModel.findByIdAndRemove(id, (err, result) => {
            if (err) return next(err);
            res.status(200).json({
                projects: result
            });
        });
    },
    async deleteProjects(req, res, next) {
        try {
            let deletedIds = []
            for (let i = 0; i < req.body.checkedIds.length; i++) {
                let previousProjects = await ProjectsModel.findById(req.body.checkedIds[i]);

                if (previousProjects.image) {
                    fs.unlink(`./images/${previousProjects.image}`, function (err) {
                        if (err) {
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
        } catch (err) {
            next(err)
        }
    },
    async getProjects(req, res, next) {
        try {
            let admin = req.query.isAdmin
            let projectsList = (admin) ? await ProjectsModel.find() : await ProjectsModel.find({
                isPublic: true
            });
            res.status(200).json({
                projects: projectsList
            });
        } catch (err) {
            next(err);
        }

    },
    async getProjectById(req, res) {
        let id = req.params.id;
        let projects = await ProjectsModel.findById(id);
        res.send(projects)
    },
    async UpdateProject(req, res) {
        let id = req.params.id;
        let projects = req.body;
        if (projects.imageData) {
            let previousProject = await ProjectsModel.findById(id)
            fs.unlink(`./images/${previousProject.image}`, err => {
                if (err) throw err;
            });
            let data = projects.imageData.replace(/^data:image\/\w+;base64,/, "");
            let buf = new Buffer(data, 'base64');
            let timeStamp = (new Date()).getTime()
            fs.writeFile(`./images/${timeStamp}.png`, buf, err => {
                if (err) throw err;
            });
            projects.image = `${timeStamp}.png`;
        }

        projects.headArray ? projects.headArray = JSON.parse(projects.headArray) :
            projects.headArray = []
        projects.contactsArray ? projects.contactsArray = JSON.parse(projects.contactsArray) :
            projects.contactsArray = []
        projects.mediaImageArray ? projects.mediaImageArray = JSON.parse(projects.mediaImageArray) :
            projects.mediaImageArray = []
        projects.mediaVideoArray ? projects.mediaVideoArray = JSON.parse(projects.mediaVideoArray) :
            projects.mediaVideoArray = []

        await ProjectsModel.findByIdAndUpdate(id, projects)
            .then(() => ProjectsModel.findById(id))
            .then((result) => {
                res.status(200).json({
                    projects: result
                })
            })
    }

}