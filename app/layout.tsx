import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Mina componenter
import MainNavbar from "@/components/MainNavbar";
import Footer from "@/components/Footer";
import LayoutContainer from "@/components/LayoutContainer"
import FadeWrapper from "@/components/FadeWrapper"

// Font
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  style: ["normal", "italic"],
});

// Metadata
export const metadata: Metadata = {
  title: "Ardalan Sale Portfolio",
  description: "Ardalan Sale's portfolio and showcase",
  keywords: ['Ardalan Sale', ' ux designer', 'ui designer', 'portfolio', 'sweden', 'stockholm', 'sverige', 'frilans', 'freelance', 'ux/ui', 'frontend', 'developer', 'utvecklare'],
};

// Sidstruktur för alla sidor
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode;}>) {

  return (
    <html lang="en">
  <body className={`${ibmPlexMono.variable} antialiased`}>
        <LayoutContainer>
          <MainNavbar/>

          <FadeWrapper>
            <main>
            {children}  
            </main>
          </FadeWrapper>

          <Footer/>
        </LayoutContainer>
      </body>
    </html>
  );
}
