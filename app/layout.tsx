import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import CustomCursor from "@/components/ui/CustomCursor";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rukrishna.vercel.app"), 

  title: "Krishna Purwar | Software Developer",
  description:
    "Software Developer building modern, intelligent applications. First Year MCA Student at NIT Jamshedpur.",

  keywords: [
    "Krishna Purwar",
    "Software Developer",
    "Web Developer",
    "React",
    "Next.js",
    "FastAPI",
    "Portfolio",
    "NIT Jamshedpur",
    "MCA",
    "Jamshedpur",
  ],

  authors: [{ name: "Krishna Purwar", url: "https://rukrishna.vercel.app" }],
  creator: "Krishna Purwar",

  openGraph: {
    title: "Krishna Purwar | Software Developer",
    description:
      "Software Developer building modern, intelligent applications.",
    url: "https://rukrishna.vercel.app", 
    siteName: "Krishna Purwar's Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Krishna Purwar - Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Krishna Purwar | Software Developer",
    description:
      "Software Developer building modern, intelligent applications.",
    images: ["/og-image.png"], 
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-white font-sans antialiased dark",
          "bg-zinc-900 text-white scroll-smooth",
          inter.variable,
          jetbrainsMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className={cn(
              "fixed inset-0 -z-10 h-full w-full",
              "bg-zinc-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]",
              "animate-[background-shine_6s_linear_infinite]"
            )}
          />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
