import { Application, Router } from "express";
import { createCustomerController } from "../../controllers/customers/create.controller";
import { deleteCustomerController } from "../../controllers/customers/delete.controller";
import { listAllController, listIDController } from "../../controllers/customers/list.controller";
import { updateCustomerController } from "../../controllers/customers/update.controller";
import { generateCustomerId } from "../../middlewares/verifyAndGenerateID.middleware";
import { verifyCustomerCPF } from "../../middlewares/verifyCPF.middleware";
import { verifyUserEmail } from "../../middlewares/verifyEmailUsers.middleware";

const router = Router();

export const usersRoutes = (app: Application) => {
  router.post("/users", generateCustomerId, verifyUserEmail,verifyCustomerCPF, createCustomerController);

  router.get("/users", listAllController);

  router.get("/users/:id", listIDController);

  router.put("/users/:id", updateCustomerController);

  router.delete("/users/:id", deleteCustomerController);

  app.use(router);
};
