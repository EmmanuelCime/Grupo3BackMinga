import { Router } from "express";
import usersRouter from "./users.js";
import companyRouter from "./company.js"

const routerIndex = Router()

routerIndex.use('/users', usersRouter)
routerIndex.use('/company', companyRouter)


export default routerIndex
