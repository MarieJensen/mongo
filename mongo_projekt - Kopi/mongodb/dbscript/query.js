
// When finding documents in a collection, you can filter the result by using a query object.

// The first argument of the find() method is a query object, and is used to limit the search.

// Find documents with the address "Park Lane 38":

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("hifi");
    var query = { address: "Park Lane 38" };
    dbo.collection("customers").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});