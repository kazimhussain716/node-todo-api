// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

//   db.collection('Todos').find({
//      // completed:false
//      _id : new ObjectID("5948e9312accd6ebea4c09b1")
//     }).toArray().then((docs)=>{
//       console.log('Todos');
//       console.log(JSON.stringify(docs,undefined,2));
//   },(err)=>{
//     console.log('Unable to fetch Todos',err);
//   })

//   db.collection('Todos').find().count().then((count)=>{
//       console.log(`Todos count :${count}`);
//   },(err)=>{
//     console.log('Unable to fetch Todos',err);
//   })

  db.collection('Users').find({name :"Kazim Hussain"}).toArray().then((docs)=>{
      console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch Todos',err);
  })

 // db.close();
})