"use client";
import { college, dbatu } from "@/assets/image";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import ReadMore from "@/component/read-more";

const EducationPage = () => {
  const educationDetails = [
    {
      image: dbatu,
      degree: "Bachelor of Technology in Information Technology (B.Tech IT)",
      mobileDegree: "B.Tech IT",
      institution:
        "Dr. Babasaheb Ambedkar Technological University, Lonere, Maharashtra",
      mobileInstitution: "DBATU, Lonere",
      Passout: "2024",
      description:
        "Specialized in software engineering, data structures, web technologies, and database management. Applied core IT concepts to build scalable applications and practical academic projects.",
    },
    {
      image: college,
      degree: "Higher Secondary Certificate (HSC)",
      mobileDegree: "Class XII (HSC)",
      institution:
        "Jnan Vikas Mandal Mehta College, Airoli, Mumbai, Maharashtra",
      mobileInstitution: "JVM Mehta College",
      Passout: "2018",
      description:
        "Pursued the Science stream with a primary focus on Physics, Mathematics, and Computer Science. Developed strong analytical and logical reasoning skills.",
    },
    {
      image: "",
      degree: "Secondary School Certificate (SSC)",
      mobileDegree: "Class X (SSC)",
      institution: "DnyanGanga Secondary School, Kalwa, Thane, Maharashtra",
      mobileInstitution: "DnyanGanga School",
      Passout: "2016",
      description:
        "Built a solid academic foundation with core coursework in Mathematics and General Sciences. Demonstrated consistent academic performance and a strong aptitude for learning.",
    },
  ];

  return (
    // FIX 1: Replaced Fragment with a single contained wrapper
    <div className="flex w-full flex-col justify-center px-2 py-1 sm:px-4 sm:py-6">
      
      {/* Section Header */}
      <div className="mb-2 flex items-center justify-center gap-2 sm:mb-10 sm:gap-3">
        <GraduationCap className="h-7 w-7 shrink-0 text-primary sm:h-10 sm:w-10 md:h-12 md:w-12" />
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Education</h2>
      </div>

      {/* FIX 2: Changed to lg:grid-cols-2 to prevent squishing on iPad sizes */}
      <div className="grid w-full grid-cols-1 gap-2 sm:gap-4 lg:grid-cols-2 lg:gap-6">
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            // FIX 3: Make the 3rd odd item center itself on large screens for visual balance
            className={`flex flex-row gap-2 rounded-lg border border-gray-100 border-l-4 border-l-primary bg-gray-50 p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-700/50 dark:bg-gray-800/50 sm:gap-4 sm:rounded-2xl sm:p-4 lg:gap-6 lg:p-6 ${
              index === educationDetails.length - 1 && educationDetails.length % 2 !== 0
                ? "lg:col-span-2 lg:w-2/3 lg:mx-auto" 
                : ""
            }`}
          >
            {/* LEFT COLUMN: Image or Icon */}
            <div className="flex shrink-0 justify-center sm:justify-start">
              {edu.image ? (
                <Image
                  src={edu.image}
                  alt={edu.institution}
                  width={128} // Updated to 128 to match md:w-32 exactly
                  height={128}
                  unoptimized
                  className="h-10 w-10 rounded-full border-2 border-primary/20 bg-white object-cover p-0.5 dark:bg-gray-900 sm:h-16 sm:w-16 sm:p-1 md:h-32 md:w-32"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/20 bg-gray-200 dark:bg-gray-700 sm:h-16 sm:w-16 md:h-32 md:w-32">
                  <GraduationCap className="h-6 w-6 shrink-0 text-primary sm:h-10 sm:w-10 md:h-14 md:w-14" />
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Content */}
            <div className="flex min-w-0 w-full flex-col">
              {/* FIX 4: Better wrapping logic so long text doesn't overlap the badge */}
              <div className="mb-1 flex flex-row items-start justify-between gap-1 sm:mb-3 sm:gap-3 xl:items-center xl:justify-between">
                <h3 className="min-w-0 flex-1 text-sm font-bold leading-tight text-primary sm:text-lg md:text-xl">
                  <span className="sm:hidden">{edu.mobileDegree}</span>
                  <span className="hidden sm:inline">{edu.degree}</span>
                </h3>
                <span className="inline-block shrink-0 whitespace-nowrap rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary sm:px-4 sm:py-1.5 sm:text-xs md:text-sm">
                  {edu.Passout}
                </span>
              </div>

              {/* Institution & Description */}
              <div className="flex min-w-0 flex-wrap items-center justify-between gap-1 text-left">
                <h4 className="min-w-0 flex-1 text-xs font-semibold leading-tight text-gray-800 dark:text-gray-200 sm:text-sm md:text-base">
                  <span className="sm:hidden">{edu.mobileInstitution}</span>
                  <span className="hidden sm:inline">{edu.institution}</span>
                </h4>
                <ReadMore
                  className="lg:hidden"
                  text={edu.description}
                />
              </div>
              <p className="hidden text-sm leading-relaxed text-gray-600 dark:text-gray-400 lg:line-clamp-3 lg:block xl:line-clamp-none">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;