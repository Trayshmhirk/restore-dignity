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
    default: "Restore Dignity",
    template: "%s - Restore Dignity",
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
    url: "https://www.restoredignity.org", // Change to your real domain
    siteName: "Restore Dignity",
    images: [
      {
        url: "/img/og-image.jpg", // Ensure this exists and is 1200x630 ideally
        width: 1200,
        height: 630,
        alt: "Restore Dignity - Empowering Lives",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restore Dignity",
    description:
      "Helping individuals rebuild their lives after homelessness or incarceration through compassionate recovery and support.",
    images: ["/img/og-image.jpg"],
    creator: "@restoredignity", // Optional: Your Twitter handle
  },
  metadataBase: new URL("https://www.restoredignity.org"), // Change if different
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
