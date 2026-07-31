import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import ConditionalFooter from "@/components/layout/ConditionalFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Indigo Polytechnic",
  description: "Empowering students through quality education and practical learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <ConditionalFooter />
      </body>
    </html>
  );
}