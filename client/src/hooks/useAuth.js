import { useContext } from "react";
import { UserContext } from "../providers/AuthProvider";

const useAuth = () => {
  return useContext(UserContext);
};

export default useAuth;
