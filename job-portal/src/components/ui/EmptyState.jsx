function EmptyState({
  title,
  description,
}) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
      <h3 className="text-2xl font-semibold text-slate-800">
        {title}
      </h3>

      <p className="mt-3 text-slate-500">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;