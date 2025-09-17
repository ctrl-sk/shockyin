import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BottomNav } from "@/components/bottom-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import FilmGrain from "@/components/film-grain";
import { CustomCursor } from "@/components/custom-cursor";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Shashank - Personal Portfolio",
  description: "Personal portfolio website showcasing work, tools, and thoughts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          <FilmGrain />
          <div className="min-h-screen pb-20 relative z-10">
            {children}
          </div>
          {/* Fade overlay behind navigation */}
          <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-30" />
          <BottomNav />
          <div className="fixed top-4 right-4 z-50 sm:static sm:ml-auto">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
