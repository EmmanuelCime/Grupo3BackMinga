import { Schema, model } from "mongoose"

const collection = "chapters"

const schema = new Schema({
    mangaId: {type: Schema.Types.ObjectId, ref: "mangas", required:true},
    title: {type: String, required: true},
    coverPhoto: {type: String, required: true},
    pages:[{type: String, required:true}],
    order: {type: Number, required: true}
}, {
    timestamps: true
})

const Chapter = model(collection, schema)
export default Chapter