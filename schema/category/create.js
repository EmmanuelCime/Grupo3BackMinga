import joi from "joi-oid";
import { ERROR_BOOLEAN, ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_LETTERS_SPACE, ERROR_REQUIRED, ERROR_STRING, ERROR_URL } from "../../utils/msg-Joi.js";

const schema = joi.object({
    name: joi.string().required().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).messages({
        'string.base': ERROR_STRING,
        'string.pattern.base': ERROR_LETTERS_SPACE,
        'string.empty': ERROR_EMPTY,
        'any.required': ERROR_REQUIRED
    }),
    color: joi.string().required().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/).messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'string.pattern.base': ERROR_LETTERS_SPACE,
        'any.required': ERROR_REQUIRED
    }),
    hover: joi.string().required().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/).messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'string.pattern.base': ERROR_LETTERS_SPACE,
        'any.required': ERROR_REQUIRED
    }),
    coverPhoto: joi.string().uri().required().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'string.uri': ERROR_URL,
        'any.required': ERROR_REQUIRED
      }),
      characterPhoto: joi.string().uri().required().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'string.uri': ERROR_URL,
        'any.required': ERROR_REQUIRED
      }),
    description: joi.string().required().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).messages({
        'string.base': ERROR_STRING,
        'string.pattern.base': ERROR_LETTERS_SPACE,
        'string.empty': ERROR_EMPTY,
        'any.required': ERROR_REQUIRED
    }),
    adminId: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID,
        'any.required': ERROR_REQUIRED
    })
})
export default schema