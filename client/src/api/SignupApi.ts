import axios from "axios";
import User from "../interface/user";

export const signupUser = async (user: User): Promise<User> => {
  try {
    const response = await axios.post<User>(
      "http://localhost:3001/api/signup",
      user
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("Error response:", error.response.data);
      throw new Error(error.response.data.message || "Signup failed.");
    } else {
      console.error("Error during user signup:", error);
      throw new Error("Signup failed.");
    }
  }
};
