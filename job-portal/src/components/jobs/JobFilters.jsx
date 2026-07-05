function JobFilters({
  location,
  setLocation,
  category,
  setCategory,
  type,
  setType,
}) {
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-3">
      <input
        type="text"
        placeholder="Location"
        className="rounded-lg border p-3"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <select
        className="rounded-lg border p-3"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Cloud">Cloud</option>
      </select>

      <select
        className="rounded-lg border p-3"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">All Types</option>
        <option value="Full Time">Full Time</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
      </select>
    </div>
  );
}

export default JobFilters;