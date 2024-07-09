
import Balance from "@/components/Balance";
import { Guest } from "@/components/Guest";
import SummaryBoxes from "@/components/SummaryBoxes";

import TransactionsList from "@/components/TransactionsList";
import { currentUser } from "@clerk/nextjs/server";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />
  }

  return (<section className="flex flex-col items-start justify-start w-full max-w-2xl 2xl:max-w-7xl mx-auto p-4">
    <h2 className="text-2xl">Welcome {user.firstName}</h2>
    <div className="flex flex-row gap-4 w-full p-4">
      <SummaryBoxes />
    </div>
    <TransactionsList />

  </section>);
}

export default HomePage;