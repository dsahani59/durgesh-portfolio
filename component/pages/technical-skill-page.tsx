"use client";
import { Code2 } from "lucide-react"; // Added to match previous pages' headers
import ReadMore from "@/component/read-more";

const TechnicalSkills = () => {
  const skills = [
    {
      id: 1,
      category: "Programming Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "C++", "C", "HTML5", "CSS"],
    },
    {
      id: 2,
      category: "Frontend Frameworks & Libraries",
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Postman",
        "Bootstrap 5",
        "Material UI",
        "Shadcn",
        "TanStack Query",
        "TanStack Router",
      ],
    },
    {
      id: 3,
      category: "Backend Technology",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful API Design",
        "WebSockets",
        "Webhooks",
        "Redis",
        "Cron Jobs",
      ],
    },
    {
      id: 4,
      category: "Databases & Cloud",
      skills: [
        "MongoDB",
        "MySQL",
        "Cloud Firestore",
        "Firebase Storage",
        "Cloud Functions",
        "App Hosting",
      ],
    },
    {
      id: 5,
      category: "Version Control",
      skills: ["Git", "GitHub", "BitBucket", "GitLab"],
    },
  ];

  return (
    // FIX 2: Replaced Fragment with a restricted-width container
    <div className="flex w-full flex-col justify-center px-2 py-1 sm:px-4 sm:py-6">
      {/* Section Header */}
      <div className="mb-2 flex items-center justify-center gap-2 sm:mb-10 sm:gap-3">
        <Code2 className="h-7 w-7 shrink-0 text-primary sm:h-10 sm:w-10 md:h-12 md:w-12" />
        <h1 className="text-xl font-bold sm:text-3xl md:text-4xl">My Technical Skills</h1>
      </div>

      {/* FIX 3: Changed to lg:grid-cols-2 and standard gap-6 */}
      <div className="mb-2 flex flex-col gap-1 lg:hidden">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex min-w-0 items-center justify-between gap-2 rounded-md border border-secondary/10 bg-secondary/5 px-2 py-1"
          >
            <h2 className="max-w-[56%] shrink-0 truncate text-xs font-semibold text-secondary">
              {skill.category}
            </h2>
            <p className="min-w-0 flex-1 truncate text-right text-[10px] leading-4 text-secondary/70">
              {skill.skills.slice(0, 2).join(", ")}
            </p>
          </div>
        ))}
        <ReadMore
          className="w-full text-center"
          text={skills
            .map((skill) => `${skill.category}: ${skill.skills.join(", ")}`)
            .join("\n\n")}
        />
      </div>

      <div className="hidden w-full grid-cols-[repeat(2,minmax(0,1fr))] gap-2 lg:grid lg:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            // FIX 4: Made theme-responsive, removed conflicting mb-6, and centered the odd 5th item on large screens
            className={`flex min-w-0 flex-col items-start gap-1 rounded-lg border border-gray-100 border-l-4 border-l-primary bg-gray-50 p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-700/50 dark:bg-gray-800/50 sm:flex-row sm:items-start sm:gap-5 sm:rounded-2xl sm:p-4 lg:p-6 ${
              index === skills.length - 1 && skills.length % 2 !== 0
                ? "lg:col-span-2 lg:w-2/3 lg:mx-auto"
                : ""
            }`}
          >
            {/* ID Badge */}
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary sm:h-12 sm:w-12 sm:text-xl">
              {skill.id}
            </div>

            {/* Content */}
            <div className="min-w-0 w-full">
              <h2 className="mb-1 text-xs font-bold leading-tight text-gray-800 dark:text-gray-100 sm:mb-2 sm:text-lg md:text-xl">
                {skill.category}
              </h2>
              {/* Standardized typography colors for readability */}
              <p className="break-words text-[10px] font-medium leading-3.5 text-gray-600 dark:text-gray-400 sm:text-sm sm:leading-relaxed md:text-base">
                {skill.skills.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
