import express from 'express';

const router = express.Router();

import { getFoodItems, saveFoodItem, deleteFoodItem } from '../controllers/FoodController.js';

router.get('/', getFoodItems);
router.post('/create', saveFoodItem);
router.delete('/:foodId/delete', deleteFoodItem);

export default router;