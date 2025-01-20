import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Review With AI",
  description:
    "You deserve a website that works as hard as you do. We’re here to help!",
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
