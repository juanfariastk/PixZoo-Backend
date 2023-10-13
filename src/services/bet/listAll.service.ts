import { Response } from "express";
import { userBetRepository } from "../../database/usersBetRepository";

export const listAllBetService = (res:Response) => {
  try {
    if(userBetRepository.length ==0){
        return res.status(404).json({message:"there were no sweeptakes in database."})
    }
    return res.status(200).json(userBetRepository);
  } catch (e:any) {
    console.log(e)
    throw e;
  }
};
