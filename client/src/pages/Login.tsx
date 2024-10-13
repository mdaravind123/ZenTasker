import React, { useState } from "react";
import { signupUser } from "../api/SignupApi";
import User from "../interface/user";

const Login: React.FC = () => {
  const [user, Setuser] = useState<User>({
    userName: "",
    email: "",
    password: "",
  });

  const [message, Setmessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signupUser(user);
      Setmessage("User Account created Successfully");
    } catch (error) {
      Setmessage("signup failed. Please try Again");
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-2 p-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="UserName"
          className="border border-black p-2 w-80 outline-none"
          value={user.userName}
          onChange={(e) => Setuser({ ...user, userName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-black p-2 w-80 outline-none"
          value={user.email}
          onChange={(e) => Setuser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-black p-2 w-80 outline-none"
          value={user.password}
          onChange={(e) => Setuser({ ...user, password: e.target.value })}
        />
        <button
          type="submit"
          className="bg-blue-400 text-white hover:bg-blue-600 w-20 h-9 rounded"
        >
          SignUp
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
