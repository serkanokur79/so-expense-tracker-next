'use client';
import { SignInButton } from '@clerk/nextjs';
import React, { useState } from 'react';

interface Feature {
    text: string;
    included: boolean;
}

interface Package {
    title: string;
    monthlyPrice: number | 'Free';
    features: Feature[];
    isPopular?: boolean;
    buttonText: string;
}

interface PricingCardProps extends Package {
    isAnnual: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, monthlyPrice, features, isPopular, buttonText, isAnnual }) => {
    const price = monthlyPrice === 'Free' ? 'Free' : isAnnual ? monthlyPrice * 12 : monthlyPrice;

    return (
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full ">
            <div className={`h-full p-6 rounded-lg border-2 ${isPopular ? 'border-blue-500' : 'border-gray-300'} flex flex-col relative overflow-hidden hover:shadow-xl`}>
                {isPopular && (
                    <span className="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                )}
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{title}</h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>{price === 'Free' ? price : `$${price}`}</span>
                    {price !== 'Free' && <span className="text-lg ml-1 font-normal text-gray-500">{isAnnual ? '/year' : '/mo'}</span>}
                </h1>
                {features.map((feature, index) => (
                    <p key={index} className={`flex items-center text-gray-600 mb-2 ${feature.included ? '' : 'opacity-50'}`}>
                        <span className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${feature.included ? 'bg-gray-400' : 'bg-gray-200'} text-white rounded-full flex-shrink-0`}>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        {feature.text}
                    </p>
                ))}
                {/* <button className={`flex items-center mt-auto text-white ${isPopular ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 hover:bg-gray-500'} border-0 py-2 px-4 w-full focus:outline-none rounded`}>
                    {buttonText}
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
                <SignInButton /> */}
            </div>
        </div>
    );
};

const PricingSection: React.FC = () => {
    const [isAnnual, setIsAnnual] = useState<boolean>(false);

    const packages: Package[] = [
        {
            title: 'START',
            monthlyPrice: 'Free',
            features: [
                { text: 'Basic income and expense tracking', included: true },
                { text: 'Secure data storage', included: true },
                { text: 'Budgeting tools', included: true },
                { text: 'Easy-to-use interface', included: true },
                { text: 'Ideal for beginners and casual users', included: true }
            ],
            buttonText: 'Start for Free'
        },
        {
            title: 'PRO',
            monthlyPrice: 38,
            features: [
                { text: 'All features of the Start package', included: true },
                { text: 'Customizable categories', included: true },
                { text: 'Advanced reporting and analysis', included: true },
                { text: 'Ability to track multiple accounts', included: true },
                { text: 'Priority support and customer service', included: true },
                { text: 'Ideal for individuals and small businesses', included: true }
            ],
            isPopular: true,
            buttonText: 'Upgrade to Pro'
        },
        {
            title: 'BUSINESS',
            monthlyPrice: 56,
            features: [
                { text: 'All features of the Pro package', included: true },
                { text: 'Team management and collaboration', included: true },
                { text: 'Integration with popular accounting software', included: true },
                { text: 'Advanced reporting and analytics', included: true },
                { text: 'Customizable permissions and access levels', included: true },
                { text: 'Dedicated account manager and priority support', included: true }
            ],
            buttonText: 'Get Business'
        },
        {
            title: 'SPECIAL',
            monthlyPrice: 72,
            features: [
                { text: 'All features of the Business package', included: true },
                { text: 'Priority support and access to exclusive resources', included: true },
                { text: 'Customized onboarding and training', included: true },
                { text: 'Dedicated account manager and concierge service', included: true },
                { text: 'Custom reporting and analytics', included: true },
                { text: 'Ideal for high-growth businesses', included: true }
            ],
            buttonText: 'Contact Sales'
        }
    ];

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-8 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Choose the perfect plan for your financial management needs.</p>
                    <div className="flex mx-auto border-2 border-blue-500 rounded overflow-hidden mt-6">
                        <button
                            className={`py-1 px-4 focus:outline-none ${!isAnnual ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => setIsAnnual(false)}
                        >
                            Monthly
                        </button>
                        <button
                            className={`py-1 px-4 focus:outline-none ${isAnnual ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => setIsAnnual(true)}
                        >
                            Annually
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    {packages.map((pkg, index) => (
                        <PricingCard key={index} {...pkg} isAnnual={isAnnual} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;