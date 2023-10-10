import { Request } from "express";
import { repositoryCustomers } from "../../database/customersRepository";
import { Customer } from "../../interface/customers";

export const listCustomerID = (req: Request) => {
  try {
    const customerFinded = repositoryCustomers.find((customer: Customer) => {
        return parseInt(req.params.id) === customer.id;
    });
    if(customerFinded) return customerFinded;

    return null;
  } catch (e:any) {
    console.log(e)
    throw e;
  }
};
