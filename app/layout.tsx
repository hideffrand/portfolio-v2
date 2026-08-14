import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import Navbar from "@/components/navbar";
import SmoothScroll from "@/components/smooth-scroll";
import VisitTracker from "@/components/visit-tracker";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://www.deff.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deffrand Farera — Software Engineer",
    template: "%s · Deffrand Farera",
  },
  description:
    "Portfolio of Deffrand Farera — full stack application developer building end-to-end web applications, API integrations, and product UI/UX.",
  applicationName: "Deffrand Farera",
  keywords: [
    "Deffrand Farera",
    "Deff",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Go",
    "UI/UX Design",
    "Portfolio",
  ],
  authors: [{ name: "Deffrand Farera", url: siteUrl }],
  creator: "Deffrand Farera",
  category: "Portfolio",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  appleWebApp: {
    capable: true,
    title: "Deffrand Farera",
    statusBarStyle: "black-translucent",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Deffrand Farera",
    title: "Deffrand Farera — Software Engineer",
    description:
      "Portfolio of Deffrand Farera — full stack application developer building end-to-end web applications, API integrations, and product UI/UX.",
    locale: "en_US",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deffrand Farera — Software Engineer",
    description:
      "Portfolio of Deffrand Farera — full stack application developer building end-to-end web applications, API integrations, and product UI/UX.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Deffrand Farera",
              url: siteUrl,
              jobTitle: "Software Engineer",
              knowsAbout: [
                "Full Stack Application Development",
                "API Integration",
                "UI/UX Design",
                "Next.js",
                "TypeScript",
                "Go",
              ],
              sameAs: [
                "https://www.linkedin.com/in/deffrand-farera/",
                "https://github.com/hideffrand",
              ],
            }),
          }}
        />
        <SmoothScroll>
          <Navbar />
          <VisitTracker />
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