import getUserBalance from "@/app/actions/getUserBalance";
import getUserIncomeExpense from "@/app/actions/getUserIncomeExpense";
import { addCommas } from "@/app/lib/utils";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { title } from "process";


const SummaryBoxes = async () => {
    const { income, expense, noOfIncome, noOfExpense } = await getUserIncomeExpense();
    const { balance, numberOfTransactions } = await getUserBalance();

    const info = [
        {
            title: 'Income',
            value: income,
            number: noOfIncome,
            numberText: (noOfIncome && noOfIncome > 1) ? 'incomes' : 'income'
        },
        {
            title: 'Expense',
            value: expense,
            number: noOfExpense,
            numberText: (noOfExpense && noOfExpense > 1) ? 'expenses' : 'expense'
        },
        {
            title: 'Balance',
            value: balance,
            number: numberOfTransactions,
            numberText: (numberOfTransactions && numberOfTransactions > 1) ? 'transactions' : 'transaction'
        },
    ]

    return (<div className="flex flex-row w-full  gap-2 justify-between ">
        {info.map((info, index) => (
            <Card key={index} x-chunk={info.title} className="w-1/3 shadow-black/45">
                <CardHeader className="pb-2">
                    {/* <CardDescription>{info.title}</CardDescription> */}
                    <CardTitle >
                        {info.title}</CardTitle>
                </CardHeader>
                <CardContent className={`text-md 2xl:text-3xl font-bold ${info.value ? info.value > 0 ? 'text-green-700' : 'text-red-600' : ''}`}>
                    {info.value ? `${info.value > 0 ? '' : '-'}` : ''}${addCommas(Math.abs(info.value ?? 0))}
                    <span className="hidden xl:flex text-sm align-top"> *</span>
                </CardContent>
                <CardFooter>
                    <div className="hidden xl:flex text-xs text-gray-500 -mx-2 xl:mx-1">
                        *{info.number} {info.numberText.toLowerCase()}
                    </div>
                </CardFooter>
            </Card>
        ))}

    </div>
    );
}

export default SummaryBoxes;