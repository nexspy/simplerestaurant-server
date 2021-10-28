import express from 'express';

import { getOrders, createOrder, deleteOrder, updateOrder } from '../controllers/OrderController.js';

const router = express.Router();

router.get('/', getOrders);
router.post('/create', createOrder);
router.delete('/:orderId/delete', deleteOrder);
router.put('/:orderId/update', updateOrder);

export default router;