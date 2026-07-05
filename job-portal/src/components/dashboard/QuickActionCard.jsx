import { Link } from "react-router-dom";

function QuickActionCard({
  title,
  description,
  link,
}) {
  return (
    <Link
      to={link}
      className="rounded-xl border bg-white p-6 transition hover:border-blue-600 hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-slate-500">
        {description}
      </p>
    </Link>
  );
}

export default QuickActionCard;