'use server'

import { db } from '../lib/db';
import { auth } from '@clerk/nextjs/server';

async function getUserBalance(): Promise<{
    balance?: number;
    numberOfTransactions?: number;
    error?: string;
}> {
    const { userId } = auth();
    if (!userId) {
        return {error: 'user not found'}
    }

  try {
    const transactions = await db.transaction.findMany({
        where: {
            userId
        }
    })
    const balance = transactions.reduce((sum, transaction) => {
        return sum + transaction.amount
    }, 0) 

    const numberOfTransactions = transactions.length

    return { balance, numberOfTransactions };
  } catch (error) {
    return { error: "Database error" };
  }
    
}

export default getUserBalance;