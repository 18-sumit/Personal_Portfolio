import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/cn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sumit Singh",
  description:
    "Portfolio showcasing projects, skills, and professional journey",
  keywords: ["Software Engineer","MERN Stack Developer", "Next.js"],
  openGraph: {
    title: "Sumit Singh Portfolio",
    description: "Explore my professional projects and expertise",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico", // Optional for Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en" className="dark">
      <body
        suppressHydrationWarning={true}
        className={cn(
          inter.variable,
          "bg-black",
          "text-gray-300", 
          "antialiased", 
          "scroll-smooth"
        )}
      >
        {children}
      </body>
    </html>
  );
}