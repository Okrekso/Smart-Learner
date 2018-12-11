var express = require('express');
var router = express.Router();

var db = require('../DataBase/db-module');

router.get('/', function(req, res) {
    db.getSubjects(function(result) {
        res.json(result);
    });
});

module.exports = router;