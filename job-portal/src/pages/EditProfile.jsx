import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import useAuth from "../hooks/useAuth";

import {
  getUserProfile,
  createUserProfile,
  updateUserProfile,
} from "../services/userService";

function EditProfile() {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    async function loadProfile() {
      if (!user) return;

      const profile = await getUserProfile(user.uid);

      if (profile) {
        reset(profile);
      }
    }

    loadProfile();
  }, [user, reset]);

  async function onSubmit(data) {
    try {
      const existing = await getUserProfile(user.uid);

      if (existing) {
        await updateUserProfile(user.uid, data);
      } else {
        await createUserProfile(user.uid, {
          ...data,
          email: user.email,
        });
      }

      toast.success("Profile updated successfully.");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-4xl px-6 py-12">

        <div className="rounded-xl bg-white p-8 shadow">

          <h1 className="mb-8 text-4xl font-bold">
            Edit Profile
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >

            <div>

              <label className="mb-2 block font-medium">
                Full Name
              </label>

              <input
                {...register("name")}
                className="w-full rounded-lg border p-3"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Phone
              </label>

              <input
                {...register("phone")}
                className="w-full rounded-lg border p-3"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Location
              </label>

              <input
                {...register("location")}
                className="w-full rounded-lg border p-3"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Skills
              </label>

              <textarea
                rows={4}
                {...register("skills")}
                className="w-full rounded-lg border p-3"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Experience
              </label>

              <textarea
                rows={4}
                {...register("experience")}
                className="w-full rounded-lg border p-3"
              />

            </div>

            <button
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Save Profile
            </button>

          </form>

        </div>

      </div>
    </MainLayout>
  );
}

export default EditProfile;