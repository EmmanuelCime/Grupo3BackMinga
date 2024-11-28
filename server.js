import express from "express";
import "dotenv/config.js";
import "./config/database.js";
import cors from "cors";
import morgan from "morgan";
import routerIndex from "./router/index.js";


const server = express();

const PORT = process.env.PORT || 8080;

const ready = () => console.log(`Server ready in port :` + PORT)


server.use(express.json()) //Permite trabajar con formato json en entrada y salida
server.use(express.urlencoded({ extended: true }))
server.use(cors())
server.use(morgan('dev')) //Controlar y ver el registro de las peticiones al servidor

//router
server.use("/api", routerIndex)


server.listen(PORT, ready)