'use client'
import { useRef, useState } from "react";
import addTransaction from "@/app/actions/addTransaction";
import { toast } from 'react-toastify'
import { Input } from "@/components/ui/input"
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { isMobile, isTablet } from 'react-device-detect';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const AddTransactionButton = () => {
    const [open, setOpen] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const clientAction = async (formData: FormData) => {

        const { data, error } = await addTransaction(formData);

        if (error) {
            toast.error(error);
        } else {
            console.log(data);
            toast.success('Transaction added successfully');
            formRef.current?.reset();
            setOpen(false);
        }


    }
    return (<>

        <Sheet open={open} onOpenChange={setOpen}>
            <Button onClick={() => setOpen(true)}>Add Transaction</Button>
            <SheetContent side={isMobile || isTablet ? 'bottom' : 'right'}>
                <SheetHeader>
                    <SheetTitle>Add a new transaction</SheetTitle>
                    <SheetDescription>
                        If it is an expanse enter a negative amount, if it is an income enter a positive amount
                    </SheetDescription>
                </SheetHeader>
                <form action={clientAction} ref={formRef} className="flex flex-col gap-4 p-2">
                    <div className="flex flex-col">
                        <Label htmlFor="text">Text</Label>
                        <Input type="text" id="text" name="text" />
                    </div>
                    <div className="flex flex-col">
                        <Label htmlFor="amount">Amount <span className="text-xs"></span></Label>
                        <Input type="number" id="amount" name="amount" step='0.01' />
                    </div>
                    <div className="flex flex-col">
                        <Label htmlFor="submit"></Label>
                        <Button type="submit" id="submit" >Add Transaction</Button>
                    </div>
                </form>
            </SheetContent>
        </Sheet>
    </>
    );
}

export default AddTransactionButton;