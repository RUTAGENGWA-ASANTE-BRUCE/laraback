import  { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../../utils/connectMongo'
import network_coupon from '../../../../models/network_coupon_model'

export default async function (
  req:NextApiRequest,
  res:NextApiResponse
) {
  const {method,body}=req;
  await connectMongo();
  switch (method) {
    case "GET":
      try{
        const documents=await network_coupon.find()
        return res.status(200).json(documents);
      }  
      catch (error){
        return res.status(400).json({msg:error.message})
      }
    case "POST":
        try {
          const newDocument=new network_coupon(body);
          const saveDocument=await newDocument.save();
          return res.status(200).json(saveDocument)          
        } catch (error) {
        return res.status(400).json({msg:error.message}) 
        }
    default:
      break;
  }
}

