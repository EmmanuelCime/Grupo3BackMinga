import { Schema, model } from "mongoose";

let collection = "mangas";
let schema = new Schema({
    authorId: { type: Schema.Types.ObjectId, ref: "authors", required: true},
    companyId: { type: Schema.Types.ObjectId, ref: "companies" },
    title: { type: String, required: true },
    coverPhoto: { type: String, required: true },
    description: { type: String, required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: "categories", required: true },
}, {
    timestamps: true
});


let Manga = model(collection, schema);
export default Manga;