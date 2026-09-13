import type { Metadata } from "next";
import { Poppins, Preahvihear } from "next/font/google";
import "./globals.css";
import Header from "@/component/header";
import Footer from "@/component/footer";
import { Toaster } from "sonner";

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
      <body className="h-full w-full flex flex-col overflow-auto">
        <Header />
        <Toaster/>
        <main className="flex-1 flex flex-col w-full p-4 md:p-6 pt-26 md:pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
