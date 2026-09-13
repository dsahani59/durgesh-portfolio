import { GraduationCap } from "lucide-react";
import Image from "next/image";

const EducationPage = () => {
  const educationDetails = [
    {
      image: "", // Leave empty to test the fallback icon, or add your path
      degree: "Bachelor of Science in Information Technology (B.Sc IT)", 
      institution: "Your University / College Name",
      duration: "2019 - 2022",
      description:
        "Focused on software engineering, web development, and database management. Completed major project on [Project Name].",
    },
    {
      image: "", 
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Your Junior College Name",
      duration: "2017 - 2019",
      description:
        "Completed 12th grade with a focus on Computer Science and Mathematics.",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full max-w-4xl mx-auto p-4">
      <div className="flex items-center gap-3 mb-8 w-full justify-center md:justify-start">
        <GraduationCap className="w-8 h-8 text-primary" />
        <h2 className="text-3xl font-bold">Education</h2>
      </div>

      <div className="w-full flex flex-col gap-6">
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 flex flex-col sm:flex-row gap-6 rounded-xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow duration-200"
          >
            {/* LEFT COLUMN: Image or Icon */}
            <div className="flex-shrink-0 flex justify-center sm:justify-start">
              {edu.image ? (
                <Image
                  src={edu.image}
                  alt={edu.institution}
                  width={128} // Matched to max standard size (md:w-32 is 128px)
                  height={128}
                  unoptimized
                  className="rounded-full border-2 border-primary w-24 h-24 md:w-32 md:h-32 object-cover"
                />
              ) : (
                <div className="rounded-full border-2 border-primary w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-gray-700">
                  <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Content */}
            <div className="flex flex-col w-full">
              {/* Header Row: Title & Duration Badge */}
              <div className="flex flex-col md:flex-row md:justify-between items-center sm:items-start md:items-start gap-3 mb-2">
                <h3 className="text-xl md:text-2xl font-semibold text-primary text-center sm:text-left">
                  {edu.degree}
                </h3>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold flex-shrink-0 whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>

              {/* Institution & Description */}
              <div className="text-center sm:text-left mt-2 md:mt-0">
                <h4 className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {edu.institution}
                </h4>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationPage;