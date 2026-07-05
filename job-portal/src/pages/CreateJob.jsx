import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";

import useAuth from "../hooks/useAuth";

import {
  createJob,
} from "../services/recruiterJobService";

function CreateJob() {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  async function onSubmit(data) {
    try {
      await createJob({
        ...data,
        recruiterId: user.uid,
      });

      toast.success("Job created.");

      reset();
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <MainLayout>

      <div className="mx-auto max-w-5xl px-6 py-12">

        <div className="rounded-xl bg-white p-8 shadow">

          <h1 className="mb-8 text-4xl font-bold">
            Create Job
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >

            <input
              {...register("title", { required: true })}
              placeholder="Job Title"
              className="w-full rounded-lg border p-3"
            />

            <input
              {...register("company", { required: true })}
              placeholder="Company"
              className="w-full rounded-lg border p-3"
            />

            <input
              {...register("location")}
              placeholder="Location"
              className="w-full rounded-lg border p-3"
            />

            <input
              {...register("salary")}
              placeholder="Salary"
              className="w-full rounded-lg border p-3"
            />

            <select
              {...register("type")}
              className="w-full rounded-lg border p-3"
            >
              <option>Full Time</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>

            <textarea
              rows={8}
              {...register("description")}
              placeholder="Job Description"
              className="w-full rounded-lg border p-3"
            />

            <button
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white"
            >
              Create Job
            </button>

          </form>

        </div>

      </div>

    </MainLayout>
  );
}

export default CreateJob;