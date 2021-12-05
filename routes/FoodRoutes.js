import express from 'express';

const router = express.Router();

import { getFoodItems, saveFoodItem, deleteFoodItem, updateFoodItem } from '../controllers/FoodController.js';

import { actionPublishFood, actionUnpublishFood, actionDeleteFood } from '../controllers/FoodActions.js';

router.get('/', getFoodItems);
router.post('/create', saveFoodItem);
router.delete('/:foodId/delete', deleteFoodItem);
router.put('/:foodId/update', updateFoodItem);

router.post('/action/publish', actionPublishFood);
router.post('/action/unpublish', actionUnpublishFood);
router.post('/action/delete', actionDeleteFood);

export default router;