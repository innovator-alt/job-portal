import SectionTitle from "../ui/SectionTitle";
import { testimonials } from "../../constants/homeData";

function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          center
          title="Success Stories"
          subtitle="Hear from professionals who found their jobs"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <p className="italic text-slate-600">
                "{item.message}"
              </p>

              <h3 className="mt-6 text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-blue-600">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;