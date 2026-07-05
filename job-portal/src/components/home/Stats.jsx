import { stats } from "../../constants/homeData";

function Stats() {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.id}>
            <h2 className="text-5xl font-bold">{item.value}</h2>
            <p className="mt-3">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;