import express, { Application } from "express";
import { loginSessionRoutes } from "./loginSession";
import { paymentsRoutes } from "./paymentsRoutes";
import { sweepstakesRoutes } from "./sweepstakesAnimals";
import { userBetRoutes } from "./userBetRoutes";
import { usersRoutes } from "./usersRoutes";

export const routes = (app:Application) =>{
    app.use(express.json());
    usersRoutes(app);
    loginSessionRoutes(app);
    sweepstakesRoutes(app);
    paymentsRoutes(app);
    userBetRoutes(app);
}