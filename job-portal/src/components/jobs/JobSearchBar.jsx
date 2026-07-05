import { Search } from "lucide-react";

function JobSearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="mb-8 flex items-center rounded-xl border bg-white px-5 shadow-sm">
      <Search size={20} className="text-slate-400" />

      <input
        className="w-full p-4 outline-none"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default JobSearchBar;