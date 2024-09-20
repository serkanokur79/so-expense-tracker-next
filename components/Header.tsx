import {

    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

import { NotebookPen } from "lucide-react";
import { checkUser } from '@/app/lib/checkUser';
import Image from 'next/image';

const Header = () => {
    const user = checkUser();
    return (
        <header className="text-gray-600 body-font">
            <nav className="container px-5 py-5 ">
                <div className="flex justify-between p-2 xl:mx-10">
                    <Image
                        src="/images/Expanse_Logo.png"
                        alt="Expanse"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                    <h2 className="text-2xl flex flex-row gap-2 justify-center items-center"> SO Expanse Tracker</h2>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                </div>
            </nav></header>
    );
}

export default Header;