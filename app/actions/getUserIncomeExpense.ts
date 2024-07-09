'use server'

import { db } from '../lib/db';
import { auth } from '@clerk/nextjs/server';

async function getUserIncomeExpense(): Promise<{
    income?: number;
    noOfIncome?: number;
    expense?: number;
    noOfExpense?: number;
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
    const income = transactions.reduce((sum, transaction) => {
        if (transaction.amount > 0) {
            return sum + transaction.amount
        } else {
            return sum
        }
    }, 0)

    const noOfIncome = transactions.filter(transaction => transaction.amount > 0).length
  
    const expense = transactions.reduce((sum, transaction) => {
        if (transaction.amount < 0) {
            return sum + transaction.amount
        } else {
            return sum
        }
    }, 0)

    const noOfExpense = transactions.filter(transaction => transaction.amount < 0).length

    return { income, expense, noOfIncome, noOfExpense };
  } catch (error) {
    return { error: "Database error" };
  }
    
}

export default getUserIncomeExpense;