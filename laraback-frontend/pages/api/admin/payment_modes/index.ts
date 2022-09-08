import  { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../../utils/connectMongo'
import payment_mode from '../../../../models/payment_mode_model'

export default async function (
  req:NextApiRequest,
  res:NextApiResponse
) {
  const {method,body}=req;
  await connectMongo();
  switch (method) {
    case "GET":
      try{
        const documents=await payment_mode.find()
        return res.status(200).json(documents);
      }  
      catch (error){
        return res.status(400).json({msg:error.message})
      }
    case "POST":
        try {
          const newDocument=new payment_mode(body);
          const saveDocument=await newDocument.save();
          return res.status(200).json(saveDocument)          
        } catch (error) {
        return res.status(400).json({msg:error.message}) 
        }
    default:
      break;
  }
}

