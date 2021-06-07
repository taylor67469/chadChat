const mongoose = require("mongoose");
const forumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is empty'],
    unique: true,   
  },
  description: {
    type: String,
    required: [true, 'Forum description is empty'],
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User"
}

});

const ForumPost = mongoose.model("ForumPost", forumSchema);

module.exports = ForumPost;
