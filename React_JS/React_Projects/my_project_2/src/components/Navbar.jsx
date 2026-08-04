import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4">

      <img
        src={logo}
        alt="logo"
        className="w-20"
      />

      <ul className="flex gap-12 font-semibold">
        <li className="cursor-pointer hover:text-red-500">
          Home
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;