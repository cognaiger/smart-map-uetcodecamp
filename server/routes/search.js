import express from 'express'
import {searchBuilding,searchCourse} from '../controllers/searchController.js'
const router = express.Router();

router.get('/search/building',searchBuilding)
router.get('/search/course',searchCourse)
export default router;