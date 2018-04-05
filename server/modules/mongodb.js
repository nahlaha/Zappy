var mongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://127.0.0.1:27017/zappydb";

//insert new tweets with different id
exports.insert = function(data, callbackFn) {
    mongoClient.connect(dbUrl, function(error, db) {
        if (!error) {
            var insertedRows = 0;
            db.collection('tweets').insertMany(data, function(err, res) {
                if (!err) {
                    insertedRows = res.insertedCount;
                    db.close();
                }
                callbackFn(err, insertedRows);
            })
        } else {
            callbackFn(error)
        }
    })
}

//get all data
exports.getAll = (callbackFn) => {
    mongoClient.connect(dbUrl, (error, db) => {
        if (!error) {
            db.collection('tweets').find({}, { text: 1, _id: 0, date: 1 }).toArray((err, data) => {
                if (!err) {
                    db.close();
                    callbackFn(data)
                }
            });
        } else {
            callbackFn(error)
        }
    })
}