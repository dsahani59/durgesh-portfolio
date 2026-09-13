"use client";
import { Person } from "@/assets/image";
import Image from "next/image";
import { toast } from "sonner";
// Make sure to install lucide-react if not already

export default function Home() {
  const handleDownloadCV = () => {
    toast("CV download feature is not implemented yet.", {
      id: "cv-download-toast",
      description: "This feature will be available soon.",
    });
  };



  return (
    <main className="flex flex-col w-full flex-1 px-6 py-12 md:py-16 md:px-20 gap-16 md:gap-24">
      
      {/* --- HERO SECTION --- */}
      <section className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-16">
        <Image
          src={Person}
          alt="Person"
          /* Note: h-68 is not a standard Tailwind class. You might want to use h-64 or h-72 */
          className="rounded-full w-48 h-64 md:w-80 md:h-96 object-cover border-4 border-primary shadow-lg transition-transform duration-200 hover:scale-105"
          unoptimized
        />

        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
          <h1 className="text-xl md:text-2xl mb-2 md:mb-4">
            Hello! ,{" "}
            <b className="text-primary font-bold text-2xl md:text-4xl block md:inline mt-2 md:mt-0">
              I&apos;m Durgesh Sahani
            </b>
          </h1>

          <p className="text-sm md:text-md mb-4 md:mb-6">
            A Developer who believes in{" "}
            <b className="text-primary">clean code & smart solutions.</b>
          </p>

          <span className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 block">
            I’m a Software Developer.
          </span>

          <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
            I am currently working as a Software Developer at Techaroha Solutions
            Private Limited. In this role, I am responsible for driving the
            development of key digital initiatives. My primary focus includes
            managing the Carbon Plant project, a comprehensive organizational
            platform. Additionally, I develop and maintain OrbitQR, a dynamic
            public-facing website.
          </p>

          <div className="flex w-full justify-center md:justify-start">
            <button
              className="bg-primary text-white py-3 px-8 rounded-full hover:bg-secondary hover:text-primary transition-colors cursor-pointer duration-200"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
          </div>
        </div>
      </section>


      
    </main>
  );
}