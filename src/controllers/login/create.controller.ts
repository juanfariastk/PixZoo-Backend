import { Request, Response } from "express";
import { createSessionService } from "../../services/login/createSession.service";

export const createSessionController = async (req: Request, res:Response ) => {
  try {
    await createSessionService(req, res);
  } catch (e:any) {
    console.error(e);
  }
};
