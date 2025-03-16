import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "URL Trailed - URL Shortener, Branded Short Links, and Analytics",
  description:
    "Simplify your URL management with URL Trailed, the ultimate solution for shortening URLs, creating branded short links, and gaining valuable insights through analytics. Enhance your online presence, track link performance, and optimize your marketing strategies with ease.",
  icons: {
    icon: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-amber-500/10 via-orange-600/10 to-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-amber-500/5 to-orange-600/5 rounded-full blur-3xl" />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
