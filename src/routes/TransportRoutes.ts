import express from 'express';
import { getDistance } from '../controllers/TransportController';

const router = express.Router();

router.post('/', getDistance);

export default router;
