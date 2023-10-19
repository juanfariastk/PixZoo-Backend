import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes/routes";
const app = express();

app.use((req:Request, res:Response, next:NextFunction) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

routes(app)

export default app;