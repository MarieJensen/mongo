var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

// To create a collection in MongoDB, use the createCollection() method:

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('samplesite');
    dbo.createCollection('students', function (err, res) {
        if (err) throw err;
        console.log("Collection oprettet");
        db.close();
    });

});









