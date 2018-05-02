
// To insert multiple documents into a collection in MongoDB, we use the insertMany() method.
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("samplesite");
    var myobj = [
        { student: 'John', street: 'Highway 71' },
        { student: 'Peter', street: 'Lowstreet 4' },
        { student: 'Amy', street: 'Apple st 652' },
        { student: 'Hannah', street: 'Mountain 21' },
        { student: 'Michael', street: 'Valley 345' },
        { student: 'Sandy', street: 'Ocean blvd 2' },
        { student: 'Betty', street: 'Green Grass 1' },
        { student: 'Richard', street: 'Sky st 331' },
        { student: 'Susan', street: 'One way 98' },
        { student: 'Vicky', street: 'Yellow Garden 2' },
        { student: 'Ben', street: 'Park Lane 38' },
        { student: 'William', street: 'Central st 954' },
        { student: 'Chuck', street: 'Main Road 989' },
        { student: 'Viola', street: 'Sideway 1633' }
    ];
    dbo.collection("students").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});



