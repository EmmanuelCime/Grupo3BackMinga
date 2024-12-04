import joi from "joi-oid"
import { ERROR_FORMAT_ID, ERROR_REQUIRED  } from "../../utils/msg-Joi.js";

const schemaCategory = joi.object({
    category: joi.objectId().required().messages({
        'string.pattern.name': ERROR_FORMAT_ID,
        'any.required': ERROR_REQUIRED
    })
})

const schemaAuthor = joi.object({
    authorId: joi.objectId().required().messages({
        'string.pattern.name': ERROR_FORMAT_ID,
        'any.required': ERROR_REQUIRED
    })
})




export {schemaCategory, schemaAuthor}