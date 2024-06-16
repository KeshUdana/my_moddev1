import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {  
  title: "Moddev1",
  description: "Keshawas Modde homepage v1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={inter.className}>
      <main>
      <nav className="fixed w-screen left-0 px-4 py-4 flex justify-between items-end bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] shadow-md  z-40">
        <Image className="fixed top-0 left-0 w-40 h-18 rounded-2xl custom-transform border-9 drop-shadow-xl z-20"src="/ModdeLogo.svg" alt="logo"width={100} height={500}></Image>
        <ul className="font-serif font-light flex ml-auto px-2 text-xl text-violet-500 space-x-6">
          <li className="hover:text-violet-950 active:text-violet-700">Men</li>
          <li className="hover:text-violet-950 active:text-violet-700">Women</li>
          <li className="hover:text-violet-950 active:text-violet-700">Trends</li>
        </ul>

      </nav>
      {children}</main></body>
    </html>
  );
}
