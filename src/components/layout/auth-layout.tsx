import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function AuthLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Menentukan teks dan route berdasarkan route aktif
  const isRegisterRoute = location.pathname === "/register";
  const authAction = isRegisterRoute ? "Sign up" : "Sign in";
  const redirectRoute = isRegisterRoute ? "/login" : "/register";
  const redirectText = isRegisterRoute ? "Sign in" : "Register Here";
  const authText = isRegisterRoute
    ? "Have an account?"
    : " Don't have an account?";

  return (
    <div className="flex h-[100vh] w-full justify-between">
      <div className="m-auto flex w-full max-w-[500px] flex-col gap-8 p-8 lg:w-[30%]">
        <p className="text-center text-3xl font-extrabold text-blueB">
          TechSpace
        </p>
        <div>
          <p className="text-2xl font-extrabold">{authAction}</p>
          <p>
            {authText}{" "}
            <a
              onClick={() => navigate(redirectRoute)}
              className="cursor-pointer font-semibold text-blueB"
            >
              {redirectText}
            </a>
          </p>
        </div>
        <Outlet />
        <div>
          <p className="mt-2 text-center text-sm text-slate-500">
            Developed by{" "}
            <span className="text-blackA">Muhammad Bahrul 'ulum</span>
          </p>
          <p className="mt-2 text-center text-xs text-slate-500">
            as a knowledge test for PT. Widya Informasi Nusantara (Widya Wicara)
          </p>
        </div>
      </div>
      <div className="hidden h-[100vh] w-[70%] p-4 lg:block">
        <img
          className="h-full w-full rounded-xl object-cover"
          src="https://cdn.dribbble.com/userupload/13549563/file/original-6ae54ebaabdcdf37e039a332113c4295.png?resize=1024x768&vertical=center"
        />
      </div>
    </div>
  );
}
