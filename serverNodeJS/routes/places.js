var express = require('express');
var router = express.Router();

var db = require('../DataBase/db-module');

router.get('/', function(req, res) {
    db.getPlaces(function(result) {
        res.json(result);
    });
});

router.get('/:id(\\d+)/users', function (req, res) {

    db.getUsersByPlace(req.params['id'], function (result) {
        if (result != null)
            res.json(result);
        else
            res.status(404).send("Users not found!");

    })
})

router.get('/:id(\\d+)', function (req, res) {

    db.getPlaceById(req.params['id'], function (result) {
        if (result != null)
            res.json(result);
        else
            res.status(404).send("Place not found!");

    })
})

router.get('/:id(\\d+)/subjects', function (req, res) {

    db.getSubjectsByPlace(req.params['id'], function (result) {
        if (result != null)
            res.json(result);
        else
            res.status(404).send("Subjects not found!");

    })
})

module.exports = router;