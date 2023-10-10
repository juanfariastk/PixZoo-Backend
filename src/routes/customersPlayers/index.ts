import { Application, Router } from "express";
import { createCustomerController } from "../../controllers/customers/create.controller";
import { deleteCustomerController } from "../../controllers/customers/delete.controller";
import { listAllController, listIDController } from "../../controllers/customers/list.controller";
import { updateCustomerController } from "../../controllers/customers/update.controller";
import { generateCustomerId } from "../../middlewares/verifyAndGenerateID.middleware";
import { verifyCustomerCPF } from "../../middlewares/verifyCPF.middleware";

const router = Router();

export const customersPlayersRoutes = (app: Application) => {
  router.post("/customers", generateCustomerId, verifyCustomerCPF, createCustomerController);

  router.get("/customers", listAllController);

  router.get("/customers/:id", listIDController);

  router.put("/customers/:id", updateCustomerController);

  router.delete("/customers/:id", deleteCustomerController);

  app.use(router);
};
