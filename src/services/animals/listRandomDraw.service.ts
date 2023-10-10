import { Request, Response } from "express";
import { allAnimals } from "../../shared/animals";
import { getRandomKeysAndValues } from "../../utils/randomElements";

export const listRandomDrawService = (req: Request, res: Response) => {
    try {
        const selectedRandomAnimalsKeys = getRandomKeysAndValues(allAnimals, parseInt(req.params.draws))
        res.status(200).json(selectedRandomAnimalsKeys);
    } catch (e: any) {
      console.error(e);
      return res.status(500).json({ error: e.message });
    }
  };
  
  
