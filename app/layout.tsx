import "./globals.css";
import { Nunito } from "next/font/google";

import type { Metadata } from "next";
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar
          // currentUser={currentUser}
          />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}