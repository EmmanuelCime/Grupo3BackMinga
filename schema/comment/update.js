import joi from "joi-oid"
import { ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_LETTERS_SPACE, ERROR_REQUIRED, ERROR_STRING } from "../../utils/msg-Joi.js"

const schema = joi.object({
    _id: joi.objectId().required().messages({
        'string.pattern.name': ERROR_FORMAT_ID,
        'any.required': ERROR_REQUIRED
    }),
    chapterId: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID
    }),
    authorId: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID
    }),
    companyId: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID
    }),
    message: joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).messages({
        'string.base': ERROR_STRING,
        'string.pattern.base': ERROR_LETTERS_SPACE,
        'string.empty': ERROR_EMPTY
    }),
    
})
export default schema