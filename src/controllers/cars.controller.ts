import { Response, Request } from "express"
import mongoose from "mongoose"
import { ICarDocument } from "../types/car.type"
import Car from "../models/car.model"
import validateCar from "../schemas/car.schema"

const getCars = async (req: Request, res: Response): Promise<void> => {
  try {
    const cars: ICarDocument[] = await Car.find()
    res.status(200).json({ cars })
  } catch (error) {
    res.sendStatus(500)
  }
}

const addCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body
    // validate input
    const inputErrors = validateCar(body)
    if (inputErrors) {
      res.status(400).json(inputErrors)
      return
    }
    const car: ICarDocument = new Car(body)
    // save in DB
    const newCar: ICarDocument = await car.save()
    res.status(201).json({ car: newCar })
  } catch (error) {
    res.sendStatus(500)
  }
}

const retrieveCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const { params: { id } } = req
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: "invalid id" })
      return
    }
    const car: ICarDocument | null = await Car.findById({ _id: id })
    if (car === null) {
      res.sendStatus(404)
    } else {
      res.status(200).json({ car })
    }
  } catch (error) {
    res.sendStatus(500)
  }
}

const updateCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const { params: { id }, body } = req
    // validate input
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: "invalid id" })
      return
    }
    const inputErrors = validateCar(body)
    if (inputErrors) {
      res.status(400).json(inputErrors)
      return
    }
    const updatedCar: ICarDocument | null = await Car.findByIdAndUpdate(
      { _id: id },
      body,
      { new: true }
    )
    res.status(updatedCar ? 200 : 404).json({
      car: updatedCar
    })
  } catch (error) {
    res.sendStatus(500)
  }
}

const deleteCar = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ error: "invalid id" })
      return
    }
    const deletedCar: ICarDocument | null = await Car.findByIdAndRemove(
      req.params.id
    )
    res.status(204).json({
      car: deletedCar
    })
  } catch (error) {
    res.sendStatus(500)
  }
}

export { getCars, addCar, updateCar, deleteCar, retrieveCar }
