import type { Metadata } from "next";
import { Mali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// 1. โหลดฟอนต์และสร้างตัวแปร CSS เพื่อนำไปใช้ควบคุมทั้งเว็บ
const maliFont = Mali({
  weight: ["400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-mali", 
});

export const metadata: Metadata = {
  title: "ระบบจัดการคอร์สเรียน",
  description: "Next Course Hub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 2. ฝังตัวแปรฟอนต์ไว้ที่ HTML แท็กบนสุด
    <html lang="en" className={maliFont.variable}>
      <body>
        <header className="siteHeader">
          <Navbar />
        </header>

        {children}
      </body>
    </html>
  );
}