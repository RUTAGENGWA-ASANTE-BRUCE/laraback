import  { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../utils/connectMongo'
import store from '../../../models/store_model'

export default async function (
  req:NextApiRequest,
  res:NextApiResponse
) {
  const {method,body}=req;
  await connectMongo();
  switch (method) {
    case "GET":
      try{
        const documents=await store.find()
        return res.status(200).json(documents);
      }  
      catch (error){
        return res.status(400).json({msg:error})
      }
    case "POST":
        try {
          const newDocument=new store(body);
          const saveDocument=await newDocument.save();
          return res.status(200).json(saveDocument)          
        } catch (error) {
        return res.status(400).json({msg:error}) 
        }
    default:
      break;
  }
}

