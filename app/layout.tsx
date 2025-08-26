import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Monifrap - Nigeria's All-in-One Banking Platform | Link & Manage Multiple Bank Accounts",
  description:
    "Monifrap is a Nigerian fintech app that lets you link and manage multiple local bank accounts in one platform. Eliminate failed payments, network delays, and USSD limits. Make seamless payments and send money instantly with enhanced security.",
  keywords:
    "Nigerian fintech, mobile banking Nigeria, multiple bank accounts, instant payments Nigeria, USSD alternative, secure banking app, money transfer Nigeria, bank management platform",
  openGraph: {
    title: "Monifrap - Nigeria's All-in-One Banking Platform",
    description:
      "Link & manage multiple Nigerian bank accounts in one app. Eliminate failed payments, network delays, and USSD transaction limits with secure, instant transactions.",
    type: "website",
    locale: "en_NG",
    siteName: "Monifrap",
    images: [
      {
        url: "/assets/monifrap.webp",
        width: 1200,
        height: 630,
        alt: "Monifrap - Manage Multiple Bank Accounts in One App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monifrap - Nigeria's All-in-One Banking Platform",
    description:
      "Manage multiple bank accounts, avoid failed payments & USSD limits with Nigeria's premier fintech solution.",
    images: ["/assets/monifrap.webp"],
  },
  robots: "index, follow",
  authors: [{ name: "Monifrap Team" }],
  creator: "Monifrap",
  publisher: "Monifrap",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
        className={`${poppinsFont.variable} ${interFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
