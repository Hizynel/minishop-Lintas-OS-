import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email.includes("@")) {
      setError("Email tidak valid");
      return;
    }
    if (form.password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }
    setError("");

    login({ email:form.email });
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 px-4">
      <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-8 w-full max-w-sm flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-indigo-400 text-center mb-2">
          Login
        </h2>

        <input type="email" placeholder="Email" className="bg-gray-800 text-gray-100 placeholder-gray-500 rounded-md p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input type="password" placeholder="Password" className="bg-gray-800 text-gray-100 placeholder-gray-500 rounded-md p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-md p-3 transition-colors">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;