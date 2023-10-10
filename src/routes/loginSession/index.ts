import { Application, Router } from "express";
import { createSessionController } from "../../controllers/login/create.controller";
import { listAllSessionsController } from "../../controllers/login/list.controller";
import { verifyEmailAndPassword } from "../../middlewares/verifyEmailAndPasswordCustomer.middleware";
import { verifyUserType } from "../../middlewares/verifyUserType.middleware";

const router = Router();

export const loginSessionRoutes = (app:Application) =>{
    router.post('/login', verifyUserType,verifyEmailAndPassword, createSessionController);

    router.get('/login', listAllSessionsController);
    
    app.use(router);
}