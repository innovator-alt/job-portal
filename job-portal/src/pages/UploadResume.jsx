import { useState } from "react";
import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import useAuth from "../hooks/useAuth";

import {
  uploadResume,
} from "../services/userService";

function UploadResume() {
  const { user } = useAuth();

  const [file, setFile] = useState(null);

  const [progress, setProgress] = useState(0);

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const selected = e.target.files[0];

    if (!selected) return;

    if (selected.type !== "application/pdf") {
      toast.error("Only PDF files are allowed.");

      return;
    }

    setFile(selected);
  }

  async function handleUpload() {
    if (!file) {
      toast.error("Please select a resume.");

      return;
    }

    try {
      setLoading(true);

      await uploadResume(
        user.uid,
        file,
        setProgress
      );

      toast.success("Resume uploaded successfully.");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl px-6 py-12">

        <div className="rounded-xl bg-white p-8 shadow">

          <h1 className="mb-8 text-4xl font-bold">
            Upload Resume
          </h1>

          <input
            type="file"
            accept=".pdf"
            onChange={handleChange}
          />

          {progress > 0 && (

            <div className="mt-8">

              <div className="h-4 overflow-hidden rounded-full bg-slate-200">

                <div
                  style={{
                    width: `${progress}%`,
                  }}
                  className="h-full bg-blue-600"
                />

              </div>

              <p className="mt-2">
                {progress}%
              </p>

            </div>

          )}

          <button
            onClick={handleUpload}
            disabled={loading}
            className="mt-8 rounded-lg bg-blue-600 px-8 py-3 text-white"
          >
            {loading
              ? "Uploading..."
              : "Upload Resume"}
          </button>

        </div>

      </div>
    </MainLayout>
  );
}

export default UploadResume;