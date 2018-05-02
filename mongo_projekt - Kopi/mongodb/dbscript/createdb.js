var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/samplesite';

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database oprettet");
    db.close();

});
