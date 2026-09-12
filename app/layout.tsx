import type { Metadata } from "next";
import { Poppins, Preahvihear } from "next/font/google";
import "./globals.css";
import Header from "@/component/header";
import Footer from "@/component/footer";

const preahvihear = Preahvihear({
  weight: "400",
  subsets: ["khmer", "latin"],
  variable: "--font-preahvihear",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Durgesh Sahani | Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${preahvihear.variable} ${poppins.variable} h-screen overflow-hidden antialiased`}
    >
      <body className="h-full w-full flex flex-col">
        <Header />
        
        {/* flex-1 ensures this takes up exactly the remaining height between the header and footer */}
        <main className="flex-1 overflow-auto flex flex-col w-full">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}