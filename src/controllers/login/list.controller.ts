import { Request, Response } from "express";
import { listAllSessionsService } from "../../services/login/listAll.service";

export const listAllSessionsController = async (req: Request, res:Response ) => {
  try {
    await listAllSessionsService(res);
  } catch (e:any) {
    console.error(e);
  }
};
