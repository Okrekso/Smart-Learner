var express = require('express');
var app = express();
var mysql = require('mysql');

var usersRouter = require('./routes/users');
var subjectsRouter = require('./routes/subjects');
var newsRouter = require('./routes/news');
var groupsRouter = require('./routes/groups');
var placesRouter = require('./routes/places');

app.use('/users', usersRouter);
app.use('/subjects', subjectsRouter);
app.use('/news', newsRouter);
app.use('/groups', groupsRouter);
app.use('/places', placesRouter);

app.listen(3000);