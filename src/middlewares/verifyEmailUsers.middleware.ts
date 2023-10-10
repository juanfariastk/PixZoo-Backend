import { NextFunction, Request, Response } from "express";
import { userRepository } from "../database/usersRepository";
import { User } from "../interface/user";

export const verifyUserEmail = (req: Request, res: Response, next: NextFunction) => {
  try {
    const customerWithSameEmail = userRepository.find((user: User) => {
      if ('email' in user) {
        return req.body.email === user.email;
      }
      return false;
    });

    if (customerWithSameEmail) {
      return res.status(409).json({ message: "This customer already exists!" });
    }
    next();
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
