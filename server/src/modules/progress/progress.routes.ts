import { Router } from 'express'
import progressController from './progress.controller'

const router = Router();
router.get('/get', progressController.getProgress);
router.post('/add', progressController.createProgress);
router.patch('/update/:id', progressController.updateProgress);

export default router;