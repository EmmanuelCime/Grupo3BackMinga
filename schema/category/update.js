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
    color: joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/).messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'string.pattern.base': ERROR_LETTERS_SPACE
    }),
    hover: joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/).messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'string.pattern.base': ERROR_LETTERS_SPACE
    }),
    coverPhoto: joi.string().uri().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'string.uri': ERROR_URL
      }),
      characterPhoto: joi.string().uri().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'string.uri': ERROR_URL
      }),
    description: joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).messages({
        'string.base': ERROR_STRING,
        'string.pattern.base': ERROR_LETTERS_SPACE,
        'string.empty': ERROR_EMPTY
    }),
    adminId: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID
    })
})
export default schema