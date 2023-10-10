import { Request, Response } from "express";
import { updateCustomerService } from "../../services/users/customers/updateCustomer.service";

export const updateCustomerController = async (req: Request, res: Response) => {
    try {
      await updateCustomerService(req,res);
    } catch (e:any) {
      console.log(e);
      return res.status(500).json({ error: e.message });
    }
  };