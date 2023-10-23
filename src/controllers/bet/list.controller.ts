import { Request, Response } from "express";
import { listAllBetService } from "../../services/bet/listAll.service";
import { listBetByCPFsByCPFService } from "../../services/bet/listByCPF.service";
import { listBetByIDService } from "../../services/bet/listByID.service";

export const listAllBetController = async (req: Request, res:Response ) => {
  try {
    await listAllBetService(res);
  } catch (e:any) {
    console.error(e);
  }
};

export const listBetByCPFsByCPFController = async (req: Request, res:Response ) => {
    try {
      await listBetByCPFsByCPFService(req,res);
    } catch (e:any) {
      console.error(e);
    }
  };

  export const listBetByIDController = async (req: Request, res:Response ) => {
    try {
      await listBetByIDService(req,res);
    } catch (e:any) {
      console.error(e);
    }
  };
