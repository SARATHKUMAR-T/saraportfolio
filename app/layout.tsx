import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarath Portfolio",
  description: "Mern stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
