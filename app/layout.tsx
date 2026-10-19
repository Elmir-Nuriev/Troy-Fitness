import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#07090e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "VORTEX FITNESS | Премиальный фитнес-клуб в Батуми",
  description:
    "Премиальный фитнес-клуб VORTEX FITNESS в Батуми. Профессиональные тренажеры, кардио-зона с панорамным видом, персональные тренировки, бар спортивного питания и гибкие тарифы.",
  keywords: [
    "VORTEX FITNESS",
    "фитнес клуб батуми",
    "тренажерный зал батуми",
    "gym batumi",
    "fitness batumi",
    "персональный тренер батуми",
    "спортзал батуми",
  ],
  openGraph: {
    title: "VORTEX FITNESS | Премиальный фитнес-клуб в Батуми",
    description:
      "Современное пространство для тренировок в Батуми. Зона свободных весов, кардио, фитнес-бар и профессиональные наставники.",
    siteName: "VORTEX FITNESS Batumi",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#07090E] text-[#F3F4F6] selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}