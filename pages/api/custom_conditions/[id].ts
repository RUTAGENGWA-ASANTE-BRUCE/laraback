import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../utils/connectMongo";
import custom_condition from "../../../models/custom_condition_model";

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
        const document = await custom_condition.findById(id);
        if (!document)
          return res.status(404).json({ msg: "The document does not exist" });
        return res.status(200).json(document);
      } catch (error) {
        return res.status(400).json({ msg:error });
      }
    case "DELETE":
      try {
        const deleteDocument = await custom_condition.findByIdAndDelete(id);
        if (!deleteDocument)
          return res.status(404).json({ msg: "The document does not exist" });
        return res.status(204).json({msg:"Document deleted successfully"});
      } catch (error) {
        return res.status(400).json({ msg:error });
      }
    case "PUT":
      try {
        const updatedDocument = await custom_condition.findByIdAndUpdate(
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
