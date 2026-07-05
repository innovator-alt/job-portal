import { Link } from "react-router-dom";
import Badge from "../ui/Badge";

function JobCard({
  id,
  company,
  title,
  location,
  salary,
  type,
}) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h4 className="font-semibold text-blue-600">
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

      <Link
        to={`/jobs/${id}`}
        className="mt-6 block rounded-lg bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}

export default JobCard;