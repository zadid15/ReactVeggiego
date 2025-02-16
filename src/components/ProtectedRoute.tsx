import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../pages/auth/AuthContext";

const ProtectedRoute = () => {
    const { token } = useAuth();

    return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
