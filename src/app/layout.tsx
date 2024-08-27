import type { Metadata } from "next";

import "@/app/styles/globals.css";
import { inter } from "@/app/font";
import { siteConfig } from "@/app/config/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-primaryBg text-primaryText ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
