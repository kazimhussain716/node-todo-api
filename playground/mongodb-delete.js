const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5948e9312accd6ebea4c09b1')
  }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5948e9312accd6ebea4c09b1')
  // }, {
  //     $set: {
  //       completed: false
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });
  // db.close();
})