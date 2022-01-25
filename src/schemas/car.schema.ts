import Ajv, { JSONSchemaType } from "ajv"
import { ICar } from "../types/car.type"

const ajv = new Ajv()

const addCarSchema: JSONSchemaType<ICar> = {
  type: "object",
  properties: {
    brand: { type: "string" },
    color: { type: "string" },
    model: { type: "string" }
  },
  required: ["brand", "color", "model"],
  additionalProperties: false
}

const updateCarSchema: JSONSchemaType<ICar> = {
  type: "object",
  properties: {
    brand: { type: "string" },
    color: { type: "string" },
    model: { type: "string" }
  },
  required: [],
  minProperties: 1,
  additionalProperties: false
}

/**
 * validate new Car input from the user
 * @param data object to validate
 * @returns errors as json if any
 */
const validateAddNewCarInput = (data: object) => {
  const validate = ajv.compile(addCarSchema)
  if (validate(data)) {
    return (null)
  } else {
    return (validate.errors)
  }
}

/**
 * validate update Car input from the user
 * @param data object to validate
 * @returns errors as json if any
 */
const validateUpdateCarInput = (data: object) => {
  const validate = ajv.compile(updateCarSchema)
  if (validate(data)) {
    return (null)
  } else {
    return (validate.errors)
  }
}

export { validateAddNewCarInput, validateUpdateCarInput }
