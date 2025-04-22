// app/layout.tsx
import "./css/style.css";
import { ClerkProvider } from "@clerk/nextjs";
import { type Metadata } from "next";
import Spotlight from "@/utils/spotlight";

// Google Fonts
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cursume",
  description: "Turning experiences into stories that open doors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="m-0 p-0">
        <body
          className={`${inter.variable} ${nacelle.variable} ${geistSans.variable} ${geistMono.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased m-0 p-0`}
        >
          <div className="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Spotlight />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
