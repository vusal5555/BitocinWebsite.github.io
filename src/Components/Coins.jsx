import axios from "axios";
import React, { useEffect, useState } from "react";
import Coin from "./Coin";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    });
  }, []);

  return (
    <div className="bg-gray-200" id="coin">
      <div className="max-w-[1140px] m-auto grid md:grid-cols-2 mt-[10rem] py-[5rem] items-center gap-[2rem] px-4 lg:px-0">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin
          </h2>
          <p className="text-md lg:text-lg mb-4">
            See all available assets: Cryptocurrencies and NFT's
          </p>
          <button className="py-2 px-5 bg-green-600 rounded-md text-white">
            See More Coins
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-7 ">
          {coins.map((coin) => {
            return <Coin coin={coin} key={coin.id}></Coin>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Coins;
