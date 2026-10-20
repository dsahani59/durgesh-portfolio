"use client";
import { ExternalLinkIcon, FolderKanban } from "lucide-react"; // Added FolderKanban for consistency

const Projects = () => {
  const projects = [
    {
      title: "Echo-Chat",
      description: "Description of Project 1.",
      link: "https://github.com/dsahani59/Echo-Chat",
    },
    {
      title: "Project 2",
      description: "Description of Project 2.",
      link: "#",
    },
  ];

  return (
    // FIX 1: Replaced Fragment with a restricted-width container
    <div className="w-full px-4 py-6 flex flex-col justify-center">
      
      {/* Section Header */}
      <div className="mb-10 flex items-center justify-center gap-3">
        {/* FIX 2: Added matching icon for section header */}
        <FolderKanban className="h-10 w-10 md:h-12 md:w-12 text-primary" />
        <h1 className="text-3xl md:text-4xl font-bold">My Projects</h1>
      </div>

      {/* FIX 3: Changed to lg:grid-cols-2 so projects sit side-by-side on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 border-l-4 border-l-primary hover:shadow-md hover:-translate-y-1 transition-[transform,box-shadow] duration-300 flex flex-col motion-reduce:transform-none"
          >
            {/* FIX 5: Removed weird mt-4, aligned items properly */}
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
                {project.title}
              </h2>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1 -mt-1 -mr-1 rounded-md hover:bg-primary/10 transition-colors group"
              >
                <ExternalLinkIcon className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
              </a>
            </div>
            
            {/* Standardized typography for descriptions */}
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed grow">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;