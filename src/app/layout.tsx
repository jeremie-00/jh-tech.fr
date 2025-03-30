import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ToastNotification } from "./components/ui/toast";
import "./globals.css";

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio de Jérémie Hérault | Développeur Web",
  description:
    "Explorez le portfolio de Jérémie Hérault, développeur web spécialisé en React, Next.js et TailwindCSS. Découvrez des projets modernes, interactifs et performants.",
  keywords: [
    "jh-tech",
    "portfolio",
    "dev web",
    "dev full-stack",
    "développeur",
    "développeur web",
    "portfolio développeur",
    "React",
    "Next.js",
    "TailwindCSS",
    "Jérémie Hérault",
    "Hérault Jérémie",
    "applications web",
    "développement front-end",
    "développement back-end",
  ],

  authors: [{ name: "Jérémie Hérault" }],
  robots: "index, follow",

  icons: {
    icon: "/icon-jh/favicon.ico",
    apple: "/icon-jh/apple-touch-icon.png",
    shortcut: "/icon-jh/favicon-32x32.png",
  },

  manifest: "/site.webmanifest",
  other: {
    "Content-Language": "fr-FR",
    "geo.region": "FR-60",
    "geo.placename": "Neuilly-en-Thelle",
    "geo.position": "49.2273;2.2486",
    ICBM: "49.2273, 2.2486",
  },
  openGraph: {
    title: "Portfolio de Jérémie Hérault | Développeur Web Full-Stack",
    description:
      "Découvrez les réalisations de Jérémie Hérault, développeur web passionné.",
    url: "https://jh-tech.fr/",
    siteName: "Portfolio de Jérémie Hérault",
    images: [
      {
        url: "https://jh-tech.fr/profilepicPc.jpg",
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Jérémie Hérault",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://jh-tech.fr"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className={`${DMSans.variable} antialiased`}>
        {children}
        <ToastNotification />
        <SpeedInsights />
      </body>
    </html>
  );
}
