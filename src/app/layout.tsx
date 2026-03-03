import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Seo example project",
    default: "My app main title example",
  },
  description: "My app description example test)",
  keywords: "JS, NextJs, React, Learning",
  openGraph: {
    type: "website",
    title: "It is open graph title",
    url: "https://my-appp-nu.vercel.app/",
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
