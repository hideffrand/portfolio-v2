import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deff's Portfolio",
  description: "Hi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <div className="base-bg w-full h-screen fixed"></div>
        <div className="max-w-6xl w-full px-4 md:px-8 mx-auto">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
