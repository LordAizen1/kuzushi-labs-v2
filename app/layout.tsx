import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Great_Vibes } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Kuzushi Labs",
  description: "",
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
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${greatVibes.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <AudioProvider>
          <SmoothScroll />
          <IntroGate>{children}</IntroGate>
          <WhatsAppButton phoneNumber="1234567890" />
        </AudioProvider>
      </body>
    </html>
  );
}
