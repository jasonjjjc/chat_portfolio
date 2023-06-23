import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch project');
        }
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>Planning: {project.planning}</p>
      <p>Design: {project.design}</p>
      <p>Development: {project.development}</p>
      <p>Tech: {project.tech.join(', ')}</p>
    </div>
  );
};

export default ProjectDetails;
