const Hero = () => {
  return (
    <div id="hero">
      <div className="max-w-[1140px] m-auto grid  md:grid-cols-2 items-center mt-[7rem] px-4 lg:px-0 gap-y-10">
        <div>
          <p className="text-md lg:text-lg mb-5">
            Buy & Sell Crypto 24/7 using your retirement account
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-5">
            Invest in Cryptocurreny with Your IRA
          </h1>
          <p className="text-md lg:text-lg mb-5">
            Buy, Sell, and store hundreds of cryptocurrencies
          </p>
          <div>
            <input
              type="text"
              className="border border-gray-300 px-4 py-2 mb-2 rounded-md mr-2 outline-none"
            />
            <button className="py-2 px-5 bg-green-600 rounded-md text-white">
              Learn More
            </button>
          </div>
        </div>

        <div>
          <img className="w-full h-full" src="./hero-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
