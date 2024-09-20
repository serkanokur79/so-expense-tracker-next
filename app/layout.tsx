import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "So Xpense Trackr",
  description: "An app to track your expenses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>
          <main className="flex flex-col h-[calc(100dvh)] min-h-[calc(100dvh)] w-full">
            <Header />
            {children}
            <Footer />
          </main>
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
