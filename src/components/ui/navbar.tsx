import { MdLogout } from "react-icons/md";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/use-store";

function Navbar() {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.entities);

  function onLogout() {
    Cookies.remove("token");
    navigate("/login");
  }
  return (
    <div className="border-b-[1px]">
      <div className="m-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <p
          onClick={() => navigate("/")}
          className="cursor-pointer text-2xl font-extrabold text-blueB"
        >
          TechSpace
        </p>
        <div className="hidden gap-4 sm:flex sm:gap-8">
          <p
            onClick={() => navigate("/")}
            className="cursor-pointer hover:font-extrabold hover:text-blueA"
          >
            Product
          </p>
          <p
            onClick={() => navigate("/profile")}
            className="cursor-pointer hover:font-extrabold hover:text-blueA"
          >
            Profile
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={
              user?.profilePhoto ??
              "https://i.pinimg.com/736x/9e/83/75/9e837528f01cf3f42119c5aeeed1b336.jpg"
            }
          />
          <p> | </p>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 rounded-md border-[1px] bg-blackA px-4 py-1 text-white"
          >
            <p>Logout</p>
            <MdLogout />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
