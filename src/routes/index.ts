
import { Router } from "express";
import {
  getCars,
  addCar,
  updateCar,
  deleteCar,
  retrieveCar,
} from "../controllers/cars";

const carRoutes: Router = Router();

carRoutes.get("/cars", getCars);
carRoutes.post("/cars", addCar);
carRoutes.put("/cars/:id", updateCar);
carRoutes.delete("/cars/:id", deleteCar);
carRoutes.get("/cars/:id", retrieveCar);

export default carRoutes;