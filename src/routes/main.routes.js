
const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');

router.get('/', mainController.viewHome);


module.exports = router;