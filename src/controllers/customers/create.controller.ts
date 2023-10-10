import { Request, Response } from "express";
import { createCustomerService } from "../../services/customers/create.service";

export const createCustomerController = async (req: Request, res:Response ) => {
  try {
    await createCustomerService(req, res);
  } catch (e:any) {
    console.error(e);
  }
};
