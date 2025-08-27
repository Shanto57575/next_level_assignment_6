import LoginForm from "@/modules/Auth/LoginForm";
import logo from "../assets/icons/swiftDrops.png";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <img className="w-28 h-28" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="https://t4.ftcdn.net/jpg/03/13/86/45/240_F_313864527_H5G41GU1oUoceZOh17eqfrwgDs5U5TNC.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-fill brightness-[0.5]"
        />
      </div>
    </div>
  );
}
