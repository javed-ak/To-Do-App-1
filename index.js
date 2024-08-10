const express = require ( "express" );
const jwt = require ("jsonwebtoken");
const app = express();

app.use(express.json())

app.post("/todo", (req, res) => {
    //Here a Logic
})

app.get("/todos", (req, res) => {

})

app.put("/completed", (req, res) => {

})
app.listen(3000);