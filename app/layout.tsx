import type { Metadata } from "next";
import "./globals.css";
import NProgressBarProvider from "@/providers/NProgressBarProvider";

// import {
//   poppins,
//   libre_baskerville,
//   public_sans,
//   inter,
//   open_sans,
//   roboto,
// } from "./font";

export const metadata: Metadata = {
  title: {
    default: "Restore Policy",
    template: "%s - Restore Policy",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``} // ${poppins.variable} font-poppins ${libre_baskerville.variable} font-libre-baskerville ${public_sans.variable} font-public-sans ${inter.variable} ${open_sans.variable} ${roboto.variable}
      >
        <NProgressBarProvider>{children}</NProgressBarProvider>
      </body>
    </html>
  );
}
