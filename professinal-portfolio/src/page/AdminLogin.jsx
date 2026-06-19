import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
  try {

    const res = await axios.post(
      "https://poojan-portfolio-rzpk.onrender.com/api/admin-login",
      {
        username,
        password,
      }
    );
    localStorage.setItem(
      "adminToken",
      res.data.token
    );

    navigate("/admin");

  } catch (error) {
  console.log(error);
  console.log(error.response);
  console.log(error.response?.data);

  setError(
    "Unauthorized Access! Invalid username or password."
  );
}
};

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0d1117]">
      <div className="bg-[#161b22] p-8 rounded-xl w-[400px]">

        <h2 className="text-white text-3xl font-bold mb-5 text-center">
          Admin Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-black text-white"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-black text-white"
        />

        {error && (
          <p className="text-red-500 mb-3">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 py-3 rounded text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;