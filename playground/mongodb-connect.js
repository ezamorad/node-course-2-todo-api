const MongoClient = require('mongodb'). MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
 if(err) {
    return console.log('Unable to connect to Mongo DB');
 }
 
console.log('connected to Mongo DB');

db.collection('Todos').insertOne({
text : 'Something',
completed: false
}, (err, result) => {
    if(err) {
        return console.log('unable to insett', err);
    }
    
    console.log(JSON.stringify(result.ops, undefined, 2));
});

db.close();

});
