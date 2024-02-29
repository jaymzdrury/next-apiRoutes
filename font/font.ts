import { Inter, Noto_Serif_Bengali } from "next/font/google";

//fonts/google.com/variablefonts
export const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});

export const noto = Noto_Serif_Bengali({
  subsets: ["latin"],
  display: "fallback",
  variable: "--noto",
});
