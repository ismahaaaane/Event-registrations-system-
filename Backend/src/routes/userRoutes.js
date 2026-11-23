import express from "express";
import { getMe } from "../controllers/userController.js";


import { 
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/userController.js";
import {authMiddleware} from "../middleware/authMiddleware.js"

const router = express.Router();

router.get("/", authMiddleware, getAllUsers);
router.get("/:id", authMiddleware, getUserById);
router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, deleteUser);
router.get("/me", authMiddleware, getMe);


export default router;