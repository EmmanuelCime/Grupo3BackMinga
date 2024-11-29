import { Schema, model } from "mongoose";

let collection = "companies";
let schema = new Schema({
  name: { type: String, required: true },
  webSite: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  active: {type: Boolean, required: true},
  userId: { type: Schema.Types.ObjectId, ref: "users" }
}, {
    timestamps: true
});


let Company = model(collection, schema);
export default Company;