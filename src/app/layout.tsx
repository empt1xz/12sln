import type { Metadata } from "next";
import { Inter, Geist, Jaro } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const myFont = Inter({
  variable: "--myFont",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "12SLN - Desenvolvimento de Software",
  description:
    "Startup especializada em desenvolvimento de software, sistemas web, apps e soluções digitais sob medida.",
  keywords: [
    "desenvolvimento de software",
    "criação de sistemas",
    "startup tecnologia",
    "desenvolvimento web",
    "landing page",
    "criação de aplicativos",
    "soluções digitais",
    "12SLN",
  ],
  authors: [{ name: "12SLN" }],
  openGraph: {
    title: "12SLN",
    description: "Soluções tecnólogicas modernas e escaláveis",
    url: "https://12sln.com.br",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={cn(myFont.variable, "font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
