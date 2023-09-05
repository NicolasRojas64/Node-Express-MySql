import { Router } from "express";
import { getUsers, createUSer, updateUser, deleteUser, getUSer } from "../controllers/users.controller.js";

const router = Router();

router.get("/user", getUsers);

router.get("/user/:id", getUSer)

router.post("/user", createUSer);

router.patch("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

export default router;