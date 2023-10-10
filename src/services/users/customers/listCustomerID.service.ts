import { Request } from "express";
import { userRepository } from "../../../database/usersRepository";
import { Customer } from "../../../interface/customers";
import { User } from "../../../interface/user";

export const listCustomerID = (req: Request) => {
  try {
    const customerFinded = userRepository.find((customer: User) => {
        return parseInt(req.params.id) === customer.id;
    });

    if (customerFinded && 'CPF' in customerFinded) {
      return customerFinded as Customer;
    }

    return null;
  } catch (e:any) {
    console.log(e)
    throw e;
  }
};
