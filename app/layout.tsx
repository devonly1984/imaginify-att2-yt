import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const ibm_plex = IBM_Plex_Sans({ subsets: ["latin"],
weight: ["400","500","600","700"],
variable: "--font-ibm-plex" });

export const metadata: Metadata = {
  title: "Imaginify",
  description: "JSM TUTORIAL TS TYPESCRIPT",
};

const RootLayout=({
  children,
}: Readonly<{
  children: ReactNode;
}>) =>{
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#624cf5" },
      }}
    >
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", ibm_plex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
export default RootLayout;