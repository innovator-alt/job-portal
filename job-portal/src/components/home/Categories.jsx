import { motion } from "framer-motion";
import CategoryCard from "../cards/CategoryCard";
import SectionTitle from "../ui/SectionTitle";
import { categories } from "../../constants/homeData";

function Categories() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          center
          title="Browse by Category"
          subtitle="Find opportunities across different industries."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
            >
              <CategoryCard
                title={category.title}
                jobs={category.jobs}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;