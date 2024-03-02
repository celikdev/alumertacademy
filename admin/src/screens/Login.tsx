import { useState } from "react";
import app from "../service/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  updateCurrentUser,
  UserInfo,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("celikhakan5255@gmail.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sessionStorage.setItem("token", user.accessToken);
        navigation("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-center flex-col gap-4 bg-gray-300 mt-40 w-1/2 mx-auto p-4 rounded-lg shadow-lg">
      <h1 className="text-lg font-bold">Giriş Yap</h1>
      <div className="flex flex-col items-center w-1/2 gap-2">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Kullanıcı Adı"
          className="border-2 border-transparent p-2 rounded-lg text-sm font-semibold w-2/3 outline-none transition-colors duration-300 hover:border-blue-400 focus:border-blue-400"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Şifre"
          className="border-2 border-transparent p-2 rounded-lg text-sm font-semibold w-2/3 outline-none transition-colors duration-300 hover:border-blue-400 focus:border-blue-400 "
        />
        <button
          disabled={!email || !password}
          onClick={() => handleLogin()}
          className="mt-4 border-2 border-blue-400 text-sm font-semibold hover:text-white px-10 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-400 disabled:border-gray-400 disabled:bg-gray-400 disabled:text-white disabled:cursor-not-allowed"
        >
          Giriş Yap
        </button>
      </div>
    </div>
  );
};

export default Login;
