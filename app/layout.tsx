import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin Spinks",
  description: "Software developer portfolio website for Kevin Spinks.",
  authors: [{ name: 'Kevin Spinks' }],
  openGraph: {
    type: "website",
    url: "https://kevinspinks.dev",
    title: "Kevin Spinks",
    description: "Software developer portfolio website for Kevin Spinks.",
    images: [{
      url: "https://kevinspinks.dev/portfoliosplash.png",
    }],
    siteName: 'Kevin Spinks',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevin Spinks',
    description: 'Software developer portfolio website for Kevin Spinks.',
    site: '@KSpinks07',
    creator: '@KSpinks07',
    images: 'https://kevinspinks.dev/portfoliosplash.png'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
