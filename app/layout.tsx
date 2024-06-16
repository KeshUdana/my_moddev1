import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"></meta>
      </Head>
      <body className={inter.className}>{children}


      </body>
    </html>
  );
}
