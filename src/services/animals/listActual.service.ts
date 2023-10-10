import { Response } from "express";
import { sweepstakesRepository } from "../../database/sweepstakesRepository";

export const listActualDrawService = (res: Response) => {
    try {
        res.status(200).json({actualDraw:sweepstakesRepository})
    } catch (e: any) {
      console.error(e);
      return res.status(500).json({ error: e.message });
    }
  };
  
  
