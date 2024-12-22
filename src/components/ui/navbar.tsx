import { MdLogout } from "react-icons/md";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
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
          <p
            onClick={() => navigate("/profile")}
            className="cursor-pointer items-center text-center text-xl font-bold"
          >
            bahrul
          </p>
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
