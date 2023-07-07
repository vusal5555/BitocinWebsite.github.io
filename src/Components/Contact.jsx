import React from "react";

const Contact = () => {
  return (
    <div id="earn">
      <div className="max-w-[1140px] m-auto grid md:grid-cols-2 items-center mt-[10rem] px-4 lg:px-0">
        <div>
          <img
            src="./trade.png"
            className="w-[400px] h-full mb-5 lg:mb-0"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold mb-5">
            Earn passive income with crypto.
          </h1>
          <p className="text-md lg:text-lg mb-3">
            Earn up to 12% annual rewards on 30+ digital assets. Simply hold
            your assets in the app to automatically earn rewards at the end of
            each month with no lockups and no limits.
          </p>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 px-4 py-2 rounded-md mr-2 outline-none mb-3"
            />
            <button className="py-2 px-5 bg-green-600 rounded-md text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
