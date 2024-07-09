import { SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

type Props = {

}
export const Guest = ({ }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Welcome</h1>
            <p>Please sign in to manage your expenses</p>
            <Button><SignInButton /></Button>
        </div>
    );
}