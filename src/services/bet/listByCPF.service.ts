import { Request, Response } from "express";
import { userBetRepository } from "../../database/usersBetRepository";

export const listBetByCPFsByCPFService = async (req: Request, res: Response) => {
  try {
    const { userCPF } = req.body;

    const userSweeptakesWithCPF = userBetRepository.filter((sweeptake) => sweeptake.userCPF === userCPF);

    if (userSweeptakesWithCPF.length === 0) {
      return res.status(404).json({ error: "no bets found for the provided CPF." });
    }

    return res.status(200).json(userSweeptakesWithCPF);
  } catch (e: any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
