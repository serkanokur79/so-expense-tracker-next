'use server'
import { auth } from "@clerk/nextjs/server";
import { db } from "../lib/db";

import { ITransactionData } from "@/types/transaction";

export const getTransactions: () => Promise<ITransactionData[]> = async () => {
    const { userId } = auth();
    if (!userId) {
        return [];
    }
    const transactions = await db.transaction.findMany({
        where: {
            userId,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
    return transactions;
}