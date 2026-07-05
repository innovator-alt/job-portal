function CategoryCard({
  title,
  jobs,
}) {
  return (
    <div className="cursor-pointer rounded-xl border bg-white p-6 transition hover:border-blue-600 hover:shadow-lg">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-slate-500">
        {jobs} Jobs
      </p>
    </div>
  );
}

export default CategoryCard;