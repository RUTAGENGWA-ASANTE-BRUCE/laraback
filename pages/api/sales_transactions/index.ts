import  { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../utils/connectMongo'
import sales_transaction from '../../../models/sales_transaction_model'

export default async function (
  req:NextApiRequest,
  res:NextApiResponse
) {
  const {method,body}=req;
  await connectMongo();
  switch (method) {
    case "GET":
      try{
        const documents=await sales_transaction.find()
        return res.status(200).json(documents);
      }  
      catch (error){
        return res.status(400).json({msg:error})
      }
    case "POST":
        try {
          const newDocument=new sales_transaction(body);
          const saveDocument=await newDocument.save();
          return res.status(200).json(saveDocument)          
        } catch (error) {
        return res.status(400).json({msg:error}) 
        }
    default:
      break;
  }
}

