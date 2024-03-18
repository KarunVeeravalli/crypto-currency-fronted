import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";


export default function PrivateRoute({ children }) {
    const { auth } = useSelector((state) => state.authreducer)
    const navigate = useNavigate();

    if (!auth) {
        navigate("/login")
        return <Navigate to="/login" />      
    }
    return children
}




        