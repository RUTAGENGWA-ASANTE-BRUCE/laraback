import  { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../utils/connectMongo'
import bonus_transaction from '../../../models/bonus_transaction_model'
import cashback_transaction from '../../../models/cashback_transaction_model'
import sales_transaction from '../../../models/sales_transaction_model'
import {getTotalMoney} from '../../../utils/func'
export default async function (
  req:NextApiRequest,
  res:NextApiResponse
) {
  const {method,body}=req;
  await connectMongo();
  switch (method) {
    case "GET":
      try{
        const bonus_transactions=await bonus_transaction.find()
        const cashback_transactions=await cashback_transaction.find()
        const sales_transactions=await sales_transaction.find()
        const totalEarning=getTotalMoney(sales_transactions)
        const totalBonus=getTotalMoney(bonus_transactions)
        const totalCashback=getTotalMoney(cashback_transactions)
        const totalMoney=totalEarning+totalBonus+totalCashback;

        const dataObject={
          totalBonus,
          totalEarning,
          totalMoney,
          totalCashback
        }
        
        return res.status(200).json(dataObject);
      }  
      catch (error){
        return res.status(400).json({msg:error})
      }
    default:
      break;
  }
}

