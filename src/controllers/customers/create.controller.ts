import { Request, Response } from "express";
import { createUserService } from "../../services/users/create.service";

export const createCustomerController = async (req: Request, res:Response ) => {
  try {
    await createUserService(req, res);
  } catch (e:any) {
    console.error(e);
  }
};
