import { Router } from "express";
import {
    createUser,
    deleteUserById,
    getUserById,
    getUsers,
    updateUserById,
} from "../controllers/user.controller.js";

const router = Router();

// GET all Employees
router.get("/users", getUsers);

// GET An Employee
router.get("/users/:id", getUserById);

// DELETE An Employee
router.delete("/users/:id", deleteUserById);

// INSERT An Employee
router.post("/users", createUser);

router.patch("/users/:id", updateUserById);

export default router;