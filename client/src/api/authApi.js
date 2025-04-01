import { useContext } from "react";
import request from "../utils/request"
import { UserContext } from "../contexts/UserContext";

const baseUrl = "http://localhost:3030/users";

export const useLogin= ()=>{
  const login = async (email, password) => {
    return request.post(`${baseUrl}/login`, { email, password });
    
  };

  return {
    login,
   };
}

export const useRegister= ()=>{
  const register = async (email, password) => {
    return request.post(`${baseUrl}/register`, { email, password });
  };

  return {
    register,
  };
};

export const useLogout= ()=>{
  const {accessToken} = useContext(UserContext);

  const options = {
    headers: {
      'X-Authorization': accessToken,
    }
  }

  const logout = () => {
    return request.get(`${baseUrl}/logout`,null, options);
  };

  return {
    logout,
  };
}