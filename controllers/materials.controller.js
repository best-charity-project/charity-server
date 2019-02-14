const Materials = require('../schemas/materials.schema');
const fs = require('fs');
const googleDrive = require("../utils/google-api/googleapi.utils");

module.exports = {
  async create(req, res, next) {
    const model = req.body;
    const file = req.file;
    try {
      if (file) {
        model.fileId = await googleDrive.uploadFile(file);
        fs.unlink(file.path, (err) => {
          if (err) throw err;
        });
      }

      const material = await Materials.create(model);

      res.status(200).send({
        material
      });
    } catch (error) {
      next(error)
    }
  },

  async delete(req, res, next) {
    let deletedIds = [];

    try {
      await Promise.all(req.body.idsToDelete.map(async id => {
        const item = await Materials.findById(id);
        if (item.fileId) {
          await googleDrive.removeFile(item.fileId);
          await googleDrive.emptyTrash();
        }
        const deletedItem = await Materials.findByIdAndRemove(id);
        deletedIds.push(deletedItem._id);
      }));

      res.status(200).json({
        deletedIds
      });
    } catch (error) {
      next(error);
    }
  },

  async getAll(req, res, next) {
    try {
      const materials = await Materials.find();
      res.status(200).json({
        materials
      });
    } catch (error) {
      next(error)
    }
  },
  async getById(req, res, next) {
    try {
      const material = await Materials.findById(req.params.id);
      res.status(200).json({
        material
      });
    } catch (error) {
      next(error)
    }
  },

  async update(req, res, next) {
    const file = req.file;
    const fileId = req.body.fileId;
    const model = req.body;

    try {
      if (req.body.source && fileId) {
        await googleDrive.removeFile(fileId);
        await googleDrive.emptyTrash();
        model.fileId = "";
      }
      if (file) {
        model.fileId = await googleDrive.uploadFile(file);
        model.source = "";
        if (fileId) {
          await googleDrive.removeFile(fileId);
          await googleDrive.emptyTrash();
        }

        fs.unlink(file.path, err => {
          if (err) throw err;
        });
      }
      const materials = await Materials.findByIdAndUpdate(req.params.id, model);
      res.status(200).json({
        materials
      });
    } catch (error) {
      if (file) {
        fs.unlink(file.path, err => {
          if (err) throw err;
        });
      }
      next(error);
    }
  },
};
