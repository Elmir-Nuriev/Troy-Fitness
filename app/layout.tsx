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
  metadataBase: new URL("https://elmir.dev"),
  title: "ELMIR.DEV | Премиальные сайты на Next.js и воронки трафика под ключ в Батуми",
  description:
    "Разработка сверхбыстрых веб-платформ на Next.js, комплексная упаковка соцсетей, запуск рекламы и 24/7 сопровождение бизнеса в Батуми. Сайты, которые окупаются с первых клиентов.",
  keywords: [
    "разработка сайтов батуми",
    "создание сайтов батуми",
    "next js разработчик грузия",
    "web developer batumi",
    "лидогенерация батуми",
    "маркетинг батуми",
    "премиум сайты batumi",
    "elmir dev",
  ],
  authors: [{ name: "Elmir", url: "https://elmir.dev" }],
  openGraph: {
    title: "ELMIR.DEV | Сайты и трафик под ключ в Батуми",
    description:
      "Сверхбыстрые Next.js сайты, упаковка Instagram/Telegram и окупаемый трафик без технической головной боли.",
    url: "https://elmir.dev",
    siteName: "ELMIR.DEV Portfolio",
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
      <body className="min-h-full flex flex-col bg-[#07090E] text-[#F3F4F6] selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
