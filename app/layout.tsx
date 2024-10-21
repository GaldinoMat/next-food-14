import { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import MainHeader from "@/components/mainHeader/mainHeader";

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
