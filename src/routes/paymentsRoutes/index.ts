import { Application, Router } from "express";
import { createPaymentController } from "../../controllers/payments/create.controller";
import { listAllPaymentsController } from "../../controllers/payments/list.controller";


const router = Router();

export const paymentsRoutes = (app:Application) =>{
    router.post('/pay', createPaymentController);

    router.get('/pay',listAllPaymentsController );
    
    app.use(router);
}