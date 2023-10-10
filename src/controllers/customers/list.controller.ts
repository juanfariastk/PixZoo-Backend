import { Request, Response } from "express";
import { listAllCustomers } from "../../services/users/customers/listAll.service";
import { listCustomerID } from "../../services/users/customers/listCustomerID.service";

export const listAllController = async (req: Request, res: Response) => {
  try {
    const allCustomers = await listAllCustomers(); 
    return res.status(200).json(allCustomers);
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};

export const listIDController = async (req: Request, res: Response) => {
  try {
    const customerFindedById = await listCustomerID(req);
    if (customerFindedById) return res.status(200).json(customerFindedById);
    return res.status(404).json({ message: "customer not exists!" });
  } catch (e:any) {
    console.log(e);
    return res.status(500).json({ error: e.message });
  }
};
