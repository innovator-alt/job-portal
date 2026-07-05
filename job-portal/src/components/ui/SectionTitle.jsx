function SectionTitle({
  title,
  subtitle,
  center = false,
}) {
  return (
    <div className={center ? "text-center mb-12" : "mb-12"}>
      <h2 className="text-4xl font-bold text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-slate-500 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;