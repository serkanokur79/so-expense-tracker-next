import { SignUpButton } from '@clerk/nextjs'
import { SignInButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'

const Hero = () => {
    const words = [
        {
            text: "Track",
        },
        {
            text: "Your",
        },
        {
            text: "Finances",
        },
        {
            text: "with",
        },
        {
            text: "Expanse Tracker !",
            className: "text-blue-500 dark:text-blue-500",
        },

    ];
    return (
        <section className="text-gray-600 body-font ">
            <div className="container mx-auto flex flex-col px-5 py-12 items-center bg-slate-50">
                <TypewriterEffectSmooth words={words} />
                <div className="flex md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-xl">


                        <p className="mb-1 leading-relaxed">
                            Join thousands of satisfied users and discover the power of our comprehensive finance tracking and management solution.

                        </p>
                        <p className="mb-8 leading-relaxed">
                            Manage your income and expenses, stay on budget, and achieve your financial goals.

                        </p>
                        <div className="flex justify-center w-full">
                            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"><SignInButton /></button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"><SignUpButton /></button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">

                        <Image src="/images/Hero.jpeg" alt="Project in action" width={1792} height={1024} className="object-cover object-center rounded" />   </div>
                </div></div>
        </section>
    )
}

export default Hero