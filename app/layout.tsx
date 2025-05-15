import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/providers/Providers";

export const metadata: Metadata = {
  title: {
    default: "Restore Dignity",
    template: "%s - Restore Dignity",
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
      <body className={``}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
