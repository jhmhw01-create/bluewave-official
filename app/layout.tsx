import type { Metadata } from "next";
import { Noto_Sans_KR, Sora } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BLUEWAVE Official | THE TIDE OF YOUTH",
    template: "%s | BLUEWAVE Official",
  },
  description:
    "BLUEWAVE 공식 웹사이트. 다섯 개의 파도가 만나 하나의 바다가 되다. 강준서, 백이안, 한여울, 명해원, 아사쿠라 미오.",
  keywords: [
    "BLUEWAVE",
    "블루웨이브",
    "K-pop",
    "케이팝",
    "강준서",
    "백이안",
    "한여울",
    "명해원",
    "아사쿠라 미오",
    "WAVES",
    "THE TIDE OF YOUTH",
  ],
  openGraph: {
    title: "BLUEWAVE Official | THE TIDE OF YOUTH",
    description: "다섯 개의 파도가 만나 하나의 바다가 된다.",
    type: "website",
    locale: "ko_KR",
    siteName: "BLUEWAVE Official",
  },
  twitter: {
    card: "summary_large_image",
    title: "BLUEWAVE Official",
    description: "THE TIDE OF YOUTH — 다섯 개의 파도가 만나 하나의 바다가 된다.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} ${sora.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
