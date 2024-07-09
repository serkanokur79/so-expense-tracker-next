import getUserBalance from "@/app/actions/getUserBalance";
import { addCommas } from "@/app/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Balance = async () => {
    const { balance, numberOfTransactions } = await getUserBalance();
    return (
        <div className="flex flex-row w-1/3 gap-4 justify-between">
            <Card x-chunk="balance" className="w-full">
                <CardHeader className="pb-2">
                    <CardDescription>Balance</CardDescription>
                    <CardTitle className={`text-4xl ${balance ? balance > 0 ? 'text-green-700' : 'text-red-600' : ''}`}>
                        {balance ? `${balance > 0 ? '+' : '-'}` : ''}${addCommas(Math.abs(balance ?? 0))}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">
                        over {numberOfTransactions} transactions
                    </div>
                </CardContent>

            </Card></div >);
}

export default Balance;