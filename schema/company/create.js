import joi from "joi-oid";
import { ERROR_BOOLEAN, ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_LETTERS_SPACE, ERROR_REQUIRED, ERROR_STRING, ERROR_URL } from "../../utils/msg-Joi.js";

const schema = joi.object({
    name: joi.string().required().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).messages({
        'string.base': ERROR_STRING,
        'string.pattern.base': ERROR_LETTERS_SPACE,
        'string.empty': ERROR_EMPTY,
        'any.required': ERROR_REQUIRED
    }),
    country: joi.string().required().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).messages({
      'string.base': ERROR_STRING,
      'string.pattern.base': ERROR_LETTERS_SPACE,
      'string.empty': ERROR_EMPTY,
      'any.required': ERROR_REQUIRED
  }),
    webSite: joi.string().uri().required().messages({
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
    photo: joi.string().uri().required().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'string.uri': ERROR_URL,
        'any.required': ERROR_REQUIRED
      }),
    active: joi.boolean().required().messages({
        'boolean.base': ERROR_BOOLEAN,
        'any.required': ERROR_REQUIRED
      }),
    userId: joi.objectId().required().messages({
        'string.pattern.name': ERROR_FORMAT_ID,
        'any.required': ERROR_REQUIRED
    })
})
export default schema