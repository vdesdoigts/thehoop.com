import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "white",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Hoop",
  description:
    "Recevez les dernières informations NBA, les matchs, les transferts, les blessures, les performances et bien plus encore. C'est facile, gratuit et livré chaque matin directement sur WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`bg-slate-900 ${inter.className}`}>{children}</body>
    </html>
  );
}
