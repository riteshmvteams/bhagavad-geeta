import type { Metadata } from "next";

import "@/app/styles/globals.css";
import { inter, lexend } from "@/app/font";
import { siteConfig } from "@/app/config/site";
import { cn } from "@/utils/helpers";

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
      <body
        className={cn(
          "bg-primaryBg text-primaryText font-inter",
          inter.variable,
          lexend.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
