import {Router} from 'express';
import { get, getOneId, post, put, del } from '../controllers/controllers.js';

const router = Router();
router.get('/emp', get);
router.get('/emp/:id', getOneId);
router.post('/emp', post);
router.patch('/emp/:id', put);
router.delete('/emp/:id', del);

export default router;