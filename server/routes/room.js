import express from 'express'
import { createRoom, getRoomSchedule, getEmptyRoom } from '../controllers/roomController.js'
const router = express.Router();
router.post("/createroom", createRoom);
router.get("/getSchedule", getRoomSchedule);
router.get("/getEmptyRoom", getEmptyRoom);

export default router;