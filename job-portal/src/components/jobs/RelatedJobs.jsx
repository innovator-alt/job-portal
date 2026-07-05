import JobCard from "../cards/JobCard";

function RelatedJobs({ jobs }) {
  if (jobs.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-3xl font-bold">
        Related Jobs
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            {...job}
          />
        ))}
      </div>
    </section>
  );
}

export default RelatedJobs;