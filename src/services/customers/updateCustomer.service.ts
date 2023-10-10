import { Request, Response } from "express";
import { repositoryCustomers } from "../../database/customersRepository";
import { Customer, CustomersWithoutCPFAndID } from "../../interface/customers";

export const updateCustomerService = async (req: Request, res: Response) => {
  try {
    const customerId: number = parseInt(req.params.id);
    const updatedData: CustomersWithoutCPFAndID = req.body;

    const existingCustomerIndex: number = repositoryCustomers.findIndex((customer) => customer.id === customerId);

    if (existingCustomerIndex === -1) {
      return res.status(404).json({ message: "customer not found" });
    }

    const existingCustomer: Customer = repositoryCustomers[existingCustomerIndex];

    const updatedCustomer: Customer = {
      id: customerId,
      name: updatedData.name || existingCustomer.name,
      email: updatedData.email || existingCustomer.email,
      password: updatedData.password || existingCustomer.password,
      birthday: updatedData.birthday || existingCustomer.birthday,
      CPF: existingCustomer.CPF, 
      amountDeposited: updatedData.amountDeposited || existingCustomer.amountDeposited || 0,
    };

    repositoryCustomers[existingCustomerIndex] = updatedCustomer;
    
    return res.status(200).json(updatedCustomer);
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
