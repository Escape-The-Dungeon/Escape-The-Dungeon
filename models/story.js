const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Will create the collection to have a place to store users.
const storySchema = new Schema({
  name: { type: String, required: true },
  userid: { type: Number, required: true },
  story: { type: Array, required: true }
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;
