import express from "express";
import "dotenv/config.js";
import "./config/database.js";
import cors from "cors";
import morgan from "morgan";
import main from "./router/main.js"

const server = express();
const PORT = process.env.PORT;
const ready = () => console.log("port: " + PORT);

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors());
server.use(morgan('dev'));
server.use('/api', main);

server.listen(PORT, ready);