import { Request, Response } from "express";
import { DateTime } from "luxon";
import { sessionRepository } from "../../database/sessionsRepository";
import { Login, LoginSession } from "../../interface/login";

export const createSessionService = async (req: Request, res: Response) => {
  try {
    const receivedCustomer: Login = req.body;

    const actualDateTime = DateTime.now().setZone('America/Sao_Paulo'); 

    const newSession: LoginSession = {
      "userEmail": receivedCustomer.email,
      "openedAt": actualDateTime.toFormat('dd/MM/yyyy HH:mm:ss'), 
      "userType": req.body.userType
    };

    sessionRepository.push(newSession);

    return res.status(201).json(newSession);
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
