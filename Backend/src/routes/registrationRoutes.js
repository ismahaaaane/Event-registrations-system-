import express from "express";

import{
    createRegistration,
    getUserRegistration,
    cancelRegistration
} from "../controllers/registrationController.js";
import {authMiddleware} from "../middleware/authMiddleware.js"

const router = express.Router();

router.post("/", authMiddleware, createRegistration);
router.get("/user/:userId", authMiddleware, getUserRegistration);
router.delete("/:id", authMiddleware, cancelRegistration);

export default router;