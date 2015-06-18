
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/user';
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    /*insertDocuments(db, function() {
        db.close();
    });*/
   /* removeDocument(db,function(){
        db.close();
    });*/
    updateDocument(db,function(){
        db.close();
    });
    //db.close();
});
var insertDocuments = function(db, callback) {
    var collection = db.collection('user');
    collection.insert([
        {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
        console.log("Inserted 3 documents into the document collection");
        callback(result);
    });
}

var removeDocument = function(db, callback) {
    var collection = db.collection('user');
    collection.remove({ a : 3 }, function(err, result) {
        console.log("Removed the document with the field a equal to 3");
        callback(result);
    });
}
var updateDocument = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('user');
    // Update document where a is 2, set b equal to 1
    collection.update({ a : 2 }
        , { $set: { b : 1 } }, function(err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Updated the document with the field a equal to 2");
            callback(result);
        });
}
var findDocuments = function(db, callback) {
    var collection = db.collection('user');

    collection.find({}).toArray(function(err, docs) {
        console.log("Found the following records");
        console.dir(docs)
        callback(docs);
    });
}