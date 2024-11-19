import Header from "@/components/Header";
import Jackpots from "@/components/Jackpot";
import { generateFakeLotteries } from "@/services/fakeData";

export default async function Home() {
  return (
    <div>
      <Header />
      <Jackpots jackpots={generateFakeLotteries(10)} />
    </div>
  );
}
// generateFakeLotteries();
