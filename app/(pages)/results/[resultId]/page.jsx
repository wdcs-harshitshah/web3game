import React from "react";
import SubHeader from "@/components/SubHeader";
import JackpotTable from "@/components/JackpotTable";
import { generateLottery, getPurchasedNumbers } from "@/services/fakeData";
import Head from "next/head";
import Generator from "@/components/Generator";
import ResultTable from "@/components/ResultTable";

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

const Result = async ({ params }) => {
  const { jackpotId } = params;
  const data = await getData(jackpotId);

  return (
    <div>
      <Head>
        <title>Dapp Lottery - Result</title>
      </Head>
      <div className="min-h-screen bg-slate-200">
        <SubHeader />
        <ResultTable />
      </div>
    </div>
  );
};

export default Result;
