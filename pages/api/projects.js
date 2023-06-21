import data from '../../public/data.json'

export function getAllProjects() {
  return Promise.resolve(data);
}
