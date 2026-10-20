"use client";
import { college, dbatu } from "@/assets/image";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

const EducationPage = () => {
  const educationDetails = [
    {
      image: dbatu,
      degree: "Bachelor of Technology in Information Technology (B.Tech IT)",
      institution:
        "Dr. Babasaheb Ambedkar Technological University, Lonere, Maharashtra",
      Passout: "2024",
      description:
        "Specialized in software engineering, data structures, web technologies, and database management. Applied core IT concepts to build scalable applications and practical academic projects.",
    },
    {
      image: college,
      degree: "Higher Secondary Certificate (HSC)",
      institution:
        "Jnan Vikas Mandal Mehta College, Airoli, Mumbai, Maharashtra",
      Passout: "2018",
      description:
        "Pursued the Science stream with a primary focus on Physics, Mathematics, and Computer Science. Developed strong analytical and logical reasoning skills.",
    },
    {
      image: "",
      degree: "Secondary School Certificate (SSC)",
      institution: "DnyanGanga Secondary School, Kalwa, Thane, Maharashtra",
      Passout: "2016",
      description:
        "Built a solid academic foundation with core coursework in Mathematics and General Sciences. Demonstrated consistent academic performance and a strong aptitude for learning.",
    },
  ];

  return (
    <div className="flex w-full flex-col justify-center px-2 py-1 space-y-4">
      {/* Section Header */}
      <div className="mb-2 flex items-center justify-center gap-2">
        <GraduationCap className="h-7 w-7 shrink-0 text-primary sm:h-10 sm:w-10 md:h-12 md:w-12" />
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Education</h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            className={`flex flex-row gap-2 rounded-lg border border-gray-100 border-l-4 border-l-primary bg-gray-50 p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-700/50 dark:bg-gray-800/50 sm:gap-4 sm:rounded-2xl sm:p-4 lg:gap-6 lg:p-6 ${
              index === educationDetails.length - 1 &&
              educationDetails.length % 2 !== 0
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
                  width={128}
                  height={128}
                  unoptimized
                  className="h-18 w-18 rounded-full border-2 border-primary/20 bg-white object-cover p-0.5 dark:bg-gray-900 md:h-32 md:w-32"
                />
              ) : (
                <div className="flex h-18 w-18 items-center justify-center rounded-full border-2 border-primary/20 bg-gray-200 dark:bg-gray-700 md:h-32 md:w-32">
                  <GraduationCap className="h-12 w-12 shrink-0 text-primary md:h-18 md:w-18" />
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Content */}
            <div className="flex min-w-0 w-full flex-col gap-1">
              <div className="flex flex-col items-start justify-between gap-2">
                <h3 className="text-md font-bold leading-tight text-primary md:text-xl">
                  {edu.degree}
                </h3>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                  {edu.Passout}
                </span>
              </div>

              <h4 className="text-sm font-semibold leading-tight text-gray-800 dark:text-gray-200 sm:text-sm md:text-base">
                {edu.institution}
              </h4>

              <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400 sm:text-sm hidden md:block">
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