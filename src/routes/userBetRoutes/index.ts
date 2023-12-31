import { Application, Router } from "express";
import { createBetController } from "../../controllers/bet/create.controller";
import { listAllBetController, listBetByCPFsByCPFController, listBetByIDController } from "../../controllers/bet/list.controller";
import { verifyUserCPFReference } from "../../middlewares/verifyUserCPFReference.middleware";

const router = Router();

export const userBetRoutes = (app:Application) =>{
    router.post('/userBet', verifyUserCPFReference, createBetController);

    router.get('/userBet/all', listAllBetController );

    router.get('/userBet',verifyUserCPFReference, listBetByCPFsByCPFController)
    
    router.get('/userBet/:Id', listBetByIDController);
    
    app.use(router);
}