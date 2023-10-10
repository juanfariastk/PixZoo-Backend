import { NextFunction, Request, Response } from "express";
import { userRepository } from "../database/usersRepository";
import { User } from "../interface/user";

export const verifyUserType = (req: Request, res: Response, next: NextFunction) => {
  try {
    const userEmail = req.body.email;

    const user = userRepository.find((user: User) => {
      if ('email' in user && user.email === userEmail) {
        return true;
      }
      return false;
    });

    if (user) {
      req.body.userType = 'CPF' in user ? "customer" : "administrator"; 
    }

    next();
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
