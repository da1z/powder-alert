import type { FC, PropsWithChildren } from "react";
import TrpcProvider from "../components/trpc-provider";
import Image from "next/image";
import "../styles/globals.css";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-400">
        <nav className="border-b border-slate-50/[0.06] p-4">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
                width={32}
                height={33}
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                Powder <span className="text-purple-300">Alert</span>
              </span>
            </a>
          </div>
        </nav>
        <TrpcProvider>{children}</TrpcProvider>
      </body>
    </html>
  );
};
export default RootLayout;
