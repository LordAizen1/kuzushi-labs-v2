import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Great_Vibes, Press_Start_2P } from "next/font/google";
import "./globals.css";
import IntroGate from "@/components/layout/IntroGate";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-calligraphy",
  subsets: ["latin"],
  weight: "400",
});

const pressStart2P = Press_Start_2P({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kuzushi Labs",
  description: "",
  icons: {
    icon: "/logo-kuzushi-blackbg-Photoroom.png",
    apple: "/logo-kuzushi-blackbg-Photoroom.png",
  },
};

import { AudioProvider } from "@/components/providers/AudioContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${greatVibes.variable} ${pressStart2P.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <AudioProvider>
          <SmoothScroll />
          <IntroGate>{children}</IntroGate>
          <WhatsAppButton phoneNumber="+918105053983" />
        </AudioProvider>
      </body>
    </html>
  );
}
