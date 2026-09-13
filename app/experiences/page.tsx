import { Building2 } from "lucide-react"; 
import Image from "next/image";

const ExperiencePage = () => {
  const experiences = [
    {
      image: "", // Ensure this image exists in the public/logos folder
      title: "Software Developer at Techaroha Solutions Private Limited",
      duration: "Jan 2023 - Present",
      description:
        "Responsible for driving the development of key digital initiatives, including managing the Carbon Plant project and developing/maintaining OrbitQR, a dynamic public-facing website.",
    },
    {
      image: "", // Ensure this image exists in the public/logos folder
      title: "Intern at Techaroha Solutions Private Limited",
      duration: "Jul 2022 - Dec 2022",
      description:
        "Gained hands-on experience in software development, contributing to various projects and learning best practices in coding and project management.",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen py-12 px-4 sm:px-6">
      <div className="flex items-center gap-3 mb-10 w-full max-w-4xl justify-center md:justify-start">
        <Building2 className="w-8 h-8 text-primary" />
        <h1 className="text-3xl md:text-4xl font-bold">My Experience</h1>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 flex flex-col sm:flex-row gap-6 rounded-xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow duration-200"
          >
            {/* LEFT COLUMN: Image or Icon */}
            <div className="flex-shrink-0 flex justify-center sm:justify-start">
              {exp.image ? (
                <Image
                  src={exp.image}
                  alt={exp.title}
                  width={128} // Matched to max standard size (md:w-32 is 128px)
                  height={128} 
                  className="rounded-full border-2 border-primary w-24 h-24 md:w-32 md:h-32 object-cover"
                  unoptimized
                />
              ) : (
                <div className="rounded-full border-2 border-primary w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-gray-700">
                  <Building2 className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Content */}
            <div className="flex flex-col w-full">
              {/* Header Row: Title & Duration Badge */}
              <div className="flex flex-col md:flex-row md:justify-between items-center sm:items-start gap-3 mb-4">
                <h2 className="text-xl md:text-2xl font-semibold text-primary text-center sm:text-left">
                  {exp.title}
                </h2>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold flex-shrink-0 whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center sm:text-left">
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