const express = require("express");
 
const app = express();
id = "1"

app.set("view engine", "ejs");

const todos = [
];

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('index',{
        data:todos,
    });
});

app.post("/", (req, res) => {
    res.send(todos)
    // const inputTodoId = id;
    // const inputTodoTask = req.body.todoTask;
    // id++;
 
    // todos.push({
    //     todoId: inputTodoId.toString(),
    //     todoTask: inputTodoTask
    // });
 
    // res.render("index", {
    //     data: todos,
    // });
});

app.post("/delete", (req, res) => {
    var requestedtodoId = req.body.todoId;
    console.log(requestedtodoId);
    var j = 0;
    todos.forEach((todo) => {
        j = j + 1;
        if (todo.todoId === requestedtodoId) {
            todos.splice(j - 1, 1);
        }
    });
    console.log(todos)
    res.redirect("/");
});

app.listen(3000, (req, res) => {
    console.log("App is running on port 3000");
});


