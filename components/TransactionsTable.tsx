
'use client'
import { addCommas } from "@/app/lib/utils";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ITransactionData } from "@/types/transaction";
import { Button } from "./ui/button";
import { toast } from "react-toastify";
import deleteTransaction from "@/app/actions/deleteTransaction";
import { Card, CardContent, CardHeader } from "./ui/card";
import AddTransactionButton from "./AddTransactionButton";


interface TransactionsTableProps {
    data: ITransactionData[];
    balance: number;

}


export const TransactionsTable: React.FC<TransactionsTableProps> = ({ data, balance }) => {


    const handleDelete = async (id: string) => {
        const confirmed = window.confirm('Are you sure you want to delete this transaction?');
        if (!confirmed) return;
        const { message, error } = await deleteTransaction(id);
        if (error) {
            toast.error(error);
        }
        toast.success('Transaction deleted successfully');
    }

    return (
        <Card className="w-full shadow-md shadow-black/40">
            <CardHeader className="flex flex-row justify-between">
                <h1>Transactions</h1>
                <AddTransactionButton />
            </CardHeader>

            <CardContent className="w-full">
                <Table className="w-full">
                    {/* <TableCaption>A list of your incomes and expenses</TableCaption */}
                    <TableHeader>
                        <TableRow>
                            <TableHead >Id</TableHead>
                            <TableHead>Text</TableHead>
                            <TableHead> Date</TableHead>
                            <TableHead> Time</TableHead>
                            <TableHead >Type</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead className="w-1 p-0"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.map((dat, idx) => (
                            <TableRow key={dat.id} >
                                <TableCell className="font-medium">{idx + 1}</TableCell>
                                <TableCell>{dat.text}</TableCell>
                                <TableCell>{new Intl.DateTimeFormat('en', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                }).format(dat.createdAt)}</TableCell>
                                <TableCell>{new Intl.DateTimeFormat('en', {
                                    timeStyle: 'short',
                                }).format(dat.createdAt)}</TableCell>
                                <TableCell className={`${dat.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>{dat.amount > 0 ? 'Income' : 'Expense'}</TableCell>
                                <TableCell className={`${dat.amount > 0 ? 'text-green-500' : 'text-red-500'} text-right`}>$ {addCommas(Math.abs(dat.amount))}</TableCell>
                                <TableCell className={`w-1 p-0 ${dat.amount > 0 ? 'bg-green-500' : 'bg-red-500'}`}></TableCell>
                                <TableCell ><Button variant="ghost" className="text-red-500"
                                    onClick={() => handleDelete(dat.id)}
                                >X</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={4}></TableCell>
                            <TableCell >Total</TableCell>
                            <TableCell className="text-right">$ {addCommas(balance ?? 0)}</TableCell>
                            <TableCell className="bg-gray-50"></TableCell>
                            <TableCell className="bg-gray-50"></TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </CardContent>
        </Card>
    )
}