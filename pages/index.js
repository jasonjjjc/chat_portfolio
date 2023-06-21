import React, { useState } from 'react';
import ContactModal from '../components/ContactModal';
import projectData from '../public/data.json';
import Link from 'next/link';

export default function Home() {
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleLanguageFilter = (technology) => {
    const lowercaseTechnology = technology.toLowerCase();
    setSelectedTechnology(lowercaseTechnology);
  };
  

  const handleContactClick = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  const filteredProjects = selectedTechnology
  ? projectData.filter((project) =>
      project.tech.some((technology) => technology.toLowerCase() === selectedTechnology)
    )
  : projectData;


    function getUniqueTechnologies(data) {
      const technologies = data.reduce((acc, project) => [...acc, ...project.tech], []);
      const uniqueTechnologies = [...new Set(technologies.map((technology) => technology.toLowerCase()))];
      return uniqueTechnologies;
    }
    

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-200 py-4 px-8">
        <h1 className="text-2xl font-bold text-center">Jason Chalangary</h1>
      </header>

      <main className="flex flex-col flex-1 overflow-y-auto text-xl items-center">
        <div className="flex flex-col max-w-2xl p-5 w-full">
          {filteredProjects.map((project) => (
            <Link href={`/projects/${project.href}`} key={project.id}>
            <button className="block w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded shadow mb-4">
              {project.title}
            </button>
          </Link>
          ))}
        </div>
      </main>

      <footer className="bg-gray-200 py-4 px-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center space-x-4 overflow-x-auto">
            {getUniqueTechnologies(projectData).map((technology) => (
              <button
                key={technology}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => handleLanguageFilter(technology)}
              >
                {technology}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handleContactClick}
            >
              Contact
            </button>
          </div>
        </div>
      </footer>

      {isContactModalOpen && <ContactModal onClose={handleContactClick} numProjects={projectData.length} />}
    </div>
  );
}
