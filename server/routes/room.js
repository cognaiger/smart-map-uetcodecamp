import express from 'express'
import { createRoom, getRoomSchedule } from '../controllers/roomController.js'
const router = express.Router();
router.post("/createroom", createRoom);
router.get("/getSchedule", getRoomSchedule);

export default router;