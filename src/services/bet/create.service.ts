import { Request, Response } from "express";
import { DateTime } from "luxon";
import { userBetRepository } from "../../database/usersBetRepository";
import { UserBet } from "../../interface/userSweeptake";

export const createBetService = async (req: Request, res: Response) => {
  try {
    const receivedSweeptake: UserBet = req.body;

    const actualDateTime = DateTime.now().setZone('America/Sao_Paulo').toFormat('dd/MM/yyyy HH:mm:ss');

    const newSweeptake: UserBet = {
      userId: receivedSweeptake.userId,
      userCPF: receivedSweeptake.userCPF,
      userEmail: receivedSweeptake.userEmail,
      animalsSelected: receivedSweeptake.animalsSelected,
      amountBet: receivedSweeptake.amountBet,
      date: actualDateTime,
    };

    userBetRepository.push(newSweeptake);

    return res.status(201).json(newSweeptake);
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
