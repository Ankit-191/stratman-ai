import { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import "./main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://strat-gpt-amber.vercel.app/"),
  title: "Stratman AI",
  description: "Make faster and smarter decisions with Stratman AI",
  openGraph: {
    images: "/meta-img.webp",
    title: "Stratman AI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="Artificial intelligence, Stock market prediction"
        />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:image" content={metadata.openGraph.images} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
