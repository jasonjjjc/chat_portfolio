import data from '../data.json';

export function getAllProjects() {
  return Promise.resolve(data);
}
