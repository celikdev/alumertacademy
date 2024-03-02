import adminAcc from "../utils/firebase.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "All fields are required!" });
  try {
    const user = await adminAcc.auth().generateSignInWithEmailLink(email);
    if (user) {
      console.log(user);
      return res.status(200).json({ message: "Login Successful!", data: user });
    } else {
      return res.status(500).json({ message: "Failed to Login!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "All fields are required!" });
  try {
    const user = await adminAcc.auth().createUser({
      email,
      password,
    });
    if (user) {
      return res.status(200).json({ message: "Login Successful!", data: user });
    } else {
      return res.status(500).json({ message: "Failed to Login!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verify = async (req, res) => {
  const accessToken = req.headers.authorization.split(" ")[1];
  if (!accessToken)
    return res.status(400).json({ message: "Access Token Required!" });
  try {
    const user = await adminAcc.auth().verifyIdToken(accessToken);
    if (user) {
      return res.status(200).json({ message: "User Verified!", data: user });
    } else {
      return res.status(500).json({ message: "Failed to Verify User!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
