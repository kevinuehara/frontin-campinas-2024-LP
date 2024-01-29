import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FrontIn Campinas 2024",
  description:
    "FrontIn Campinas 2024, o maior evento FrontEnd de Campinas está de volta!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script src="/static/clarity/index.js" async />
      </head>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
