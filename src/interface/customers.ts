export interface Customer {
    id:number
    name:string;
    email:string;
    password:string;
    birthday:string;
    CPF:string;
    amountDeposited?: number;
}
export interface CustomersWithoutID extends Omit<Customer, 'id'> {}
export interface CustomersWithoutCPFAndID extends Omit<Customer, 'CPF' | 'id'> {}