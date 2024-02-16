import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

export default function PrivateRoutes() {
  const { user } = useAppSelector((state) => state.user);
  const isAuthenticated = user.email != undefined;
  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
}
