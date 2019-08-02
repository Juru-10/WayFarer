const express = require('express');
const path = require('path');

const homeRouter = express.Router();

homeRouter.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../UI/templates/index.html'));
});  

module.exports = homeRouter;