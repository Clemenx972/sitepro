import { Metadata } from "next";
import "./globals.css";
import ToggleButton from "@/components/toggleButton";
import NavigationBar from "@/components/navBar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const metadata: Metadata = {
  title: "Porfolio",
  description: "Porfolio de Steven Etienne",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='fr'>
      <body className='flex min-h-screen flex-col bg-darkpurple'>
        <NavigationBar />
        {children}
      <ToastContainer />
      </body>
    </html>
  );
}
