import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arman Zareian — ML Engineer & Full Stack Developer",
  description:
    "Machine Learning Engineer, Data Scientist, and Full Stack Developer with 5+ years of experience. Specializing in privacy-preserving AI, LLMs, and scalable ML systems.",
  keywords: [
    "Machine Learning",
    "AI",
    "Full Stack",
    "PhD",
    "LLM",
    "Diffusion Models",
    "Software Engineer",
  ],
  authors: [{ name: "Arman Zareian" }],
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
