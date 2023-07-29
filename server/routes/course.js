import express from 'express'
import {  createCourse,getAllCourses } from '../controllers/courseController.js';
const router = express.Router();


router.post('/course',createCourse)
router.get('/course',getAllCourses)
export default router;