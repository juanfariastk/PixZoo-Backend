import { NextFunction, Request, Response } from "express";
import { userRepository } from "../database/usersRepository";
import { User } from "../interface/user";

export const verifyEmailAndPassword = (req: Request, res: Response, next: NextFunction) => {
  try {
    const customerVerified = userRepository.find((customer: User) => {
      return req.body.password === customer.password && req.body.email === customer.email;
    });

    if (!customerVerified) {
      return res.status(401).json({ message: "email or password invalid!" });
    }

    next();
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
