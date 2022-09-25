// import  { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../utils/connectMongo'
import user from '../../../models/user_model'
import cookie from "cookie";

export default async function (
  req,
  res
) {
  const {method,body}=req;
  await connectMongo();
  switch (method) {
    case "GET":
      try{
        const documents=await user.find()
       
          return res.status(200).json(documents);
      }  
      catch (error){
        return res.status(400).json({msg:error})
      }
    case "POST":
        try {
          const newDocument=new user(body);
          const savedDocument=await newDocument.save();
          res.setHeader(
            "Set-Cookie",
            cookie.serialize("userData", savedDocument, {
              httpOnly: true,
              maxAge: 60 * 60 * 5,
              sameSite: "strict",
              path: "/",
            })
            );
          return res.status(200).json(savedDocument)          
        } catch (error) {
        return res.status(400).json({msg:error}) 
        }
    default:
      break;
  }
}

