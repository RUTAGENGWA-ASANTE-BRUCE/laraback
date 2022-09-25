import cookie from "cookie";
import connectMongo from "../../../utils/connectMongo";
import user from "../../../models/user_model";

export default async (req, res) => {
  const { method, body } = req;

  await connectMongo();
  const document = await user.findOne(body);
  if (!document) {
    return res.status(404).json({ msg: "The document does not exist" });
  } else {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("userData", document, {
        httpOnly: true,
        maxAge: 60 * 60 * 1,
        sameSite: "strict",
        path: "/",
      })
    );
    res.statusCode = 200;
    res.json({ success: true });
  }
};
