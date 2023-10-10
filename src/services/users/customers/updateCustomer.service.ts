import { Request, Response } from "express";
import { userRepository } from "../../../database/usersRepository";
import { CustomersWithoutCPFAndID } from "../../../interface/customers";
import { User } from "../../../interface/user";

export const updateCustomerService = async (req: Request, res: Response) => {
  try {
    const customerId: number = parseInt(req.params.id);
    const updatedData: CustomersWithoutCPFAndID = req.body;

    const existingCustomerIndex: number = userRepository.findIndex((customer) => customer.id === customerId);

    if (existingCustomerIndex === -1) {
      return res.status(404).json({ message: "customer not found" });
    }

    const existingCustomer: User = userRepository[existingCustomerIndex];

    if (!('CPF' in existingCustomer)) {
      return res.status(404).json({ message: "customer not found" });
    }

    const updatedCustomer: CustomersWithoutCPFAndID = {
      name: updatedData.name || existingCustomer.name,
      email: updatedData.email || existingCustomer.email,
      password: updatedData.password || existingCustomer.password,
      birthday: updatedData.birthday || existingCustomer.birthday,
      amountDeposited: updatedData.amountDeposited || existingCustomer.amountDeposited || 0,
    };

    userRepository[existingCustomerIndex] = {
      ...existingCustomer,
      ...updatedCustomer,
    };

    return res.status(200).json(updatedCustomer);
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
