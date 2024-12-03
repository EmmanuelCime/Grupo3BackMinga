import joi from "joi-oid"
import { ERROR_ARRAY, ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_LETTERS_SPACE, ERROR_MIN, ERROR_NUMBER, ERROR_REQUIRED, ERROR_STRING, ERROR_URL } from "../../utils/msg-Joi.js"

const schema = joi.object({
    mangaId: joi.objectId().required().messages({
        'string.pattern.name': ERROR_FORMAT_ID,
        'any.required': ERROR_REQUIRED
    }),
    title: joi.string().required().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).messages({
        'string.base': ERROR_STRING,
        'string.pattern.base': ERROR_LETTERS_SPACE,
        'string.empty': ERROR_EMPTY,
        'any.required': ERROR_REQUIRED
    }),
    
    coverPhoto: joi.string().uri().required().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'string.uri': ERROR_URL,
        'any.required': ERROR_REQUIRED
      }),
    pages: joi.array().items(joi.string().uri().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'string.uri': ERROR_URL
      })).required().messages({
        'array.base': ERROR_ARRAY,
        'any.required': ERROR_REQUIRED
    }),
    order: joi.number().min(0).required().messages({
        'number.base': ERROR_NUMBER,
        'number.min': ERROR_MIN(0),
        'any.required': ERROR_REQUIRED
      })
    
})
export default schema