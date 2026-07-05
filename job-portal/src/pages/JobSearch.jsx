import MainLayout from "../layouts/MainLayout";
import SectionTitle from "../components/ui/SectionTitle";
import JobList from "../components/jobs/JobList";
import JobSearchBar from "../components/jobs/JobSearchBar";
import JobFilters from "../components/jobs/JobFilters";
import JobSort from "../components/jobs/JobSort";
import useJobs from "../hooks/useJobs";

function JobSearch() {
  const {
    loading,
    jobs,

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
  } = useJobs();

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-16">

        <SectionTitle
          title="Find Your Dream Job"
          subtitle="Browse thousands of verified jobs."
        />

        <JobSearchBar
          search={search}
          setSearch={setSearch}
        />

        <JobFilters
          location={location}
          setLocation={setLocation}
          category={category}
          setCategory={setCategory}
          type={type}
          setType={setType}
        />

        <JobSort
          sort={sort}
          setSort={setSort}
        />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <JobList jobs={jobs} />
        )}

      </div>
    </MainLayout>
  );
}

export default JobSearch;