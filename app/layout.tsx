import type { Metadata } from "next";
import "./globals.css";
import { Overpass, Dosis } from "next/font/google";
import Provider from "@/providers/Providers";
import { Suspense } from "react";

const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
  weight: ["300", "400", "500", "600", "700", "900"],
});

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dosis",
});

export const metadata: Metadata = {
  title: {
    default: "Restore Dignity C.I.C",
    template: "%s - Restore Dignity C.I.C",
  },
  description:
    "Restore Dignity helps prison leavers and homeless individuals rebuild their lives through recovery, rehabilitation, and reintegration. We offer support programs, housing, mentorship, and employment pathways.",
  keywords: [
    "prison rehabilitation",
    "homeless support",
    "recovery programs",
    "reintegration support",
    "substance misuse recovery",
    "alcohol dependency help",
    "restore dignity",
    "mentorship programs",
    "housing for homeless",
    "second chances",
  ],
  icons: [{ url: "/favicon.ico?v=2", type: "image/x-icon" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Restore Dignity | Rebuilding Lives with Stability and Hope",
    description:
      "We support prison leavers and homeless individuals with essential resources, mentorship, and housing. Empowering sustainable recovery and reintegration into society.",
    url: "https://www.restoredignitylimited.co.uk/",
    siteName: "Restore Dignity C.I.C",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dosis.variable} font-dosis ${overpass.variable} font-overpass`}
    >
      <body suppressHydrationWarning={true}>
        <Provider>
          <Suspense>{children}</Suspense>
        </Provider>
      </body>
    </html>
  );
}
