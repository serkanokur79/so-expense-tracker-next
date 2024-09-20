import { SignInButton, SignUpButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

interface FeatureContent {
    title: string;
    description: string;
    imageUrl?: string;
}

const FeatureCard: React.FC<FeatureContent> = ({ title, description, imageUrl }) => {
    return (
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-3 border-l-2 border-gray-200 border-opacity-60 flex flex-row xl:flex-col gap-8">
            {imageUrl && <Image src={imageUrl} alt={title} className="mb-4 w-48 md:w-64 xl:w-auto h-auto" width={400} height={400} />}
            <div className='flex flex-col align-middle justify-around'>
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{title}</h2>
                <p className="leading-relaxed text-base mb-4">{description}</p>
            </div>
        </div>
    );
};

const Features: React.FC = () => {
    const featureContents: FeatureContent[] = [
        {
            title: 'Track Income and Expenses',
            description:
                'Easily add and categorize your income and expenses, and see your financial picture at a glance.',
            imageUrl: '/images/Income.jpeg',
        },
        {
            title: 'Set and Track Goals',
            description:
                'Set savings goals and track your progress over time. Stay motivated and on track towards achieving your financial goals.',
            imageUrl: '/images/Goals.jpeg',
        },
        {
            title: 'Secure and Private',
            description:
                'Your data is secure and private. We use industry-standard encryption and security measures to protect your information.',
            imageUrl: '/images/Privacy.jpeg',
        },
        {
            title: 'Stay on Budget with Our Budgeting Tools',
            description:
                'Take control of your finances with our budgeting tools. Set spending limits, track your expenses, and stay on budget with ease.',
            imageUrl: '/images/Budget.jpeg',
        },
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        Empower Your Financial Management with Our Features
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Our project offers a range of features to help you take control of your finances. From tracking income and expenses to setting and tracking savings goals, our project has the tools and features you need to succeed. Discover the benefits of our project and how it can help you achieve your financial goals.
                    </p>
                </div>
                <div className="flex flex-wrap">
                    {featureContents.map((featureContent, index) => (
                        <FeatureCard key={index} {...featureContent} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
