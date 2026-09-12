import Image from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-12 md:py-16 px-4">
      {/* Left Side */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-orange-500 to-[#be1b6c] text-transparent bg-clip-text">
            Development Stack
          </span>
        </h1>

        <p className="text-[#64748B] text-lg leading-7 max-w-[550px] mt-6 mx-auto md:mx-0">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex gap-3 mt-8 justify-center md:justify-start">
          <button className="bg-gradient-to-r from-orange-500 to-[#D91B7E] text-white px-4 py-3 rounded-md cursor-pointer">
            Explore Technologies
          </button>

          <button className="border border-gray-300 text-[#475569] px-8 py-3 rounded-md cursor-pointer">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img src={Image} alt="Banner" className="w-[280px] md:w-[400px]" />
      </div>
    </div>
  );
};

export default Banner;
