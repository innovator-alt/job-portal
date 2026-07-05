import { jobs } from "../constants/jobData";

export const getAllJobs = async () => {
  return jobs;
};

export const getJobById = async (id) => {
  return jobs.find((job) => job.id === id);
};