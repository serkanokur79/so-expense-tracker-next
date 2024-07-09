import { currentUser } from "@clerk/nextjs/server";

import {db} from "./db";

export const checkUser = async () => {
    const user = await currentUser();
    // if no user return null
    if (!user) {
        return null;
    }

    // check if user exists
    const existingUser = await db.user.findUnique({
        where: {
            clerkUserId: user.id
        }
    })
    // if existing user return existing user
    if (existingUser) {
        return existingUser
    }
   // if not existing user , add to db
    const newUser = await db.user.create({
        data: {
            clerkUserId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,
        }
    })
    return newUser
  
}

