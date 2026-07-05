import { motion } from "framer-motion";

function DashboardStatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-xl bg-white p-6 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div
          className={`rounded-full p-4 ${color}`}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  );
}

export default DashboardStatCard;