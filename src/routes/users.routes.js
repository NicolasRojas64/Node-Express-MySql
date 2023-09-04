import { Router } from "express";
import { getUsers, createUSer, putUser, deleteUser } from "../controllers/users.controller.js";

const router = Router();

router.get("/user", getUsers);

router.post("/user", createUSer);

router.put("/user", putUser);

router.delete("/user", deleteUser);

export default router;