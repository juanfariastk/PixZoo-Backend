import { Request, Response } from "express";
import { createPaymentService } from "../../services/payments/create.service";

export const createPaymentController = async (req: Request, res:Response ) => {
  try {
    await createPaymentService(req, res);
  } catch (e:any) {
    console.error(e);
  }
};
