import type { Metadata } from "next";
import { Roboto_Mono } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BottomNav } from "@/components/bottom-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import FilmGrain from "@/components/film-grain";
import { CustomCursor } from "@/components/custom-cursor";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "shocky.in",
  description: "Personal portfolio website showcasing work, tools and thoughts | Shashank Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoMono.className} suppressHydrationWarning>
      <body
        className={`antialiased m-0 p-0`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          <FilmGrain />
          <div className="min-h-screen p-0 relative z-10">
            {children}
          </div>
          {/* Fade overlay behind navigation */}
          <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-30" />
          <BottomNav />
          <ThemeToggle />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
