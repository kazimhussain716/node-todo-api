// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').insertOne({
  //   text: 'Something todo',
  //   completed: false
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // })

  db.collection('Users').insertOne({
    name: 'Kazim Hussain',
    age: 23,
    location: 'Chakwal'
  }, (err, res) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }
    console.log(JSON.stringify(res.ops[0]._id));
    console.log(JSON.stringify(res.ops[0]._id.getTimestamp()));
  })

  db.close();
})