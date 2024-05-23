import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./main.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: "https://strat-gpt-amber.vercel.app/"
    ? new URL("https://strat-gpt-amber.vercel.app/")
    : undefined,
  title: "Stratman AI",
  description: "Make faster and smarter decisions with Stratman Al",
  openGraph: {
    images: "/met-img.png",
    title: "Stratman AI",
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
