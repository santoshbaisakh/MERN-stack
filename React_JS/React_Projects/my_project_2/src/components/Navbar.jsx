import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4">

      <div>
        <img
          src={logo}
          alt="Logo"
          className="w-20"
        />
      </div>

      <nav>
        <a
          href="#"
          className="font-bold text-black hover:text-red-500 duration-300"
        >
          Home
        </a>
      </nav>

    </header>
  );
}

export default Navbar;