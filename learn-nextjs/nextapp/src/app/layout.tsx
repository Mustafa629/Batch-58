import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          
      < body className={inter.className}>
      <header className="bg-blue-400 p-5 flex gap-5">
        <Link href="/Dashboard">Dashboard</Link>
        <Link href="/blog">blog</Link>
        <Link href="/Marketing">Marketing</Link>
        <Link href="/Team">Team</Link>
        <Link href="/TeamDetail">TeamDetail</Link>
        <Link href="/css-styles">css-styles</Link>
      </header>
      
 
      {children}
      <footer className="bg-red-400 p-5">This is footer</footer>
    

      </body>
    </html>
  );
}
