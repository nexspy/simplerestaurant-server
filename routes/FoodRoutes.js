import express from 'express';

const router = express.Router();

import { getFoodItems, saveFoodItem } from '../controllers/FoodController.js';

router.get('/', getFoodItems);
router.post('/create', saveFoodItem);

export default router;