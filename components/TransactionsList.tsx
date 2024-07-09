import { getTransactions } from "@/app/actions/getTransactions";
import { ITransactionData } from "@/types/transaction";
import { TransactionsTable } from "./TransactionsTable";
import getUserBalance from "@/app/actions/getUserBalance";
import { Button } from "./ui/button";

import AddTransactionButton from "./AddTransactionButton";


const TransactionsList = async () => {
    const transactions: ITransactionData[] = await getTransactions();
    const { balance } = await getUserBalance();
    console.log(transactions);

    return (<div className="flex flex-col w-full p-2">

        {transactions && balance && <TransactionsTable data={transactions ?? []} balance={balance ?? 0} />}
    </div>);
}

export default TransactionsList;