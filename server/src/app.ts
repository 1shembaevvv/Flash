import express from 'express';
import cors from 'cors';
import routes from './routes/index';

export const buildServer = () => {
	const server = express();
	server.use(express.json());
	server.use(
		cors({
			origin: 'http://localhost:3000',
			credentials: true
		})
	);
	server.get('/', (req, res) => {
		res.status(200).send({
			success: true,
			message: 'Hello World!'
		});
	});

	server.use('/api/v1', routes);

	return server;
};
