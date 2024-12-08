import joi from "joi-oid";
import { ERROR_FORMAT_ID, ERROR_MAX, ERROR_MIN, ERROR_POSITIVE, ERROR_REQUIRED } from "../../utils/msg-Joi.js";

const schema = joi.object({
    _id: joi.objectId().required().messages({
        'string.pattern.name': ERROR_FORMAT_ID,
        'any.required': ERROR_REQUIRED
    }),
    mangaId: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID
    }),
    authorId: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID
    }),
    companyId: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID
    }),
    reaction: joi.number().positive().min(1).max(5).messages({
        'number.positive': ERROR_POSITIVE,
        'number.min': ERROR_MIN(1),
        'number.max': ERROR_MAX(5)
      })
})
export default schema