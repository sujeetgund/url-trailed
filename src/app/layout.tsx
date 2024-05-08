import type { Metadata } from "next";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
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
      <body className={poppins.className}>
        <NextThemesProvider defaultTheme="light">
          <div className="relative">
            <Navbar />
            {children}
            <Toaster />
          </div>
        </NextThemesProvider>
      </body>
    </html>
  );
}
