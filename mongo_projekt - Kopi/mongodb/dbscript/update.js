// Update Document
// You can update a record, or document as it is called in MongoDB, by using the updateOne() method.
// The first parameter of the updateOne() method is a query object defining which document to update.


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("samplesite");
    var myquery = { student: "Marie" };
    var newvalues = { $set: { student: "Emil", street: "Canyon 123" } };
    dbo.collection("students").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});