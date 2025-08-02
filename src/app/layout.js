import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/TopBanner";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Fame Tonic",
  description: "Fame Tonic using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${urbanist.variable} antialiased`}>
        <TopBanner />

        <main>{children}</main>
      </body>
    </html>
  );
}
