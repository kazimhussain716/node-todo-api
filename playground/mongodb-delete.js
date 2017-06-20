const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  //delete Many
  //  db.collection('Todos').deleteMany({ text:'Eat lunch' }).then((result)=>{
  //     console.log(result);

  //delete One
  // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((res) => {
  //   console.log(res);
  // })

  //findOneAnddelete
  // db.collection('Todos').findOneAndDelete({ completed: false }).then((res) => {
  //   console.log(res);
  // })

    //  db.collection('Users').deleteMany({ name:'Kazim Hussain' }).then((result)=>{
    //   console.log(result);
    //  })
    // "5948ecbd2accd6ebea4c0ad5"
      db.collection('Users').findOneAndDelete({ _id:new ObjectID("5948ecbd2accd6ebea4c0ad5") }).then((result)=>{
      console.log(result);
     })
  // db.close();
})