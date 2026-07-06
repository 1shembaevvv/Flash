import { Router } from 'express';
import cardRouter from '../modules/card/card.routes';
import progressRouter from '../modules/progress/progress.routes';

const router = Router();
router.use('/cards', cardRouter);
router.use('/progress', progressRouter);

export default router;