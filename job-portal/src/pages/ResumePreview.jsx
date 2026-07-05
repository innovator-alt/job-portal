import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import useAuth from "../hooks/useAuth";

import {
  getUserProfile,
} from "../services/userService";

function ResumePreview() {
  const { user } = useAuth();

  const [resume, setResume] = useState("");

  useEffect(() => {
    async function loadResume() {
      const profile = await getUserProfile(
        user.uid
      );

      if (profile?.resumeUrl) {
        setResume(profile.resumeUrl);
      }
    }

    if (user) {
      loadResume();
    }
  }, [user]);

  return (
    <MainLayout>

      <div className="mx-auto max-w-6xl px-6 py-12">

        <h1 className="mb-8 text-4xl font-bold">
          Resume Preview
        </h1>

        {!resume ? (

          <div className="rounded-lg border p-12 text-center">
            Resume not uploaded.
          </div>

        ) : (

          <iframe
            src={resume}
            title="Resume"
            className="h-[900px] w-full rounded-xl border"
          />

        )}

      </div>

    </MainLayout>
  );
}

export default ResumePreview;