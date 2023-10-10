import { repositoryCustomers } from "../../database/customersRepository";
import { CustomersWithoutCPFAndID } from "../../interface/customers";

export const listAllCustomers = () => {
  try {
    const customersWithoutData: CustomersWithoutCPFAndID[] = repositoryCustomers.map((customer) => {
      const { id, CPF, ...customerWithoutIDAndCPF } = customer;
      return customerWithoutIDAndCPF;
    });

    return customersWithoutData;
  } catch (e:any) {
    console.error(e);
    throw e;
  }
};
