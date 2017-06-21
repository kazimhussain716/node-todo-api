const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var userId = '594a5543e1b410e0c96f480a';

User.findById(userId).then((user) => {
    if(!user) {
       return console.log('Id not found');
    }
    console.log('User By Id', user);
}, (e) => {
    console.log(e);
})
// var id = '594a44bcbbbd511d34109b8f11';
// if(!ObjectID.isValid(id)){
//     console.log('id not valid');
// }

// Todo.find({
//   _id:id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });

// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//     console.log('todo',todo);
// // })
// Todo.findById(id).then((todo)=>{
//     if(!todo) {
//         return console.log('id not found');
//     }
//     console.log('todo',todo);
// }).catch((e)=> console.log(e));