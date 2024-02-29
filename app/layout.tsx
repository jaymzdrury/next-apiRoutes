import type { Metadata } from "next";
import { inter } from "@/font/font";

export const metadata: Metadata = {
  title: "API Routes",
  description: "This is about API Routes",
  icons: {
    icon: "/img/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
