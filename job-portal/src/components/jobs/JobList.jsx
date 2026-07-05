import JobCard from "../cards/JobCard";

function JobList({ jobs }) {
  if (jobs.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-10 text-center">
        No jobs found.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          company={job.company}
          title={job.title}
          location={job.location}
          salary={job.salary}
          type={job.type}
        />
      ))}
    </div>
  );
}

export default JobList;