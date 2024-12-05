import { Schema, model } from "mongoose"

const collection = "comments"

const schema = new Schema({
    chapterId: {type: Schema.Types.ObjectId, ref: "chapters", required:true},
    authorId: {type: Schema.Types.ObjectId, ref: "authors"},
    companyId: {type: Schema.Types.ObjectId, ref: "companies"},
    message:{type: String, required:true}
}, {
    timestamps: true
})

const Comment = model(collection, schema)
export default Comment