import { Request, Response } from "express";
import { DateTime } from "luxon";
import { paymentsRepository } from "../../database/paymentsRepository";
import { Payment } from "../../interface/payment";

export const createPaymentService = async (req: Request, res: Response) => {
  try {

    const actualDateTime = DateTime.now().setZone('America/Sao_Paulo'); 

    const newPayment:Payment  = {
      userID:req.body.userId,
      userCPF:req.body.userCPF,
      value: parseFloat(req.body.value),
      date:actualDateTime.toString()
    };

    paymentsRepository.push(newPayment);

    return res.status(201).json(newPayment);
  } catch (e:any) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
