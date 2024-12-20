import joi from "joi-oid";
import { ERROR_FORMAT_ID, ERROR_MAX, ERROR_MIN, ERROR_POSITIVE, ERROR_REQUIRED } from "../../utils/msg-Joi.js";

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
    reaction: joi.number().positive().min(1).max(5).required().messages({
        'number.positive': ERROR_POSITIVE,
        'any.required': ERROR_REQUIRED,
        'number.min': ERROR_MIN(1),
        'number.max': ERROR_MAX(5)
      })
})
export default schema