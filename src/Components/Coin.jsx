import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";

const Coin = (props) => {
  return (
    <div className="py-2 shadow-lg text-center rounded-2xl bg-white text-black hover:scale-105 duration-200">
      <img src={props.coin.image} className="w-[40px] h-[40px] m-auto" alt="" />
      <h1 className="font-semibold">{props.coin.name}</h1>
      <h1 className="text-lg">${props.coin.current_price.toLocaleString()}</h1>
      <p className="mt-2">
        {props.coin.price_change_percentage_24h > 0 ? (
          <span className="flex items-center justify-center gap-1">
            <BsArrowUpRight
              className="text-green-700"
              size={25}
            ></BsArrowUpRight>{" "}
            {props.coin.price_change_percentage_24h.toFixed(2)}%
          </span>
        ) : (
          <span className="flex items-center justify-center gap-1">
            <AiOutlineArrowDown
              className="text-red-700"
              size={25}
            ></AiOutlineArrowDown>{" "}
            {props.coin.price_change_percentage_24h.toFixed(2)}%
          </span>
        )}
      </p>
    </div>
  );
};

export default Coin;
