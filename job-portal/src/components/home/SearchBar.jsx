import { Search, MapPin } from "lucide-react";

function SearchBar() {
  return (
    <div className="mx-auto -mt-12 max-w-5xl rounded-2xl bg-white p-6 shadow-xl">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="flex items-center rounded-lg border px-4">
          <Search className="text-slate-400" size={20} />

          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full p-3 outline-none"
          />
        </div>

        <div className="flex items-center rounded-lg border px-4">
          <MapPin className="text-slate-400" size={20} />

          <input
            type="text"
            placeholder="Location"
            className="w-full p-3 outline-none"
          />
        </div>

        <button className="rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          Search Jobs
        </button>
      </div>
    </div>
  );
}

export default SearchBar;