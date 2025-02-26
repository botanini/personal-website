import React from "react";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with React and Node.js.",
    image: "/images/projects/penguin.jpg", // Replace with actual image path
    repo: "https://github.com/your-username/project-one"
  },
  {
    title: "Project Two",
    description: "An AI-powered chatbot using Python and OpenAI API.",
    image: "/images/project2.png",
    repo: "https://github.com/your-username/project-two"
  },
  {
    title: "Project Three",
    description: "A mobile app developed with React Native and Firebase.",
    image: "/images/project3.png",
    repo: "https://github.com/your-username/project-three"
  }
];

const ProjectsPage = () => {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-[#070042] my-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover group-hover:opacity-80 transition"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#070042]">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
