const express = require('express');
const controller = require('../controllers/edulist.controller');

const router = express.Router();

router.post('/', controller.createPerson);
router.get('/', controller.getPersonListPublic);
router.get('/a', controller.getPersonListAll);
router.put('/:id', controller.updatePerson);
router.delete('/:id', controller.deletePerson);

module.exports = router;
