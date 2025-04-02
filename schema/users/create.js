import joi from "joi-oid"
import { ERROR_BOOLEAN, ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_LETTERS_SPACE, ERROR_REQUIRED, ERROR_STRING, ERROR_URL } from "../../utils/msg-Joi.js";

const schema = joi.object({
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required(),
    password: joi.string().min(8).required().pattern(/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]+$/),
    photo: joi.string().uri().required().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'string.uri': ERROR_URL,
        'any.required': ERROR_REQUIRED
      }),
      sendEmail: joi.boolean().messages({
        'boolean.base': ERROR_BOOLEAN
      })
})

export default schema;