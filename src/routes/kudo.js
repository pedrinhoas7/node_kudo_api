const express = require("express");
const controller =  require('../controller/kudo');

const router = express.Router();

router.get('/kudo/:id', controller.getId);

router.post('/kudo', controller.create);

router.put('/kudo/:id', controller.update);

router.delete('/kudo/:id', controller.delete);

router.get('/kudo', controller.getAll);

module.exports = router