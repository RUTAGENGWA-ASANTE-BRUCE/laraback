import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../utils/connectMongo";
import country_master from "../../../models/country_master_model";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    body,
    query: { id },
  } = req;
  await connectMongo();
  switch (method) {
    case "GET":
      try {
        const document = await country_master.findById(id);
        if (!document)
          return res.status(404).json({ msg: "The document does not exist" });
        return res.status(200).json(document);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "DELETE":
      try {
        const deleteDocument = await country_master.findByIdAndDelete(id);
        if (!deleteDocument)
          return res.status(404).json({ msg: "The document does not exist" });
        return res.status(204).json();
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "PUT":
      try {
        const updatedDocument = await country_master.findByIdAndUpdate(
          id,
          body,
          {
            new: true,
            runValidators: true,
          }
        );
        if (!updatedDocument)
          return res.status(404).json({ msg: "The document doesn't exist" });
        return res.status(200).json(updatedDocument);
      } catch (error) {}
    default:
      return res.status(400).json({msg:"This method is not supported"})
  }
}
