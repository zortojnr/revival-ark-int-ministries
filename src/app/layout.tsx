import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Revival Ark International Ministries",
  description: "An Ark of Revival to the Nations - Bringing hope, healing, and transformation through the power of God's love and the Gospel of Jesus Christ.",
  viewport: "width=device-width, initial-scale=1",
  keywords: "Revival Ark, International Ministries, Christian Ministry, Gospel, Nigeria, Jos, Pastor Haruna Aaron Gassy, Revival Crusades, Youth Ministry, Orphanage, Bible School",
  authors: [{ name: "Revival Ark International Ministries" }],
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "Revival Ark International Ministries",
    description: "An Ark of Revival to the Nations - Bringing hope, healing, and transformation through the power of God's love and the Gospel of Jesus Christ.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
