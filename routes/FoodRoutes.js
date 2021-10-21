import express from 'express';

const router = express.Router();

import { getFoodItems, saveFoodItem, deleteFoodItem, updateFoodItem } from '../controllers/FoodController.js';

router.get('/', getFoodItems);
router.post('/create', saveFoodItem);
router.delete('/:foodId/delete', deleteFoodItem);
router.put('/:foodId/update', updateFoodItem);

export default router;