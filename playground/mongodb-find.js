const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
 if(err) {
    return console.log('Unable to connect to Mongo DB');
 }
 
console.log('connected to Mongo DB');

db.collection('Todos').find({_id : new ObjectId('58c718a4e7042902c2811d05')}).toArray().then((docs) => {
 console.log('todos');
 console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
   console.log('unable to fetch todos', err);
});


db.collection('Todos').find().count().then((count) => {
 console.log('todos count', count);
}, (err) => {
   console.log('unable to fetch todos', err);
});


//db.close();

});
