import { Manrope, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sg", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-mr", display: "swap" });

export const fontClass = `${spaceGrotesk.variable} ${manrope.variable}`;
