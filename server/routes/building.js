import express from 'express'
import { createBuilding,getAllBuildings } from '../controllers/buildingController.js';
const router = express.Router();

router.post('/building',createBuilding)
router.get('/building', getAllBuildings)
export default router;