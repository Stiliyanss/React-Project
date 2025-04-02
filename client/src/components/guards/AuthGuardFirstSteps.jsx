import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function AuthGuardFirstSteps({children}) {
  const {isAuthenticated } = useAuth();

  if(!isAuthenticated){
    return <Navigate to="/login"/>
  }

    return(
        <>
        {children}
        </>
    );
}