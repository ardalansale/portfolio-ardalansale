import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/MainNavbar";
import LayoutContainer from "@/components/LayoutContainer"

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ardalan Sale Portfolio",
  description: "Ardalan Sale's portfolio and showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} antialiased`}>
        <LayoutContainer>
          <MainNavbar/>
          <main>
          {children}  
          </main>
        </LayoutContainer>
      </body>
    </html>
  );
}
