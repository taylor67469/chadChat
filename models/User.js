const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is empty'],
    unique: true,   
  },
  email: {
    type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
  },
  password: {
    type: String,
    required: [true, 'Password is empty'],
  },
//   posts:[{
//     type:mongoose.Schema.Types.ObjectId,
//     ref: "ForumPost"
// }]
}); 

const User = mongoose.model("User", userSchema);

module.exports = User;
