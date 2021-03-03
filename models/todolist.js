const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;

const ToDoListSchema = new Schema({
    todolists: [
        {
            name: String,
            tasks: [String],
            date: String,
            starredOrNot: Boolean,
            todoList_id: String
        }
    ]
})

//Schema

// const ToDoListSchema = {
//     todolists: [
//         name: String,
//         tasks: [],
//         date: String,
//         starredOrNot: Boolean,
//         todoList_id: String
//     ]
// };

//Model
const ToDoList = mongoose.model('ToDoList', ToDoListSchema);

module.exports = ToDoList;