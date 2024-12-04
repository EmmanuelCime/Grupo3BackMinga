import joi from "joi-oid";
import { ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_LETTERS_SPACE, ERROR_REQUIRED, ERROR_STRING, ERROR_URL } from "../../utils/msg-Joi.js";

const schema = joi.object({
    authorId: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID
    }),
    companyId: joi.objectId().messages({
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
    description: joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).messages({
        'string.base': ERROR_STRING,
        'string.pattern.base': ERROR_LETTERS_SPACE,
        'string.empty': ERROR_EMPTY
    }),
    categoryId: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID
    })
})
export default schema