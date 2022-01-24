import express from "express";
import mongoose from "mongoose";
import carsRoutes from "./routes";

const app = express();

// TODO: read variables from environment variables. e.g: using .env
//////////
const MONGODB_PORT = 27017;
const MONGODB_URL = `mongodb://mongodb-container:${MONGODB_PORT}/cars`
const API_PORT = 4000;
//////////

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