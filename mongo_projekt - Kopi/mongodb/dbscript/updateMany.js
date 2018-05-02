
// Update all documents where the name starts with the letter "S":

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("samplesite");
    var myquery = { student: /^V/ };
    var newvalues = { $set: { student: "Karoline" } };
    dbo.collection("students").updateMany(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " document(s) updated");
        db.close();
    });
});