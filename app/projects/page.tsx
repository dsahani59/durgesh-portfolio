import { ExternalLinkIcon } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1.",
      link: "#",
    },
    {
      title: "Project 2",
      description: "Description of Project 2.",
      link: "#",
    },
    {
      title: "Project 3",
      description: "Description of Project 3.",
      link: "#",
    },
  ];
  return (
    <div className="flex flex-col items-center pt-4">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      {/* Added w-full and max-w-3xl so the grid doesn't stretch infinitely */}
      <div className="grid grid-cols-1 gap-8 w-full max-w-4xl px-4">
        {projects.map((project, index) => (
          <div
            className="bg-gray-800 p-6 rounded-xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow duration-200 flex flex-col"
            key={index}
          >
            <div className="flex justify-between mt-4">
              <h2 className="text-lg md:text-2xl font-semibold mb-2 text-primary">
                {project.title}
              </h2>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon className="text-primary transition-transform duration-200 hover:scale-125 hover:text-secondary cursor-pointer" />
              </a>
            </div>
            <p className="text-base text-secondary grow">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
