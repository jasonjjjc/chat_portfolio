import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAllProjects } from '../api/projects';

export default function ProjectPage() {
  const router = useRouter();
  const { projectId } = router.query;
  const [project, setProject] = useState(null);

  useEffect(() => {
    async function fetchProjectData() {
      const projects = await getAllProjects();
      const projectData = projects.find((p) => p.href === projectId);

      if (!projectData) {
        // Handle the case where the project is not found
        // For example, display a 404 page or redirect to the home page.
        router.push('/'); // Redirect to the home page
        return;
      }

      setProject(projectData);
    }

    fetchProjectData();
  }, [projectId, router]);

  if (!project) {
    return null; // Handle the loading state
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-4">
        <strong>Planning:</strong> {project.planning}
      </p>
      <p className="mb-4">
        <strong>Design:</strong> {project.design}
      </p>
      <p className="mb-4">
        <strong>Development:</strong> {project.development}
      </p>
      <p className="mb-4">
        <strong>Technologies:</strong> {project.tech.join(', ')}
      </p>
    </div>
  );
}
