"use client";
import { useState } from "react";
import { ChevronDown, Code2 } from "lucide-react";

type SkillGroup = {
  id: number;
  category: string;
  skills: string[];
};

const skills: SkillGroup[] = [
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

const PREVIEW_COUNT = 2;

const SkillCard = ({
  skill,
  className = "",
}: {
  skill: SkillGroup;
  className?: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = skill.skills.length > PREVIEW_COUNT;
  const preview = `${skill.skills.slice(0, PREVIEW_COUNT).join(", ")}${
    hasMore ? "…" : ""
  }`;
  const fullList = skill.skills.join(", ");

  return (
    <div
      className={`flex min-w-0 flex-row items-start gap-2 rounded-lg border border-gray-100 border-l-4 border-l-primary bg-gray-50 p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-700/50 dark:bg-gray-800/50 sm:gap-5 sm:rounded-2xl sm:p-4 lg:p-6 ${className}`}
    >
      {/* ID Badge */}
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary sm:h-12 sm:w-12 sm:text-xl">
        {skill.id}
      </div>

      {/* Content */}
      <div className="flex min-w-0 w-full flex-col">
        <h2 className="mb-1 text-xs font-bold leading-tight text-gray-800 dark:text-gray-100 sm:mb-2 sm:text-lg md:text-xl">
          {skill.category}
        </h2>

        {/* Mobile: short preview, full list when expanded */}
        <p className="break-words text-[11px] font-medium leading-4 text-gray-600 dark:text-gray-400 sm:hidden">
          {expanded ? fullList : preview}
        </p>

        {/* sm and up: always the complete list */}
        <p className="hidden break-words text-sm font-medium leading-relaxed text-gray-600 dark:text-gray-400 sm:block md:text-base">
          {fullList}
        </p>

        {/* Mobile-only toggle */}
        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            className="mt-1 flex w-fit items-center gap-1 text-xs font-semibold text-primary sm:hidden"
          >
            {expanded ? "Show less" : "Read more"}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>
    </div>
  );
};

const TechnicalSkills = () => {
  return (
    <div className="flex w-full flex-col justify-center px-2 py-1 sm:px-4 sm:py-6">
      {/* Section Header */}
      <div className="mb-2 flex items-center justify-center gap-2 sm:mb-10 sm:gap-3">
        <Code2 className="h-7 w-7 shrink-0 text-primary sm:h-10 sm:w-10 md:h-12 md:w-12" />
        <h1 className="text-xl font-bold sm:text-3xl md:text-4xl">
          My Technical Skills
        </h1>
      </div>

      <div className="grid w-full grid-cols-1 gap-2 sm:gap-4 lg:grid-cols-2 lg:gap-6">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            className={
              index === skills.length - 1 && skills.length % 2 !== 0
                ? "lg:col-span-2 lg:mx-auto lg:w-2/3"
                : ""
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;