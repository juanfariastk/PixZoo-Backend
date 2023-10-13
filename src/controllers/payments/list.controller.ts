import { Request, Response } from "express";
import { listAllPaymentsService } from "../../services/payments/listAll.service";

export const listAllPaymentsController = async (req: Request, res:Response ) => {
  try {
    await listAllPaymentsService(res);
  } catch (e:any) {
    console.error(e);
  }
};
