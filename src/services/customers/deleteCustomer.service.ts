import { Request, Response } from "express";
import { repositoryCustomers } from "../../database/customersRepository";

export const deleteCustomerService = async (req: Request, res: Response) => {
  try {
    const customerId: number = parseInt(req.params.id);

    const existingCustomerIndex: number = repositoryCustomers.findIndex((customer) => customer.id === customerId);

    if (existingCustomerIndex === -1) {
      return res.status(404).json({ message: "Customer not found" });
    }

    repositoryCustomers.splice(existingCustomerIndex, 1);

    return res.status(204).send(); 
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
