import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div
      className="px-5 md:px-40"
      style={{ height: "100px", background: "#f5f5f5" }}
    >
      <div className="flex justify-between items-center text-black py-5">
        <h1 className="text-3xl font-bold">Dapp Lottery</h1>
        <div className="flex items-center gap-5 font-semibold">
          <p>Home</p>
          <p>How to Play </p>
          <p>All Lottery</p>
          <p>Connect</p>
        </div>
        <button className="flex flex-nowrap border py-2 px-4 rounded-full bg-amber-500 hover:bg-amber-600 cursor-pointer font-semibold text-sm">
          Connect Wallet
        </button>
      </div>
      <div className="flex justify-between items-center text-black pb-5">
        <div className="text-black flex flex-col">
          <h2 className="text-3xl font-bold py-4">
            {" "}
            Take the chance to win the lottery
          </h2>
        </div>
      </div>
      <div>
        <Link
          href={"/create"}
          className=" border py-4 px-4 rounded-full bg-amber-500 hover:bg-amber-600 cursor-pointer font-semibold text-sm"
        >
          Create Jackpot
        </Link>
      </div>
    </div>
  );
};

export default Header;
