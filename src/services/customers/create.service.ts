import { Request, Response } from "express";
import { repositoryCustomers } from "../../database/customersRepository";
import { Customer } from "../../interface/customers";

export const createCustomerService = async (req: Request, res: Response) => {
  try {
    const receivedCustomer: Customer = req.body;

    const newCustomer: Customer = {
      id: req.body.id as number, 
      name: receivedCustomer.name,
      email: receivedCustomer.email,
      password: receivedCustomer.password,
      birthday: receivedCustomer.birthday,
      CPF: receivedCustomer.CPF,
      amountDeposited: receivedCustomer.amountDeposited ? receivedCustomer.amountDeposited : 0 ,
    };

    repositoryCustomers.push(newCustomer);

    return res.status(201).json(newCustomer);
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};

