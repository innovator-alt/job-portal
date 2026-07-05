function Newsletter() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold">
          Never Miss New Opportunities
        </h2>

        <p className="mt-4 text-slate-300">
          Subscribe to receive the latest job openings directly in your inbox.
        </p>

        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg p-4 text-black outline-none"
          />

          <button className="rounded-lg bg-green-500 px-8 py-4 font-semibold hover:bg-green-600">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;