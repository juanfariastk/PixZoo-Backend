import express, { Application } from "express";
import { customersPlayersRoutes } from "./customersPlayers";

export const routes = (app:Application) =>{
    app.use(express.json());
    customersPlayersRoutes(app);
}