import projectsData from '../../data.json';

export default function handler(req, res) {
  const { projectId } = req.query;

  const project = projectsData.find((project) => project.id.toString() === projectId);

  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }

  return res.status(200).json(project);
}
