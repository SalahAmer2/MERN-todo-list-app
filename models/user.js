const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    password: String
})

//Model
const ToDoList = mongoose.model('User', UserSchema);

module.exports = ToDoList;