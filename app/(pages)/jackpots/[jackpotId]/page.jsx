import React from "react";
import SubHeader from "@/components/SubHeader";
import JackpotTable from "@/components/JackpotTable";
import { generateLottery, getPurchasedNumbers } from "@/services/fakeData";
import Head from "next/head";
import Generator from "@/components/Generator";

async function getData(jackpotId) {
  const lottery = generateLottery(jackpotId);
  const purchasedNumbers = getPurchasedNumbers(5);
  const lotteryNumbers = getPurchasedNumbers(5);

  return {
    lottery: JSON.parse(JSON.stringify(lottery)),
    lotteryNumbers: JSON.parse(JSON.stringify(lotteryNumbers)),
    numbersPurchased: JSON.parse(JSON.stringify(purchasedNumbers)),
  };
}

const Jackpots = async ({ params }) => {
  const { jackpotId } = params;
  const data = await getData(jackpotId);

  return (
    <div>
      <Head>
        <title>Dapp Lottery - Create New Jackpot</title>
      </Head>
      <div className="min-h-screen bg-slate-200">
        <SubHeader />
        <JackpotTable
          jackpot={data.lottery}
          luckyNumbers={data.lotteryNumbers}
          participants={data.numbersPurchased}
        />
        <Generator />
      </div>
    </div>
  );
};

export default Jackpots;
