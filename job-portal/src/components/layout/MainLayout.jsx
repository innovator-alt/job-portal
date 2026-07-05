import Navbar from "../components/layout/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        {children}
      </main>

      <footer className="bg-slate-900 py-10 text-center text-white">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-2xl font-bold">
            JobPortal
          </h2>

          <p className="mt-4 text-slate-300">
            Find your dream job with confidence.
          </p>

          <p className="mt-6 text-sm text-slate-400">
            © 2026 JobPortal. All Rights Reserved.
          </p>

        </div>
      </footer>
    </>
  );
}

export default MainLayout;