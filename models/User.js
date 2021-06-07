const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is empty'],
    unique: true,   
  },
  email: {
    type: String,
    required: [true, 'email is empty'],
    unique: true, 
    validate: {
        validator: () => Promise.resolve(false),
        message: 'Email validation failed'
      }
  },
  password: {
    type: String,
    required: [true, 'Password is empty'],
  },

});

const User = mongoose.model("User", userSchema);

module.exports = User;
