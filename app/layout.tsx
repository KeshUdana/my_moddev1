import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Icon  from "./pages/Icon";
import "./globals.css";
import Image from "next/image"
import Head from "next/head"

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
      <Head><link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link></Head>
     <body className={inter.className}>
      <main>
      <header>
      <nav className="fixed w-screen left-0 px-4 py-4 flex justify-between items-end bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0) shadow-md  z-40">
        <Image className="fixed top-0 left-0 w-40 h-18 rounded-2xl custom-transform border-9 drop-shadow-xl z-20"src="/ModdeLogo.svg" alt="logo"width={100} height={500}></Image>
        <ul className="font-serif font-light flex ml-auto px-2 text-xl text-violet-500 space-x-6">
          <li className="hover:text-violet-950 active:text-violet-700">Men</li>
          <li className="hover:text-violet-950 active:text-violet-700">Women</li>
          <li className="hover:text-violet-950 active:text-violet-700">Docs & Usage </li>
        </ul>
      </nav>
      </header>

      <footer className="fixed bottom-0 w-screen left-0 px-4 py-4 flex justify-center bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] shadow-md z-40">
        <div className="flex flex-col items-center">
          <ul className="font-serif font-semibold  flex justify-space between  ml-auto px-2 text-sm font-sans text-violet-500 space-x-6">
            <li className="hover:text-violet-950 active:text-violet-700">Forge Lab</li>
            <li className="hover:text-violet-950 active:text-violet-700">Size Guide</li>
            <li className="hover:text-violet-950 active:text-violet-700">Contact</li>
            <li className="hover:text-violet-950 active:text-violet-700">Privacy policy</li>
            <li className="hover:text-violet-950 active:text-violet-700">Terms and Conditions</li>
          </ul>
          </div>
          <br/>
          <div className="flex flex-col items-center">
          <ul className="font-serif font-semibold  flex justify-space between  ml-auto px-2 text-sm font-sans text-violet-500 space-x-6 ">
            <li><Icon name='bx bxl-facebook-circle hover:text-purple-900'></Icon></li>
            <li><Icon name='bx bxl-linkedin-square hover:text-purple-900'></Icon></li>
            <li><Icon name='bx bxl-youtube hover:text-purple-900'></Icon></li>
            <li><Icon name='bx bxl-instagram hover:text-purple-900'></Icon></li>

          </ul>
        </div>
      </footer>

      {children}</main></body>
    </html>
  );
}
