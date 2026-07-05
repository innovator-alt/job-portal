import { useEffect, useMemo, useState } from "react";
import { getAllJobs } from "../services/jobService";

function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    async function loadJobs() {
      const data = await getAllJobs();
      setJobs(data);
      setLoading(false);
    }

    loadJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    let filtered = [...jobs];

    if (search) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (location) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter(
        (job) => job.category === category
      );
    }

    if (type) {
      filtered = filtered.filter(
        (job) => job.type === type
      );
    }

    if (sort === "salary") {
      filtered.sort((a, b) => b.salary - a.salary);
    }

    return filtered;
  }, [jobs, search, location, category, type, sort]);

  return {
    loading,
    jobs: filteredJobs,

    search,
    setSearch,

    location,
    setLocation,

    category,
    setCategory,

    type,
    setType,

    sort,
    setSort,
  };
}

export default useJobs;