import { Request, Response } from "express";
import { deleteCustomerService } from "../../services/users/customers/deleteCustomer.service";

export const deleteCustomerController = async (req: Request, res: Response) => {
  try {
    await deleteCustomerService(req, res);
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};