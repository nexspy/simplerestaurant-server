import express from 'express';

import { getOrders, getOrder, createOrder, deleteOrder, updateOrder } from '../controllers/OrderController.js';

const router = express.Router();

router.get('/', getOrders);
router.get('/:orderId/detail', getOrder);
router.post('/create', createOrder);
router.delete('/:orderId/delete', deleteOrder);
router.put('/:orderId/update', updateOrder);

export default router;