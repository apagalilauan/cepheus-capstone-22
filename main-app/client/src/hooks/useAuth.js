import { useContext } from "react";
import AuthContext from "../util/AuthProvider";

const useAuth = () =>{
    return useContext(AuthContext)
}

export default useAuth;