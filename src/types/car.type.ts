import { Document } from "mongoose"

export interface ICar {
  brand: string
  color: string
  model: string
}

export interface ICarDocument extends ICar, Document { }
