import { NextFunction, Request, Response } from "express";
import { repositoryCustomers } from "../database/customersRepository";
import { Customer } from "../interface/customers";

export const verifyCustomerCPF = (req: Request, res: Response, next: NextFunction) => {
  try {
    const customerWithSameCPF = repositoryCustomers.find((customer: Customer) => {
      return req.body.CPF === customer.CPF;
    });

    if (customerWithSameCPF) {
      return res.status(409).json({ message: "This customer already exists!" });
    }

    next();
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
