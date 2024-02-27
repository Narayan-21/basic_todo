const express = require("express");
const cors = require("cors");
const { createToDo, updateToDo } = require("./types");
const { todo } = require("./db")

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin: "https://localhost:5173"
}))

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createToDo.safeParse(createPayload);
})