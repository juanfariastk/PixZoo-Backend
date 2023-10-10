import { NextFunction, Request, Response } from "express";
import { DateTime } from "luxon";
import { sweepstakesRepository } from "../database/sweepstakesRepository";

export const verifySweeptakesExists = (req: Request, res: Response, next: NextFunction) => {
    try {
      const sweepstakeWithCreatedAt = sweepstakesRepository.find(entry => entry["CreatedAt"]);
  
      if (sweepstakeWithCreatedAt) {
        const createdAt = sweepstakeWithCreatedAt["CreatedAt"][0];
  
        if (typeof createdAt === 'string') {
          const lastPostTime = DateTime.fromISO(createdAt);
          const currentTime = DateTime.now().setZone('America/Sao_Paulo');
          const hoursSinceLastPost = currentTime.diff(lastPostTime, 'hours').hours;
  
          if (hoursSinceLastPost < 24) {
            return res.status(429).json({ error: 'the draw change can only occur every 24 hours' });
          }
        }
      }
  
      next(); 
    } catch (e:any) {
      console.error(e);
      return res.status(500).json({ error: e.message });
    }
  };
  
  
