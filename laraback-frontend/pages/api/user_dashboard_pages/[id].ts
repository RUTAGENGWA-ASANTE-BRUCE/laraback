import { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../utils/connectMongo";
import user_dashboard_page from "../../../models/user_dashboard_page_model";

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
        const document = await user_dashboard_page.findById(id);
        if (!document)
          return res.status(404).json({ msg: "The document does not exist" });
        return res.status(200).json(document);
      } catch (error) {
        return res.status(400).json({ msg:error });
      }
    case "DELETE":
      try {
        const deleteDocument = await user_dashboard_page.findByIdAndDelete(id);
        if (!deleteDocument)
          return res.status(404).json({ msg: "The document does not exist" });
        return res.status(204).json();
      } catch (error) {
        return res.status(400).json({ msg:error });
      }
    case "PUT":
      try {
        const updatedDocument = await user_dashboard_page.findByIdAndUpdate(
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
