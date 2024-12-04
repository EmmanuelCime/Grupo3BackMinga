import joi from "joi-oid"

const schema = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
    photo: joi.string().required()
})

export default schema;