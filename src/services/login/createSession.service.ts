import { Request, Response } from "express";
import { DateTime } from "luxon";
import { sessionRepository } from "../../database/sessionsRepository";
import { userRepository } from "../../database/usersRepository";
import { Login, LoginSession } from "../../interface/login";

export const createSessionService = async (req: Request, res: Response) => {
  try {
    const receivedCustomer: Login = req.body;

    const actualDateTime = DateTime.now().setZone('America/Sao_Paulo');


    const user = userRepository.find((customer) => {
      return receivedCustomer.email === customer.email && receivedCustomer.password === customer.password;
    });

    if (!user) {
      return res.status(401).json({ message: "Email or password invalid!" });
    }

    const newSession: LoginSession = {
      userId: user.id, 
      userEmail: receivedCustomer.email,
      openedAt: actualDateTime.toFormat('dd/MM/yyyy HH:mm:ss'),
      userType: req.body.userType
    };

    sessionRepository.push(newSession);

    return res.status(201).json(newSession);
  } catch (e: any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
