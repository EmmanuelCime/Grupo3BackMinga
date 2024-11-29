import mongoose from "mongoose";

let url = process.env.URI_MONGO

async function connectDatabase() {
    try {
        mongoose.connect(url);
        console.log("Database connected");
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}

connectDatabase();