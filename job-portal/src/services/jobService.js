import { jobs } from "../constants/jobData";

export async function getAllJobs() {
  return jobs;
}

export async function getJobById(id) {
  return jobs.find((job) => job.id === id);
}

export async function getRelatedJobs(category, currentId) {
  return jobs.filter(
    (job) =>
      job.category === category &&
      job.id !== currentId
  );
}