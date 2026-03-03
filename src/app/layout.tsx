import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My app title example",
  description: "My app description example test)",
  keywords: "JS, NextJs, React, Learning",
  openGraph: {
    type: "website",
    title: "It is open graph title",
    url: "https://www.google.com/",
    description: "Open graph description",
    images: [
      {
        url: "/books.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
