import type { Metadata } from "next";
import { plusJakartaSans, inter, jetbrainsMono } from "@/lib/fonts";
import { seo } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.url,
    siteName: seo.title,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen font-text antialiased">{children}</body>
    </html>
  );
}
