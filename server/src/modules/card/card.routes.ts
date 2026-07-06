import { Router } from 'express';
import cardController from './card.controller';

const router = Router();
router.get('/get/all', cardController.getAllCards);
router.get('/get', cardController.getCard);
router.get('/get/:id', cardController.getCardId);
router.post('/add', cardController.addCard);
router.post('/add/bulk', cardController.addCardBulk);
router.delete('/delete/:id', cardController.deleteCard);

export default router;
