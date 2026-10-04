import type { Metadata } from "next";
import { Poppins, Preahvihear } from "next/font/google";
import "./globals.css";
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
      className={`${preahvihear.variable} ${poppins.variable} h-full overflow-hidden antialiased`}
    >
      <body className="m-0 flex h-screen w-screen flex-col overflow-hidden bg-background text-secondary">
        <Toaster />
        <main className="flex h-full w-full flex-col overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
