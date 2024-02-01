import { manrope } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul SriRam",
  description: "Personal portfolio of Rahul SriRam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(manrope.className)}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
