import express from 'express';
import { getSample } from '../controllers/sampleController';

const router = express.Router();

router.get('/', getSample);

export default router;
