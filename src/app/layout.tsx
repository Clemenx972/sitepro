import { Metadata } from "next";
import "./globals.css";

import NavigationBar from "@/components/navBar";

export const metadata: Metadata = {
  title: "Porfolio",
  description: "Porfolio de Steven Etienne",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <NavigationBar />
      {children}
    </html>
  );
}
