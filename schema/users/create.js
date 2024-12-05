import joi from "joi-oid"
import { ERROR_BOOLEAN, ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_LETTERS_SPACE, ERROR_REQUIRED, ERROR_STRING, ERROR_URL } from "../../utils/msg-Joi.js";

const schema = joi.object({
    email: joi.string().email().alphanum().required().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/),
    password: joi.string().min(8).alphanum().required().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/),
    photo: joi.string().uri().required().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'string.uri': ERROR_URL,
        'any.required': ERROR_REQUIRED
      })
})

export default schema;