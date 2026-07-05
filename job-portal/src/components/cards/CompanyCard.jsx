function CompanyCard({
  company,
  logo,
}) {
  return (
    <div className="rounded-xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={logo}
        alt={company}
        className="mx-auto mb-4 h-14 w-14 object-contain"
      />

      <h3 className="text-lg font-semibold">
        {company}
      </h3>
    </div>
  );
}

export default CompanyCard;