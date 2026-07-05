import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import Badge from "../components/ui/Badge";
import RelatedJobs from "../components/jobs/RelatedJobs";

import {
  getJobById,
  getRelatedJobs,
} from "../services/jobService";

import {
  applyForJob,
} from "../services/applicationService";

import {
  saveJob,
  unsaveJob,
  isJobSaved,
} from "../services/savedJobService";

import useAuth from "../hooks/useAuth";

function JobDetails() {
  const { id } = useParams();
  const { user } = useAuth();

  const [job, setJob] = useState(null);
  const [relatedJobs, setRelatedJobs] = useState([]);

  const [applying, setApplying] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await getJobById(id);

      setJob(data);

      if (data) {
        const related = await getRelatedJobs(
          data.category,
          data.id
        );

        setRelatedJobs(related);

        if (user) {
          const status = await isJobSaved(
            data.id,
            user.uid
          );

          setSaved(status);
        }
      }
    }

    load();
  }, [id, user]);

  if (!job) {
    return (
      <MainLayout>
        <div className="py-20 text-center">
          Job not found.
        </div>
      </MainLayout>
    );
  }

  async function handleApply() {
    if (!user) {
      toast.error("Please login first.");
      return;
    }

    try {
      setApplying(true);

      await applyForJob({
        jobId: job.id,
        userId: user.uid,
        company: job.company,
        title: job.title,
      });

      toast.success("Application submitted.");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setApplying(false);
    }
  }

  async function handleSave() {
    if (!user) {
      toast.error("Please login first.");
      return;
    }

    try {
      if (saved) {
        await unsaveJob(job.id, user.uid);
        setSaved(false);
        toast.success("Removed from saved jobs.");
      } else {
        await saveJob({
          jobId: job.id,
          userId: user.uid,
          company: job.company,
          title: job.title,
        });

        setSaved(true);

        toast.success("Job saved.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="rounded-xl bg-white p-8 shadow">

          <h1 className="text-4xl font-bold">
            {job.title}
          </h1>

          <p className="mt-2 text-slate-500">
            {job.company}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>{job.location}</Badge>
            <Badge>{job.type}</Badge>
            <Badge>{job.experience}</Badge>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold">
              Description
            </h2>

            <p className="mt-4">
              {job.description}
            </p>
          </div>

          <div className="mt-10 flex gap-4">

            <button
              onClick={handleApply}
              disabled={applying}
              className="rounded-lg bg-blue-600 px-8 py-3 text-white"
            >
              {applying
                ? "Applying..."
                : "Apply Now"}
            </button>

            <button
              onClick={handleSave}
              className="rounded-lg border px-8 py-3"
            >
              {saved
                ? "Saved"
                : "Save Job"}
            </button>

          </div>

        </div>

        <RelatedJobs jobs={relatedJobs} />

      </div>
    </MainLayout>
  );
}

export default JobDetails;