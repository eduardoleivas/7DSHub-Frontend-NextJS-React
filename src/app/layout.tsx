import type { Metadata } from "next";

import { Topbar } from "@/components/Topbar";
import "./globals.css";
import { Bottombar } from "@/components/Bottombar";

export const metadata: Metadata = {
  title: "7DSHub",
  description: "The Ultimate 7DS Grand Cross Composition Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Topbar />
        </header>
        {children}
        <footer className="py-4 m-0">
          <Bottombar />
        </footer>
      </body>
    </html>
  );
}
