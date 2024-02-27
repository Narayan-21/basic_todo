const express = require("express");
const cors = require("cors");
const { createToDo, updateToDo } = require("./types");
const { todo } = require("./db")

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}))

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createToDo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(401).json({
            msg: "You sent the wrong inputs!"
        })
        return;
    }
    try {
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        })
        res.json({
            msg: "To Do Created!"
        })
    } catch(err) {
        console.error("Error create ToDo:", err);
        res.status(500).json({
            msg: "Error creating Todo"
        });
    }
});

app.get("/todos", async function(req, res){
    const allToDos = await todo.find({});
    try {
        if (allToDos){
            res.json({
                allToDos
            })
        }
    } catch {
        res.status(503).send({
            msg: "Could not retrieve the Todos"
        })
    }
});

app.put("/completed", async function(req, res){
    const uploadPayload = req.body;
    const parsedPayload = updateToDo.safeParse(uploadPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs!"
        });
        return ;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed!"
    })
});

app.listen(PORT, function(){
    console.log(`Listening to the PORT ${PORT}`);
})