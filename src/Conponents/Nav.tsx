import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 py-3">
      <div className="container mx-auto px-4">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-between items-center">
          <img src={Logo} alt="Logo" />

          <ul className="flex gap-4 items-center text-[#475569]">
            <li className="text-[#D91B7E]">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className="flex gap-4 items-center">
            <button className="text-[#475569]">Sign In</button>

            <button className="bg-[#D91B7E] text-white py-1 px-4 rounded-full">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between relative">
          <button className="flex flex-col gap-1.5">
            <span className="w-6 h-0.5 bg-[#475569]"></span>
            <span className="w-6 h-0.5 bg-[#475569]"></span>
            <span className="w-6 h-0.5 bg-[#475569]"></span>
          </button>

          <img
            src={Logo}
            alt="Logo"
            className="absolute left-1/2 -translate-x-1/2 w-[90px]"
          />

          <div className="flex gap-3 items-center ml-auto">
            <button className="text-[#475569] text-sm">Sign In</button>

            <button className="bg-[#D91B7E] text-white py-1.5 px-4 rounded-full text-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
