import express from 'express'
import { createEvent, getAllEvents } from '../controllers/eventController.js';
const router = express.Router();
router.post("/createEvent",createEvent);
router.get("/getAllEvent", getAllEvents);

export default router; 