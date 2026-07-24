import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import Navbar from "@/components/navbar";
import SmoothScroll from "@/components/smooth-scroll";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
      <body className={poppins.className}>
        <SmoothScroll>
          <Navbar />
          <div className="base-bg w-full h-screen fixed"></div>
          <div className="max-w-6xl w-full px-4 md:px-8 mx-auto">
            {children}
            <Footer />
            <BackToTop />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}