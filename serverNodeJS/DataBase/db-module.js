var mysql = require('mysql');

function getMySqlConnection() {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "SmartLearnerBD"
    });
}

module.exports.getUsers = function(callback) {
    var connection = getMySqlConnection();
    var sql = 'SELECT * FROM Users';

    connection.connect();

    connection.query(sql, function(err, result) {
        if(err) throw err;

        callback(result);
    });
    connection.end();
}

module.exports.getSubjects = function(callback) {
    var connection = getMySqlConnection();
    var sql = 'SELECT * FROM Subjects';

    connection.connect();

    connection.query(sql, function(err, result) {
        if(err) throw err;

        callback(result);
    });
    connection.end();
}

module.exports.getNews = function(callback) {
    var connection = getMySqlConnection();
    var sql = 'SELECT * FROM News';

    connection.connect();

    connection.query(sql, function(err, result) {
        if(err) throw err;

        callback(result);
    });
    connection.end();
}

module.exports.getGroups = function(callback) {
    var connection = getMySqlConnection();
    var sql = 'SELECT * FROM Groups';

    connection.connect();

    connection.query(sql, function(err, result) {
        if(err) throw err;

        callback(result);
    });
    connection.end();
}

module.exports.getPlaces = function(callback) {
    var connection = getMySqlConnection();
    var sql = 'SELECT * FROM Places';

    connection.connect();

    connection.query(sql, function(err, result) {
        if(err) throw err;

        callback(result);
    });
    connection.end();
}

getUsersIdByPlace = function (id, callback) {

    var connection = getMySqlConnection();

    connection.connect();
    
    var sql = 'SELECT UserId FROM PlaceConnection WHERE PlaceId = ?';
    connection.query(sql, [id], function (err, result) {
        if (err) throw err;

        if (result != null)
            callback(result);
        else
            callback(null);
    });

    connection.end();
}

getUsersById = function (id, callback) {

    var connection = getMySqlConnection();

    connection.connect();
    
    var sql = 'SELECT * FROM Users WHERE Id = ?';
    connection.query(sql, [id], function (err, result) {
        if (err) throw err;

        if (result.length > 0)
            callback(result[0]);
        else
            callback(null);
    });

    connection.end();
}

module.exports.getUsersByPlace = function (id, callback) {

    var connection = getMySqlConnection();

    connection.connect();
    
    var sql = 'SELECT PlaceConnection.UserId, Users.* FROM PlaceConnection RIGHT JOIN Users ON PlaceConnection.UserId = Users.Id WHERE PlaceConnection.PlaceId = ?;'
    connection.query(sql, [id], function (err, result) {
        if (err) throw err;

        if (result.length > 0)
            callback(result);
        else
            callback(null);
    });

    connection.end();
}

module.exports.getSubjectsByPlace = function (id, callback) {

    var connection = getMySqlConnection();

    connection.connect();
    
    var sql = 'SELECT * FROM Subjects WHERE PlaceId = ?';
    connection.query(sql, [id], function (err, result) {
        if (err) throw err;

        if (result.length > 0)
            callback(result);
        else
            callback(null);
    });

    connection.end();
}

module.exports.getPlaceById = function (id, callback) {

    var connection = getMySqlConnection();

    connection.connect();
    
    var sql = 'SELECT * FROM Places WHERE Id = ?';
    connection.query(sql, [id], function (err, result) {
        if (err) throw err;

        if (result.length > 0)
            callback(result);
        else
            callback(null);
    });

    connection.end();
}