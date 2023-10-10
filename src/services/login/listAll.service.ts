import { Response } from "express";
import { sessionRepository } from "../../database/sessionsRepository";


export const listAllSessionsService = (res:Response) => {
  try {
    if(sessionRepository.length ==0){
        return res.status(404).json({message:"there were no sessions today."})
    }
    return res.status(200).json(sessionRepository);
  } catch (e:any) {
    console.log(e)
    throw e;
  }
};
