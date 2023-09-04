import express from "express";
import UserRoutes from './routes/users.routes.js';

const app = express();
app.use(express.json())

app.use(UserRoutes);

app.listen(3000);
console.log("Server up on port 3000")