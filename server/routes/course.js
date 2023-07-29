import express from 'express'
import { getRoomAndBuildingbyCourseId } from '../controllers/courseController.js';
const router = express.Router();
router.get("/getRoomAndBuildingByCourseId", getRoomAndBuildingbyCourseId);

export default router;