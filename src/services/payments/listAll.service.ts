import { Response } from "express";
import { paymentsRepository } from "../../database/paymentsRepository";

export const listAllPaymentsService = (res:Response) => {
  try {
    if(paymentsRepository.length ==0){
        return res.status(404).json({message:"there were no payments in database."})
    }
    return res.status(200).json(paymentsRepository);
  } catch (e:any) {
    console.log(e)
    throw e;
  }
};
