import { Inter, JetBrains_Mono } from "next/font/google"; // Import JetBrains_Mono
import { ThemeProvider } from "next-themes";
import "./globals.css";

import CustomCursor from "@/components/ui/CustomCursor"; // <-- 1. IMPORT
import { cn } from "@/lib/utils";

// Setup Inter (our main font)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Create CSS variable
});

// Setup JetBrains_Mono (our heading font)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-mono", // Create CSS variable
});

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
          // Apply both font variables to the body
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
          {/* This is the new animated background from Resolution 3 */}
          <div
            className={cn(
              "fixed inset-0 -z-10 h-full w-full",
              "bg-zinc-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]",
              "animate-[background-shine_6s_linear_infinite]"
            )}
          />
          <CustomCursor /> {/* <-- 2. ADD COMPONENT */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}