import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/src/styles/globals.css";

//lenis scroll & transitions
import SmoothScroll from "../utils/SmoothScroll";
import { ViewTransition } from "react";

//import fonts
import { JetBrains_Mono, Chakra_Petch, Handjet, Climate_Crisis, Archivo_Black, } from "next/font/google";
import localFont from "next/font/local";


const departureMono = localFont({
  src: "./fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono",
  display: "swap",
});

const chakraPetch = Chakra_Petch({
  variable: "--font-Chakra", 
  weight: ["700"], 
  subsets: ["latin"],
});
const HandjetFont = Handjet({
  variable: "--font-Handjet", 
  weight: ["700"], 
  subsets: ["latin"],
});

const climateCrisis = Climate_Crisis({
  variable: "--font-ClimateCrisis",
  weight: ["400"],
  subsets: ["latin"],
});

const ArchivoBlack = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "RODY.LAND | Creating an new perspective of future.",
  description: "landing on a ocean of ideas.....",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${chakraPetch.variable} ${HandjetFont.variable} ${climateCrisis.variable} ${departureMono.variable}  ${ArchivoBlack.variable} h-full antialiased`}>
      <body className="min-h-full flex overflow-x-hidden flex-col">
        <ViewTransition update="page">
          <SmoothScroll>
                  {children}
          </SmoothScroll>
        </ViewTransition>
      </body>
    </html>
  );
}