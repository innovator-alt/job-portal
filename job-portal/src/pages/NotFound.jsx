import MainLayout from "../layouts/MainLayout";

function NotFound() {
  return (
    <MainLayout>
      <div className="flex h-[70vh] items-center justify-center">
        <h1 className="text-5xl font-bold">
          404 - Page Not Found
        </h1>
      </div>
    </MainLayout>
  );
}

export default NotFound;