import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GI33 Durian Kepong - Premium Durians in Kuala Lumpur",
  description: "Your top choice for fresh and delicious Musang King, D24, and other premium durians in Kepong, Kuala Lumpur. Contact us for delivery and events.",
  keywords: ["durian", "Musang King", "Kepong", "Kuala Lumpur", "GI33 Durian", "fresh durian"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}