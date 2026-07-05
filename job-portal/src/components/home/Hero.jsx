import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:flex-row lg:justify-between lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-blue-600 font-semibold uppercase tracking-wide">
            Welcome to Job Portal
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Find Your
            <span className="text-blue-600"> Dream Job </span>
            Faster Than Ever
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Search thousands of verified jobs from top companies,
            apply with one click, and build your career with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/jobs"
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Find Jobs
            </Link>

            <Link
              to="/signup"
              className="rounded-xl border border-blue-600 px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Get Started
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 lg:mt-0"
        >
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
            alt="Job Search"
            className="rounded-3xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;