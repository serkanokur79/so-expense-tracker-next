import {

    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

import { NotebookPen } from "lucide-react";
import { checkUser } from '@/app/lib/checkUser';

const Header = () => {
    const user = checkUser();
    return (
        <nav className="bg-gray-800 text-gray-200 h-[3rem]">
            <div className="flex justify-between p-2 xl:mx-10">
                <h2 className="text-2xl flex flex-row gap-2 justify-center items-center"><NotebookPen />Expanse Tracker</h2>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>

            </div>
        </nav>
    );
}

export default Header;