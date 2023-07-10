import { useState } from 'react';
import Head from 'next/head';
import data from '../public/data.json';
import ContactModal from '../components/ContactModal';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setContactOpen(false);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const toggleContact = () => {
    setContactOpen(!contactOpen);
  };

  const handleFilterClick = (tech) => {
    setSelectedFilter(tech);
    setSelectedProject(null);
  };

  const filteredProjects = selectedFilter
    ? data.filter((project) => project.tech.includes(selectedFilter))
    : data;

  const uniqueTechs = Array.from(
    data.reduce((techSet, project) => {
      project.tech.forEach((tech) => techSet.add(tech));
      return techSet;
    }, new Set())
  );

  const projectNavbarLinks = selectedProject
    ? Object.entries(selectedProject)
      .filter(([key]) => key !== 'id' && key !== 'title' && key !== 'tech' && key !== 'href')
      .map(([key, value]) => ({
        text: key.charAt(0).toUpperCase() + key.slice(1),
        href: `#${key}`,
      }))
    : [];

  return (
    <div className="h-screen w-screen flex flex-col">
      <Head>
        <title>Jason Chalangary - Portfolio</title>
      </Head>

      {/* Header */}
      <header className="bg-gray-800 py-4 px-8 text-white">
        <h1 className="text-3xl font-bold text-center">Jason Chalangary</h1>
      </header>

      {/* Main */}
      <main className="flex-1 bg-gray-100 pt-6 pl-6 pr-6 pb-2 overflow-y-auto">
        {!selectedProject && (
          <div className="flex flex-col h-full">
            {/* List of Projects */}
            <div className="flex-1">
              <ul className="space-y-4">
                {filteredProjects.map((project) => (
                  <li
                    key={project.id}
                    className="border-b border-gray-300 pb-4 cursor-pointer"
                    onClick={() => handleProjectClick(project)}
                  >
                    <h2 className="text-xl font-bold">{project.title}</h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Selected Project */}
        {selectedProject && (
          <div>
            {/* Selected Project */}
            <div className="border-b border-gray-300 pb-4">
              <h2 className="text-xl font-bold mb-6">{selectedProject.title}</h2>
              {Object.entries(selectedProject).map(([key, value]) => (
                  (key !== 'id' && key !== 'title' && key !== 'href') ? (
                    <div key={key} id={key}>
                      <h3 className="font-bold mb-2">{key}</h3>
                      <p className="mb-2">{value}</p>
                    </div>
                  ) : null
              ))}

            </div>


          </div>
        )}
      </main>
      {/* Modal */}
      {
        contactOpen && (
          <ContactModal numProjects={data.length} toggleContact={toggleContact} />
        )
      }

      {/* Footer */}
      <footer className="flex flex-col bg-gray-800 py-4 px-4 text-white mt-auto">
        
        {!selectedProject && (

          <div className="flex justify-center mb-4">
            {/* Filter Bar */}
            <div className="flex filter-bar">
              {uniqueTechs.map((tech) => (
                <button
                  key={tech}
                  className={`bg-blue-500 text-white py-1 px-2 mr-2 rounded ${selectedFilter === tech ? 'bg-blue-600' : ''
                    }`}
                  onClick={() => handleFilterClick(tech)}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

        )}

        {selectedProject && (

          <div className="flex justify-center">
            {/* Project Navbar */}
            {projectNavbarLinks.length > 0 && (
              <nav className="mb-4">
                <ul className="flex gap-4 w-full overflow-x-scroll">
                  {projectNavbarLinks.map((link) => (
                    <li key={link.href} className="bg-blue-500 rounded-sm py-1 px-2">
                      <a href={link.href} className="text-white">{link.text}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

        )}

        <div className="flex justify-center">

          <button
            className="bg-blue-500 text-white py-3 px-5 rounded mr-4"
            onClick={toggleContact}
          >
            {contactOpen ? 'Close' : 'Connect'}
          </button>

          {selectedProject && (
            <button
              className="bg-blue-500 text-white py-3 px-5 rounded"
              onClick={closeProject}
            >
              Close Project
            </button>
          )
          }

          {selectedFilter && (
            <button
              className="bg-blue-500 text-white py-3 px-5 rounded"
              onClick={() => setSelectedFilter(null)}
            >
              Clear Filter
            </button>
          )}
        </div>

      </footer>
    </div >
  );
}
