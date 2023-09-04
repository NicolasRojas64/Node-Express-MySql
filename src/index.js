import express from "express";
import UserRoutes from './routes/users.routes.js';
import IndexRoutes from './routes/index.routes.js';

const app = express();

app.use(IndexRoutes);
//app.use(UserRoutes);

app.listen(3000);
console.log("Server up on port 3000")