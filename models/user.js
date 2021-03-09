const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Will create the collection to have a place to store users.
const userSchema = new Schema({
  username: { type: String, required: true },
  age: { type: Number, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
