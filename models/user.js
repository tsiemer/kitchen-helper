const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const UserSchema = new Schema({
  username: String,
  pwd: String,
  plan: ObjectId,
  diet: String,
  roles: Array
})

//create model for todo
const User = mongoose.model('user', UserSchema);

module.exports = User;