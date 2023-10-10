import { NextFunction, Request, Response } from "express";
import { repositoryCustomers } from "../database/customersRepository";
import { Customer } from "../interface/customers";

const calculateNextCustomerId = () => {
  if (repositoryCustomers.length === 0) {
    return 1;
  } else {
    const lastCustomer:Customer = repositoryCustomers[repositoryCustomers.length - 1];
    return lastCustomer.id + 1;
  }
};
export const generateCustomerId= ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const nextCustomerId = calculateNextCustomerId();
    req.body.id = nextCustomerId; 
    next();
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
