import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Loading Luxury Fonts
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// THIS IS THE BRANDING SECTION THAT FIXES THE PREVIEWS
export const metadata: Metadata = {
  title: "$KITSU | The Empress of Meme Coins",
  description: "Built for cat lovers. Owned by believers. Dogs compete. The Empress simply reigns.",
  metadataBase: new URL('https://kitsucat.xyz'),
  icons: {
    icon: "/kitsu.png",
    shortcut: "/kitsu.png",
    apple: "/kitsu.png",
  },
  openGraph: {
    title: "$KITSU | The Empress of Meme Coins",
    description: "The first luxury feline memecoin. Luxury has whiskers.",
    url: "https://kitsucat.xyz",
    siteName: "$KITSU",
    images: [
      {
        url: "/kitsu.png",
        width: 1200,
        height: 1200,
        alt: "Kitsu The Empress",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "$KITSU | The Empress of Meme Coins",
    description: "The first luxury feline memecoin. Luxury has whiskers.",
    images: ["/kitsu.png"],
    creator: "@Kitsucatonsol",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}