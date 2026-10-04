"use client";

import Image from "next/image";
import { toast } from "sonner";
import { Person } from "@/assets/image";

export default function Home() {
  const handleDownloadCV = () => {
    toast("CV download feature is not implemented yet.", {
      id: "cv-download-toast",
      description: "This feature will be available soon.",
    });
  };

  return (
    <section className="flex h-full w-full max-w-6xl flex-col items-center justify-center gap-2 px-3 py-2 sm:gap-4 sm:px-4 md:flex-row md:gap-12 md:py-0 lg:gap-16">
      <Image
        src={Person}
        alt="Durgesh Sahani"
        loading="eager"
        unoptimized
        className="h-16 w-16 shrink-0 rounded-full border-4 border-primary object-cover shadow-lg transition-transform duration-300 hover:scale-105 sm:h-28 sm:w-28 md:h-72 md:w-72 lg:h-80 lg:w-80"
      />

      <div className="flex w-full max-w-2xl min-w-0 flex-col items-center text-center md:items-start md:text-left">
        <h1 className="mb-1 text-base sm:text-xl md:mb-2 md:text-2xl">
          Hello,
          <b className="block text-xl font-bold text-primary sm:text-3xl md:inline lg:text-4xl">
            I&apos;m Durgesh Sahani
          </b>
        </h1>

        <p className="mb-2 hidden text-xs leading-5 sm:mb-3 sm:block sm:text-base md:mb-5">
          A Developer who believes in{" "}
          <b className="text-primary">clean code & smart solutions.</b>
        </p>

        <h2 className="mb-2 block text-lg font-bold sm:mb-3 sm:text-2xl md:mb-5 lg:text-3xl">
          I’m a Software Developer.
        </h2>

        <p className="mb-3 text-sm leading-5 text-secondary/80 sm:mb-5 sm:text-base sm:leading-relaxed md:mb-8 lg:text-lg">
          At Techaroha Solutions, I build Carbon Plant and OrbitQR.
        </p>

        <div className="flex w-full justify-center md:justify-start">
          <button
            className="min-h-11 rounded-full bg-primary px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-secondary hover:text-primary sm:px-8 sm:py-3 sm:text-base"
            onClick={handleDownloadCV}
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}