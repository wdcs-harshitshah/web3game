import Link from "next/link";
import React from "react";

const SubHeader = () => {
  return (
    <div
      className="flex items-center justify-between text-black px-10 py-5"
      style={{ height: "100px", background: "#f5f5f5" }}
    >
      <div>
        <Link href="/">Dapp Lottery</Link>
      </div>
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
  );
};

export default SubHeader;
