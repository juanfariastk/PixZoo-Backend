import { Request, Response } from "express";
import { DateTime } from "luxon";
import { paymentsRepository } from "../../database/paymentsRepository";
import { userRepository } from "../../database/usersRepository";
import { Administrator } from "../../interface/administrator";
import { Customer } from "../../interface/customers";
import { Payment } from '../../interface/payment';
import { User } from "../../interface/user";

export const createUserService = async (req: Request, res: Response) => {
  try {
    const receivedUser: User = req.body; 

    if ('CPF' in receivedUser) {
      const newCustomer: Customer = {
        id: req.body.id as number,
        name: receivedUser.name,
        email: receivedUser.email,
        password: receivedUser.password,
        birthday: receivedUser.birthday,
        CPF: receivedUser.CPF,
        amountDeposited: receivedUser.amountDeposited ? receivedUser.amountDeposited : 0,
      };

      const actualDateTime = DateTime.now().setZone('America/Sao_Paulo'); 

      if(receivedUser.amountDeposited){
        const newPayment:Payment = {
          userID:req.body.id as number,
          userCPF:receivedUser.CPF,
          value:receivedUser.amountDeposited,
          date:actualDateTime.toString()
        }

        paymentsRepository.push(newPayment);

      }
      userRepository.push(newCustomer);

      return res.status(201).json(newCustomer);
    } else {
      const newAdministrator: Administrator = {
        id: req.body.id as number,
        name: receivedUser.name,
        email: receivedUser.email,
        password: receivedUser.password,
        CNPJ: receivedUser.CNPJ ? receivedUser.CNPJ : 'not have',
        createdIn: new Date().toLocaleDateString('pt-BR')
      };

      userRepository.push(newAdministrator);

      return res.status(201).json(newAdministrator);
    }
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};