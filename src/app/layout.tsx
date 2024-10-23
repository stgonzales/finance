import type { Metadata } from "next";
import { Public_Sans } from "next/font/google"
import "./globals.css";
import { cn } from "@/utils";

const public_sans = Public_Sans({
  subsets: ['latin'],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Finance App",
  description: "Couples finance control app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(public_sans.className, "text-3 text-grey-900")}>
      <body>
        {children}
      </body>
    </html>
  );
}
