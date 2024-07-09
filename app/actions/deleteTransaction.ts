'use server'

import { revalidatePath } from 'next/cache';
import { db } from '../lib/db';
import { auth } from '@clerk/nextjs/server';

async function deleteTransaction(id: string): Promise<{
    message?: string;
    error?: string;
}> {
    const { userId } = auth();
    if (!userId) {
        return {message: 'user not found'}
    }

  try {
    const transactions = await db.transaction.delete({
        where: {
            id,
            userId
        }
    })
  revalidatePath('/');
    return { message: "Transaction deleted successfully" };
  } catch (error) {
    console.log("Database error:", error);
    return { message: "Database error" };
  }
    
}

export default deleteTransaction;