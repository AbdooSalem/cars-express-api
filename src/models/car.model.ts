import { ICar } from "../types/car.type"
import { model, Schema } from "mongoose"

const carSchema: Schema = new Schema(
  {
    brand: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export default model<ICar>("Car", carSchema)
