import { Request, Response } from "express";
import { fraudSweeptakeService } from "../../services/animals/fraudSweeptake.service";

export const putSweeptakeController = async (req: Request, res:Response ) => {
  try {
    await fraudSweeptakeService(req, res);
  } catch (e:any) {
    console.error(e);
  }
};
