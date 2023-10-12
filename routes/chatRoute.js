import express from "express";
import {
  createChat,
  findChat,
  userChats,
} from "../controllers/chatControllers.js";

const router = express.Router();

router.post("/", createChat);
router.get("/:userID", userChats);
router.get("/find/:firstID/:secondID", findChat);

export default router;
