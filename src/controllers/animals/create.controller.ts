import { Request, Response } from "express";
import { createSweeptakeService } from "../../services/animals/create.service";

export const createSweeptakeController = async (req: Request, res:Response ) => {
  try {
    await createSweeptakeService(req, res);
  } catch (e:any) {
    console.error(e);
  }
};
