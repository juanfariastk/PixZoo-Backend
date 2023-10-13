import { AnimalData } from "./animal"
export type UserBet = {
    userId:number,
    userCPF:string,
    userEmail:string,
    animalsSelected:AnimalData[],
    amountBet:number,
    date:string,
}