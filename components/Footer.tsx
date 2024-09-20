import Image from 'next/image';
import React from 'react';

const FacebookIcon: React.FC = () => {
    return (
        <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
        >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
    );
};

const TwitterIcon: React.FC = () => {
    return (
        <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
        >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
    );
};

const InstagramIcon: React.FC = () => {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
    );
};

const LinkedInIcon: React.FC = () => {
    return (
        <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0"
            className="w-5 h-5"
            viewBox="0 0 24 24"
        >
            <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            ></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
    );
};

const GithubIcon: React.FC = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github w-5 h-5"

        >
            <path d="M15 22v-4a4.8 4.8 0 00-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 004 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2" />
        </svg>
    );
};


const Footer: React.FC = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image
                        src="/images/Expanse_Logo.png"
                        alt="Expanse"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                    <span className="ml-3 text-xl">SO Expanse Tracker</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    ©2024 Serkan Okur —
                    <a
                        href="https://twitter.com/serkanokur"
                        className="text-gray-600 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @JsSerkan
                    </a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a
                        href="https://www.facebook.com/okurserkan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500"
                    >
                        <FacebookIcon />
                    </a>
                    <a
                        href="https://twitter.com/JSserkan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3 text-gray-500"
                    >
                        <TwitterIcon />
                    </a>
                    <a
                        href="https://www.instagram.com/serkan_okur/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3 text-gray-500"
                    >
                        <InstagramIcon />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/serkanokur79/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3 text-gray-500"
                    >
                        <LinkedInIcon />
                    </a>
                    <a
                        href="https://github.com/serkanokur79"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3 text-gray-500"
                    >
                        <GithubIcon />
                    </a>

                </span>
            </div>
        </footer>
    );
};

export default Footer;
