import { Link, Router } from "react-router-dom";
import { BUTTON_DATA } from "./constants/ButtonData";

import app from "./service/firebase";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";

function App() {
  const auth = getAuth(app);

  console.log(auth.currentUser);

  return (
    <div className="grid grid-cols-3 p-4 gap-10">
      {BUTTON_DATA.map((button, index) => (
        <Link
          to={`/dashboard${button.path}`}
          key={index}
          className="bg-blue-400 flex items-center justify-center p-4 rounded-lg text-white font-semibold hover:bg-blue-500 transition-colors duration-300 h-64 hover:shadow-inner "
        >
          {button.text}
        </Link>
      ))}
    </div>
  );
}

export default App;
