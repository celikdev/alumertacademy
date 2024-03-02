import adminAcc from "../utils/firebase.js";

export const verifyToken = async (req, res, next) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
  if (!accessToken)
    return res.status(400).json({ message: "Access Token Required!" });
  try {
    const user = await adminAcc.auth().verifyIdToken(accessToken);
    if (user) {
      req.user = user;
      next();
    } else {
      return res.status(500).json({ message: "Failed to Verify User!" });
    }
  } catch (error) {
    console.log("Hata Burada Donuyor: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};
