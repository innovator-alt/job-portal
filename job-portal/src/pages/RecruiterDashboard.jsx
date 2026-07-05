import { useEffect, useState } from "react";
import { Briefcase, Users } from "lucide-react";

import MainLayout from "../layouts/MainLayout";
import DashboardStatCard from "../components/dashboard/DashboardStatCard";

import useAuth from "../hooks/useAuth";

import {
  getRecruiterJobs,
} from "../services/recruiterJobService";

function RecruiterDashboard() {
  const { user } = useAuth();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function load() {
      if (!user) return;

      const data = await getRecruiterJobs(user.uid);

      setJobs(data);
    }

    load();
  }, [user]);

  return (
    <MainLayout>

      <div className="mx-auto max-w-7xl px-6 py-12">

        <h1 className="mb-10 text-4xl font-bold">
          Recruiter Dashboard
        </h1>

        <div className="grid gap-6 md:grid-cols-2">

          <DashboardStatCard
            title="Jobs Posted"
            value={jobs.length}
            color="bg-blue-100"
            icon={<Briefcase />}
          />

          <DashboardStatCard
            title="Applicants"
            value="0"
            color="bg-green-100"
            icon={<Users />}
          />

        </div>

      </div>

    </MainLayout>
  );
}

export default RecruiterDashboard;