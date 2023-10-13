import { Request, Response } from "express";
import { createBetService } from "../../services/bet/create.service";
export const createBetController = async (req: Request, res:Response ) => {
  try {
    await createBetService(req, res);
  } catch (e:any) {
    console.error(e);
  }
};
