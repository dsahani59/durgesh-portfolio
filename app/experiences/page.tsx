import Image from "next/image";

const ExperiencePage = () => {
  const experiences = [
    {
      image: "/assets/image/techaroha.png",
      title: "Software Developer at Techaroha Solutions Private Limited",
      duration: "Jan 2023 - Present",
      description:
        "Responsible for driving the development of key digital initiatives, including managing the Carbon Plant project and developing/maintaining OrbitQR, a dynamic public-facing website.",
    },
    {
      title: "Intern at Techaroha Solutions Private Limited",
      duration: "Jul 2022 - Dec 2022",
      description:
        "Gained hands-on experience in software development, contributing to various projects and learning best practices in coding and project management.",
    },
  ];
  return (
    <div className="flex flex-col items-center min-h-screen py-6">
      <h1 className="text-4xl font-bold mb-8">My Experiences</h1>
      <div className="w-full max-w-4xl">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 flex flex-row gap-4 rounded-xl shadow-md mb-6"
          >
            {exp.image ? (
              <Image
                src={exp.image || "/assets/image/experience-icon.png"}
                alt="Experience Icon"
                width={120}
                height={120}
                className="mb-4"
                unoptimized
              />
            ) : null}

            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold mb-2 text-primary">
                {exp.title}
              </h2>
              <p className="text-primary mb-2">{exp.duration}</p>
              <p className="text-secondary">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExperiencePage;
