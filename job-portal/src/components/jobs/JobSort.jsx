function JobSort({
  sort,
  setSort,
}) {
  return (
    <div className="mb-8 flex justify-end">

      <select
        className="rounded-lg border p-3"
        value={sort}
        onChange={(e) =>
          setSort(e.target.value)
        }
      >
        <option value="latest">
          Latest
        </option>

        <option value="salary">
          Highest Salary
        </option>
      </select>

    </div>
  );
}

export default JobSort;