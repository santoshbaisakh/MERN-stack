import logo from "../assets/logo.png";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">

      <img src={logo} alt="Nike Logo" className="w-20" />

      <ul className="flex gap-10 font-semibold text-sm">
        <li className="cursor-pointer hover:text-red-600">MENU</li>
        <li className="cursor-pointer hover:text-red-600">LOCATION</li>
        <li className="cursor-pointer hover:text-red-600">ABOUT</li>
        <li className="cursor-pointer hover:text-red-600">CONTACT</li>
      </ul>

      <Button
        text="Login"
        bgColor="bg-red-600"
        textColor="text-white"
      />

    </nav>
  );
}

export default Navbar;