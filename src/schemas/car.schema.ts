import Ajv, { JSONSchemaType } from "ajv"
import { ICar } from "../types/car.type"

const ajv = new Ajv()

const schema: JSONSchemaType<ICar> = {
  type: "object",
  properties: {
    brand: { type: "string" },
    color: { type: "string" },
    model: { type: "string" }
  },
  required: ["brand", "color", "model"],
  additionalProperties: false
}

const validate = ajv.compile(schema)

/**
 * validate Car input from the user
 * @param data object to validate
 * @returns errors as json if any
 */
const validateCar = (data: object) => {
  if (validate(data)) {
    return (null)
  } else {
    return (validate.errors)
  }
}

export default validateCar
