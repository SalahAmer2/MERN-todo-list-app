const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;

const ToDoListSchema = new Schema({
    name: String,
    tasks: [String],
    date: String,
    starredOrNot: Boolean,
    todoList_id: String
})

//Model
const ToDoList = mongoose.model('ToDoList', ToDoListSchema);

module.exports = ToDoList;