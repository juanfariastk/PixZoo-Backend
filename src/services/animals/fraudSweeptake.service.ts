import { Request, Response } from "express";
import { sweepstakesRepository } from "../../database/sweepstakesRepository";
import { allAnimals } from "../../shared/animals";

export const fraudSweeptakeService = (req: Request, res: Response) => {
  type AnimalSet = {
    oldAnimal: string;
    newAnimal: string;
  };

  try {
    const updates: AnimalSet[] = req.body;

    for (const update of updates) {
      const oldAnimal: string = update.oldAnimal;
      const newAnimal: string = update.newAnimal;

      if (allAnimals[oldAnimal]) {
        const oldAnimalKey = Object.keys(allAnimals).find(key => allAnimals[key] === allAnimals[oldAnimal]);
        if (oldAnimalKey) {
          const newAnimalKey = Object.keys(allAnimals).find(key => allAnimals[key] === allAnimals[newAnimal]);
          if (newAnimalKey) {
            sweepstakesRepository.forEach((animalData) => {
              if (animalData[oldAnimalKey]) {
                delete animalData[oldAnimalKey] 
                animalData[newAnimalKey] = allAnimals[newAnimalKey];
              }
            });
          } else {
            return res.status(400).json({ error: `Animal ${newAnimal} not found in allAnimals list.` });
          }
        } else {
          return res.status(400).json({ error: `Animal ${oldAnimal} not found in allAnimals list.` });
        }
      } else {
        return res.status(400).json({ error: `Animal ${oldAnimal} not found in allAnimals list.` });
      }
    }

    return res.status(200).json(sweepstakesRepository);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
