export default function TestimonialsPage() {
  const items = [
    {
      name: "Acme Co.",
      quote:
        "Brooke transformed our reporting and cash forecasting. We now make decisions with confidence.",
    },
    {
      name: "SeedStart",
      quote:
        "Month-end is now smooth and reliable. The team is responsive and thorough.",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Testimonials</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((t) => (
          <blockquote key={t.name} className="border rounded-lg p-6 bg-white">
            <p className="text-slate-700 italic">“{t.quote}”</p>
            <div className="mt-3 text-sm font-medium text-slate-600">
              — {t.name}
            </div>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
