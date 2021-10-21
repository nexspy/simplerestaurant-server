import express from 'express';

const router = express.Router();

import { getFoodItems } from '../controllers/FoodController.js';

router.get('/', getFoodItems);

export default router;