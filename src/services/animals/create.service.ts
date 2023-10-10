import { Request, Response } from "express";
import { DateTime } from "luxon";
import { sweepstakesRepository } from "../../database/sweepstakesRepository";
import { AnimalData } from "../../interface/animal";

export const createSweeptakeService = async (req: Request, res: Response) => {
  try {
    const receivedAnimals: AnimalData[] = req.body;

    const currentDate = DateTime.now().setZone('America/Sao_Paulo').toISO();

    for (const animal of receivedAnimals) {
      const { key, value } = animal;
      sweepstakesRepository.push({ [`${key}`]: value });
    }

    if(currentDate){
        const dateObject = { ['CreatedAt']: [currentDate.toString()] };
        sweepstakesRepository.push(dateObject);
    }
    return res.status(201).json(receivedAnimals);
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
