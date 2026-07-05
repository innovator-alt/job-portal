import {
  Briefcase,
  Bookmark,
  User,
  FileText,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";
import DashboardStatCard from "../components/dashboard/DashboardStatCard";
import QuickActionCard from "../components/dashboard/QuickActionCard";
import useAuth from "../hooks/useAuth";

function Dashboard() {
  const { user } = useAuth();

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Welcome,
          </h1>

          <p className="mt-2 text-slate-500">
            {user?.email}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <DashboardStatCard
            title="Applied Jobs"
            value="12"
            color="bg-blue-100"
            icon={<Briefcase />}
          />

          <DashboardStatCard
            title="Saved Jobs"
            value="5"
            color="bg-green-100"
            icon={<Bookmark />}
          />

          <DashboardStatCard
            title="Profile"
            value="80%"
            color="bg-yellow-100"
            icon={<User />}
          />

          <DashboardStatCard
            title="Resume"
            value="Uploaded"
            color="bg-purple-100"
            icon={<FileText />}
          />

        </div>

        <h2 className="mt-14 mb-6 text-3xl font-bold">
          Quick Actions
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <QuickActionCard
            title="Search Jobs"
            description="Browse latest openings."
            link="/jobs"
          />

          <QuickActionCard
            title="Applied Jobs"
            description="Track your applications."
            link="/applied-jobs"
          />

          <QuickActionCard
            title="Saved Jobs"
            description="View saved opportunities."
            link="/saved-jobs"
          />

          <QuickActionCard
            title="Profile"
            description="Update your profile."
            link="/profile"
          />

        </div>

      </div>
    </MainLayout>
  );
}

export default Dashboard;