import type { Metadata } from "next";
import { Comfortaa, Roboto } from "next/font/google";
import "./globals.css";

const ComfortaaFont = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["cyrillic"],
});

const RobotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Books App",
  description: "Search books !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ComfortaaFont.variable} ${RobotoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
