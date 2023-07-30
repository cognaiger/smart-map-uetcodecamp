import express from 'express'
import { getRoomAndBuildingbyCourseId,addNewCourse } from '../controllers/courseController.js';
const router = express.Router();
router.get("/getRoomAndBuildingByCourseId", getRoomAndBuildingbyCourseId);
router.post("/course",addNewCourse)
export default router;