import { NextFunction, Request, Response } from "express";
import { userRepository } from "../database/usersRepository";
import { User } from "../interface/user";

const calculateNextCustomerId = () => {
  if (userRepository.length === 0) {
    return 1;
  } else {
    const lastCustomer:User = userRepository[userRepository.length - 1];
    return lastCustomer.id + 1;
  }
};

export const generateCustomerId= ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const nextCustomerId = calculateNextCustomerId();
    req.body.id = nextCustomerId; 
    next();
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
