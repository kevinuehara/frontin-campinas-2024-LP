import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";

const oxygen = Oxygen({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FrontIn Campinas 2024",
  description: "Landing Page para o FrontIn Campinas 2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oxygen.className}>{children}</body>
    </html>
  );
}
