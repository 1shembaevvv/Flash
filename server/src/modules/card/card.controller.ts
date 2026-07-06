import { Request, Response } from 'express';
import { prisma } from '../../plugins/prisma';
import { Prisma } from '../../generated/prisma/client';

const getAllCards = async (req: Request, res: Response) => {
	const cards = await prisma.card.findMany();

	try {
		res.status(200).send({
			success: true,
			data: cards
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: `Error: error`
		});
	}
};

const getCard = async (req: Request, res: Response) => {
	try {
		const count = await prisma.card.count();
		const card = await prisma.card.findFirst({
			skip: Math.floor(Math.random() * count)
		});

		res.status(200).send({
			success: true,
			data: card
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: `Error: error`
		});
	}
};

const getCardId = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const card = await prisma.card.findUnique({
			where: {
				id: Number(id)
			}
		});

		res.status(200).send({
			success: true,
			data: card
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: `Error: error`
		});
	}
};

const addCard = async (req: Request, res: Response) => {
	try {
		const { question, answer } = req.body;
		const card = await prisma.card.create({
			data: {
				question,
				answer
			}
		});

		res.status(200).send({
			success: true,
			data: card
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: `Error: error`
		});
	}
};

const addCardBulk = async (req: Request, res: Response) => {
	try {
		const where: Prisma.CardCreateManyInput[] = req.body;
		const cards = await prisma.card.createMany({
			data: where
		});

		res.status(201).send({
			success: true,
			count: cards.count
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: `Error: error`
		});
	}
};

const deleteCard = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const card = await prisma.card.delete({
			where: {
				id: Number(id)
			}
		});

		res.status(200).send({
			success: true,
			data: card
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: `Error: error`
		});
	}
};

export default {
	getAllCards,
	getCard,
	getCardId,
	addCard,
	addCardBulk,
	deleteCard
};
