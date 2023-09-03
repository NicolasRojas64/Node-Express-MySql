import express from "express";
import {pool} from './db.js'

const app = express();

app.get("/user", async (req, res) =>{
    const result = await pool.query('select * from users');
    res.json(result);
})

app.post("/user", (req, res) =>{
    res.send("Usuario agregado");
})

app.put("/user", (req, res) =>{
    res.send("Usuario modificado");
})

app.delete("/user", (req, res) =>{
    res.send("Usuario eliminado");
})

app.listen(3000);
console.log("Server up on port 3000")