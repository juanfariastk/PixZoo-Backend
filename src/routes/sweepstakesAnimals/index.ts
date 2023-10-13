import { Application, Router } from "express";
import { createSweeptakeController } from "../../controllers/animals/create.controller";
import { listActualDrawAnimalsController, listGenerateRandomDrawAnimalsController } from "../../controllers/animals/list.controller";
import { putSweeptakeController } from "../../controllers/animals/put.controller";
import { verifySweeptakesExists } from "../../middlewares/verifySweepstakesExists.middleware";
const router = Router();

export const sweepstakesRoutes = (app:Application) =>{
    router.get('/animals/draw/:draws', listGenerateRandomDrawAnimalsController );

    router.get('/animals/draw', listActualDrawAnimalsController)

    router.post('/animals/draw', verifySweeptakesExists,createSweeptakeController);

    router.put('/animals/fraud', putSweeptakeController)

    app.use(router);
}