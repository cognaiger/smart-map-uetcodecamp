import express from 'express'
import { createSchedule } from '../controllers/scheduleController.js';
const router = express.Router();
router.post("/createSchedule",createSchedule);

export default router;