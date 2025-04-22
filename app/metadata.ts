// app/metadata.ts (server-side)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sumit",
  description: "Portfolio showcasing projects, skills, and professional journey",
  keywords: ["Software Engineer", "AI", "Next.js"],
  openGraph: {
    title: "Sumit Singh Portfolio",
    description: "Explore my professional projects and expertise",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};
