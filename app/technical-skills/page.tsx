const TechnicalSkills = () => {
  const skills = [
    {
      id: 1,
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      category: "Version Control",
      skills: ["Git", "GitHub", "GitLab"],
    },
    {
      category: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud"],
    },
    {
      category: "Containerization & Orchestration",
      skills: ["Docker", "Kubernetes"],
    },
  ];
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">My Technical Skills</h1>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 flex flex-row gap-4 rounded-xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow duration-200 mb-6"
          >
            <span className=" text-white font-bold text-2xl p-2 rounded-lg">
              {skill.id}
            </span>
            <div className="flex flex-col">
              <h2 className="text-lg md:text-2xl font-semibold mb-2 text-primary">
                {skill.category}
              </h2>
              <p className="text-base text-secondary">
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
