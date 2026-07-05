import { motion } from "framer-motion";
import CompanyCard from "../cards/CompanyCard";
import SectionTitle from "../ui/SectionTitle";
import { featuredCompanies } from "../../constants/homeData";

function FeaturedCompanies() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          center
          title="Top Hiring Companies"
          subtitle="Trusted by leading organizations around the world."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
            >
              <CompanyCard
                company={company.name}
                logo={company.logo}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCompanies;