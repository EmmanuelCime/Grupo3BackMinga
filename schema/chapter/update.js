import joi from "joi-oid"
import { ERROR_ARRAY, ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_LETTERS_SPACE, ERROR_MIN, ERROR_NUMBER, ERROR_REQUIRED, ERROR_STRING, ERROR_URL } from "../../utils/msg-Joi.js"

const schema = joi.object({
    _id: joi.objectId().required().messages({
        'string.pattern.name': ERROR_FORMAT_ID,
        'any.required': ERROR_REQUIRED
    }),
    mangaId: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID
    }),
    title: joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).messages({
        'string.base': ERROR_STRING,
        'string.pattern.base': ERROR_LETTERS_SPACE,
        'string.empty': ERROR_EMPTY
    }),
    
    coverPhoto: joi.string().uri().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'string.uri': ERROR_URL
      }),
    pages: joi.array().items(joi.string().uri().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'string.uri': ERROR_URL
      })).messages({
        'array.base': ERROR_ARRAY
    }),
    order: joi.number().min(0).messages({
        'number.base': ERROR_NUMBER,
        'number.min': ERROR_MIN(0)
      })
    
})
export default schema