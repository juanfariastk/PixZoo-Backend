import express, { Application } from "express";
import { loginSessionRoutes } from "./loginSession";
import { sweepstakesRoutes } from "./sweepstakesAnimals";
import { usersRoutes } from "./usersRoutes";

export const routes = (app:Application) =>{
    app.use(express.json());
    usersRoutes(app);
    loginSessionRoutes(app);
    sweepstakesRoutes(app);
}