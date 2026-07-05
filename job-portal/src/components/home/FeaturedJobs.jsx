import { motion } from "framer-motion";
import JobCard from "../cards/JobCard";
import SectionTitle from "../ui/SectionTitle";
import { featuredJobs } from "../../constants/homeData";

function FeaturedJobs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          center
          title="Featured Jobs"
          subtitle="Latest opportunities from top companies"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <JobCard {...job} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedJobs;