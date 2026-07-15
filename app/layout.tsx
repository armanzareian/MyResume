import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arman Zareian — ML Engineer & Full Stack Developer",
  description:
    "Machine Learning Engineer, Data Scientist, and Full Stack Developer with 5+ years of experience. PhD researcher at Kansas State University specializing in privacy-preserving AI, multi-agent LLM systems, and scalable ML pipelines.",
  keywords: [
    "Machine Learning",
    "AI",
    "Full Stack",
    "PhD",
    "LLM",
    "Multi-Agent Systems",
    "Diffusion Models",
    "Privacy-Preserving AI",
    "Software Engineer",
    "Kansas State University",
  ],
  authors: [{ name: "Arman Zareian" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Arman Zareian — ML Engineer & Full Stack Developer",
    description:
      "Machine Learning Engineer, Data Scientist, and Full Stack Developer with 5+ years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
