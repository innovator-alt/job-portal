import MainLayout from "../layouts/MainLayout";
import useAuth from "../hooks/useAuth";

function Dashboard() {
  const { user } = useAuth();

  return (
    <MainLayout>
      <div className="mx-auto max-w-5xl p-10">
        <h1 className="text-4xl font-bold">
          User Dashboard
        </h1>

        <p className="mt-4 text-lg">
          Welcome,
        </p>

        <p className="font-semibold text-blue-600">
          {user?.email}
        </p>
      </div>
    </MainLayout>
  );
}

export default Dashboard;