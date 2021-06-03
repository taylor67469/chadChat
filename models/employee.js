const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, default: "https://robohash.org/etoptiout.png?size=300x300&set=set1" },
    gender: String,
    phone_number: String,
    date_of_birth: String,
    title: String
});

const Employee = mongoose.model("Employee", empSchema);

module.exports = Employee;