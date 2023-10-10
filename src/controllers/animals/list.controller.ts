import { Request, Response } from "express";
import { listActualDrawService } from "../../services/animals/listActual.service";
import { listRandomDrawService } from "../../services/animals/listRandomDraw.service";

export const listGenerateRandomDrawAnimalsController = async (req: Request, res: Response) => {
  try {
    await listRandomDrawService(req, res); 
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};

export const listActualDrawAnimalsController = async (req:Request, res:Response) =>{
    try{    
        await listActualDrawService(res);
    }catch(e:any){
        console.log(e);
        return res.status(500).json({ error: e.message });
    }
}