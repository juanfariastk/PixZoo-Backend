import { Request, Response } from "express";
import { userBetRepository } from "../../database/usersBetRepository";

export const listBetByIDService = async (req: Request, res: Response) => {
  try {
    const {Id} = req.params;

    const userSweeptakesWithId = userBetRepository.filter((sweeptake) => sweeptake.userId === parseInt(Id));

    if (userSweeptakesWithId.length === 0) {
      return res.status(404).json({ error: "no bets found for the provided ID." });
    }

    return res.status(200).json(userSweeptakesWithId);
  } catch (e: any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
