import  { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../utils/connectMongo'
import click_log from '../../../models/click_log_model'

export default async function (
  req:NextApiRequest,
  res:NextApiResponse
) {
  const {method,body}=req;
  await connectMongo();
  switch (method) {
    case "GET":
      try{
        const documents=await click_log.find()
        return res.status(200).json(documents);
      }  
      catch (error){
        return res.status(400).json({msg:error})
      }
    case "POST":
        try {
          const newDocument=new click_log(body);
          const saveDocument=await newDocument.save();
          return res.redirect("google.com")     
        } catch (error) {
        return res.status(400).json({msg:error}) 
        }
    default:
      break;
  }
}

