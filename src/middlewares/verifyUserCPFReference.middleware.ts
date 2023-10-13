import { NextFunction, Request, Response } from "express";
import { userRepository } from '../database/usersRepository';

export const verifyUserCPFReference = (req: Request, res: Response, next: NextFunction) => {
  const userCPF = req.body.userCPF; 

  const user = userRepository.find((user) => 'CPF' in user && user.CPF === userCPF);

  if (!user) {
    return res.status(400).json({ error: "this CPF not found in database." });
  }

  next();
};
