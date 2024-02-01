import { IBM_Plex_Mono, Manrope } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
