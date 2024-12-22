import { useAppSelector } from "../../hooks/use-store";
import Navbar from "../ui/navbar";
import { Outlet, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth.entities);
  const loading = useAppSelector((state) => state.auth.loading);

  if (!auth && loading !== "pending") {
    navigate("/login");
  }

  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
