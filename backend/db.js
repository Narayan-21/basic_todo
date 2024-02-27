const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI);

const ToDoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model("todos", ToDoSchema);

module.exports = {
    todo: todo
}