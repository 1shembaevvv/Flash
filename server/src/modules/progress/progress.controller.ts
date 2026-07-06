import { Request, Response } from 'express';
import { prisma } from '../../plugins/prisma';

const getProgress = async (req: Request, res: Response) => {
	try {
		const progress = await prisma.progress.findMany();

		res.status(200).send({
			success: true,
			data: progress
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: `Error: error`
		});
	}
};

const createProgress = async (req: Request, res: Response) => {
	try {
		const progress = await prisma.progress.create({
			data: {
				progress: 0
			}
		});

		res.status(201).send({
			success: true,
			data: progress
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: `Error: error`
		});
	}
};

const updateProgress = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { progress } = req.body;

		const data = await prisma.progress.update({
			data: {
				progress
			},
			where: {
				id: Number(id)
			}
		});

		res.status(200).send({
			success: true,
			data
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: `Error: error`
		});
	}
};

export default {
	getProgress,
	createProgress,
	updateProgress
};
