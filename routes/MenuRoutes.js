import express from 'express';
import { getMenu, getMenuDetail, createMenu, deleteMenu, updateMenu } from '../controllers/MenuController.js';

const router = express.Router();

router.get('/', getMenu);
router.get('/:menuId', getMenuDetail);
router.post('/create', createMenu);
router.delete('/:menuId/delete', deleteMenu);
router.put('/:menuId/update', updateMenu)

export default router;