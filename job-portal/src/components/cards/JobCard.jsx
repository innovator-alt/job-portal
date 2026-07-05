import Badge from "../ui/Badge";

function JobCard({
  company,
  title,
  location,
  salary,
  type,
}) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h4 className="text-blue-600 font-semibold">
        {company}
      </h4>

      <h3 className="mt-2 text-xl font-bold">
        {title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge>{location}</Badge>
        <Badge>₹{(salary / 100000).toFixed(0)} LPA</Badge>
        <Badge>{type}</Badge>
      </div>

      <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
        View Details
      </button>
    </div>
  );
}

export default JobCard;