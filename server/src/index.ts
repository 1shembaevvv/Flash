import 'dotenv/config';
import { buildServer } from './app'

const server = buildServer();

const start = async () => {
	const PORT = process.env.PORT || 3000;

	try {
		server.listen({
			port: PORT,
			host: '0.0.0.0'
		}, () => console.log('Server is running on port: http://localhost:' + PORT));
	} catch (err) {
		console.error(err);
	}
}

start();