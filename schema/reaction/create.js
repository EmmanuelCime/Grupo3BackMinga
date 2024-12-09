import joi from "joi-oid";
import { ERROR_BOOLEAN, ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_LETTERS_SPACE, ERROR_POSITIVE, ERROR_REQUIRED, ERROR_STRING, ERROR_URL } from "../../utils/msg-Joi.js";

const schema = joi.object({
    mangaId: joi.objectId().required().messages({
        'string.pattern.name': ERROR_FORMAT_ID,
        'any.required': ERROR_REQUIRED
    }),
    authorId: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID,
        'any.required': ERROR_REQUIRED
    }),
    companyId: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID,
        'any.required': ERROR_REQUIRED
    }),
    reaction: joi.number().positive().min(1).less(5).required().messages({
        'number.positive': ERROR_POSITIVE,
        'any.required': ERROR_REQUIRED
      })
})
export default schema