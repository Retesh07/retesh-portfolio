import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Retesh G.S — Full-Stack Developer & ML Engineer",
  description:
    "Portfolio of Retesh G.S — Computer Science student at PES University. Full-stack developer, ML engineer, and systems builder specializing in MERN stack, TensorFlow, distributed systems, and embedded IoT.",
  keywords: [
    "Retesh G.S",
    "Full-Stack Developer",
    "Machine Learning Engineer",
    "MERN Stack",
    "PES University",
    "Portfolio",
    "React",
    "Node.js",
    "TensorFlow",
    "Python",
  ],
  authors: [{ name: "Retesh G.S" }],
  openGraph: {
    title: "Retesh G.S — Full-Stack Developer & ML Engineer",
    description:
      "Computer Science student at PES University. Building scalable web platforms, ML pipelines, and distributed systems.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
