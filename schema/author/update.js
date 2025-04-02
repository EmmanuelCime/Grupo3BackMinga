import joi from "joi-oid";
import { ERROR_BOOLEAN, ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_LETTERS_SPACE, ERROR_REQUIRED, ERROR_STRING, ERROR_URL } from "../../utils/msg-Joi.js";

const schema = joi.object({
    _id: joi.objectId().required().messages({
        'string.pattern.name': ERROR_FORMAT_ID,
        'any.required': ERROR_REQUIRED
    }),
    name: joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).messages({
        'string.base': ERROR_STRING,
        'string.pattern.base': ERROR_LETTERS_SPACE,
        'string.empty': ERROR_EMPTY
    }),
    lastName: joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).messages({
        'string.base': ERROR_STRING,
        'string.pattern.base': ERROR_LETTERS_SPACE,
        'string.empty': ERROR_EMPTY
    }),
    city: joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).messages({
        'string.base': ERROR_STRING,
        'string.pattern.base': ERROR_LETTERS_SPACE,
        'string.empty': ERROR_EMPTY
    }),
    country: joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).messages({
        'string.base': ERROR_STRING,
        'string.pattern.base': ERROR_LETTERS_SPACE,
        'string.empty': ERROR_EMPTY
    }),
    dateBorn: joi.string().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY
    }),
    photo: joi.string().uri().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'string.uri': ERROR_URL
      }),
    active: joi.boolean().messages({
        'boolean.base': ERROR_BOOLEAN
      }),
    userId: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID
    }),
    active: joi.boolean().messages({
        'boolean.base': ERROR_BOOLEAN
      }),
})
export default schema