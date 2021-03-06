const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
		type: String,
		required: true,
		unique: true
	},
    password: {
		type: String,
		required: true,
	}
})

//Model
const User = mongoose.model('User', UserSchema);

module.exports = User;