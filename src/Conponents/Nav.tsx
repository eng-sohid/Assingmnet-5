import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className=" py-4">
      <div className="flex justify-between container mx-auto">
        <img src={Logo} alt="Logo" />
        <ul className="flex gap-4 items-center text-[#475569] ">
          <li className="text-[#D91B7E]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-4 items-center">
          <button className="text-[#475569]">Sign In</button>
          <button className="bg-[#D91B7E] text-white  py-1 px-4 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
