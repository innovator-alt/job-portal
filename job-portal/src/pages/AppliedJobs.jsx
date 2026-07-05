import MainLayout from "../layouts/MainLayout";

function AppliedJobs() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">
          Applied Jobs
        </h1>

        <p className="mt-4 text-slate-500">
          Applied jobs will appear here.
        </p>
      </div>
    </MainLayout>
  );
}

export default AppliedJobs;