import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Supawit | Full-Stack Developer",
  description:
    "Building practical web experiences with modern technologies. Full-Stack Developer portfolio featuring case studies, high-performance systems, and clean UI engineering.",
  keywords: [
    "Supawit",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Portfolio",
  ],
  authors: [{ name: "Supawit", url: "https://github.com/RiywSu01" }],
  openGraph: {
    title: "Supawit | Full-Stack Developer",
    description: "Building practical web experiences with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-[#F5F2F2] text-[#2B2A2A] font-sans selection:bg-[#FEB05D] selection:text-[#2B2A2A]">
        {children}
      </body>
    </html>
  );
}
