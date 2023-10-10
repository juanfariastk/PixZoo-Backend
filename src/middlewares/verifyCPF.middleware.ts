import { NextFunction, Request, Response } from "express";
import { userRepository } from "../database/usersRepository";

export const verifyCustomerCPF = (req: Request, res: Response, next: NextFunction) => {
  try {
    const customerWithSameCPF = userRepository.find((customer) => {
      if ('CPF' in customer) {
        return req.body.CPF === customer.CPF;
      }
      return false; 
    });

    if (customerWithSameCPF) {
      return res.status(409).json({ message: "this customer already exists!" });
    }

    next();
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
