import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

import carsRoutes from "./routes/cars.route";

const app = express();

// TODO: read variables from environment variables. e.g: using .env
//////////
const MONGODB_PORT = 27017;
const MONGODB_URL = `mongodb://mongodb-container:${MONGODB_PORT}/cars`
const API_PORT = 4000;
const API_KEY = `6Nz4Nm6CWa0Zea9ox6gI6A==`;
//////////

// middleware to check the secure the API with API KEY
const checkApiKey = () => {
	return (req: Request, res: Response, next: NextFunction) => {
		if (req.headers['x-api-key'] !== API_KEY) {
			res.status(403).send('Unauthorized');
		} else {
			next();
		}
	}
}

app.use(checkApiKey());
app.use(express.json());
app.use(carsRoutes);

mongoose
	.connect(MONGODB_URL)
	.then(() => {
		console.info("connected to mongodb successfully");
		app.listen(API_PORT, () =>
			console.info(`Server running on http://localhost:${API_PORT}`)
		)
	}
	)
	.catch((error) => {
		console.info(error);
		throw error;
	});