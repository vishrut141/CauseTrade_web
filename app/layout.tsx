import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CauseTrade | Markets and Meaningful Causes",
  description:
    "CauseTrade explores whether financial participation can become more connected to long-term support for meaningful real-world causes.",
  openGraph: {
    title: "CauseTrade",
    description:
      "An early cause-driven marketplace concept exploring markets, participation, transparency, and meaningful causes.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
