"use client";
import { Techaroha } from "@/assets/image";
import { Building2 } from "lucide-react";
import Image from "next/image";
import ReadMore from "@/component/read-more";

const ExperiencePage = () => {
  const experiences = [
    {
      image: Techaroha,
      company: "Techaroha Solutions Private Limited",
      role: "Software Developer",
      duration: "Jul 2025 - Present",
      description:
        "Responsible for driving the development of key digital initiatives, including managing the Carbon Plant project and developing/maintaining OrbitQR, a dynamic public-facing website.",
    },
    {
      image: "", // Ensure this image exists in the public/logos folder
      company: "MakeMyIndia Private Limited",
      role: "Full-Stack Developer",
      duration: "Jan 2025 - Jun 2025",
      description:
        "During my internship as a Full Stack Web Developer at MakeIndia Pvt. Ltd, I was actively involved in building a feature-rich tourism platform using the MERN stack. I developed responsive UI components with React.js and Tailwind Css, designed RESTful APIs with Node.js and Express.js, and handled database operations with MongoDB. My responsibilities also included integrating external APIs, developing end-to-end systems for ticket, bus, and hotel bookings, and fine-tuning the website’s performance for faster load times. I ensured a smooth and consistent user experience across various devices.",
    },
  ];

  return (
    // FIX 1: Replaced Fragment with a restricted-width container to prevent infinite stretching
    <div className="flex w-full flex-col justify-center px-2 py-0 sm:px-4 sm:py-6">
      
      {/* Section Header */}
      <div className="mb-3 flex items-center justify-center gap-2 sm:mb-10 sm:gap-3">
        <Building2 className="h-7 w-7 shrink-0 text-primary sm:h-10 sm:w-10 md:h-12 md:w-12" />
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">My Experience</h1>
      </div>

      <div className="grid w-full grid-cols-1 gap-2 sm:gap-4 lg:grid-cols-2 lg:gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-row gap-2 rounded-lg border border-gray-100 border-l-4 border-l-primary bg-gray-50 p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-700/50 dark:bg-gray-800/50 sm:gap-4 sm:rounded-2xl sm:p-4 lg:gap-6 lg:p-6"
          >
            {/* LEFT COLUMN: Image or Icon */}
            <div className="flex shrink-0 justify-center sm:justify-start">
              {exp.image ? (
                <Image
                  src={exp.image}
                  alt={exp.company}
                  width={128} // Matched to max standard size (md:w-32 is 128px)
                  height={128}
                  className="h-10 w-10 rounded-full border-2 border-primary/20 bg-white object-cover p-0.5 dark:bg-gray-900 sm:h-16 sm:w-16 sm:p-1 md:h-32 md:w-32"
                  unoptimized
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/20 bg-gray-200 dark:bg-gray-700 sm:h-16 sm:w-16 md:h-32 md:w-32">
                  <Building2 className="h-6 w-6 shrink-0 text-primary sm:h-10 sm:w-10 md:h-14 md:w-14" />
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Content */}
            <div className="flex min-w-0 w-full flex-col">
              {/* FIX 4: Better wrapping flexbox for the title and date badge */}
              <div className="mb-1 flex flex-col items-start gap-1 sm:mb-3 sm:gap-3 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex min-w-0 flex-col gap-0.5 text-left sm:gap-1">
                  <h2 className="text-sm font-bold leading-tight text-primary sm:text-lg md:text-xl">
                    {exp.company}
                  </h2>
                  <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 sm:text-sm md:text-base">
                    {exp.role}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  <span className="inline-block shrink-0 whitespace-nowrap rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary sm:px-4 sm:py-1.5 sm:text-xs md:text-sm">
                    {exp.duration}
                  </span>
                  <ReadMore className="xl:hidden" text={exp.description} />
                </div>
              </div>

              {/* Description */}
              {/* FIX 5: Standardized typography colors for better readability */}
              <p className="hidden text-sm leading-relaxed text-gray-600 dark:text-gray-400 xl:block">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;