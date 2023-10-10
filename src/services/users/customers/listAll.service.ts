import { userRepository } from "../../../database/usersRepository";
import { Customer, CustomersWithoutCPFAndID } from "../../../interface/customers";

export const listAllCustomers = () => {
  try {
    const customersWithoutData: CustomersWithoutCPFAndID[] = userRepository
      .filter((customer) => 'CPF' in customer) 
      .map((customer) => {
        const { CPF, id, ...customerWithoutIDAndCPF } = customer as Customer;
        return customerWithoutIDAndCPF;
      });

    return customersWithoutData;
  } catch (e:any) {
    console.error(e);
    throw e;
  }
};
