export default function ResourcesPage() {
  const indicators = [
    {
      key: "gross_margin",
      label: "Gross Margin",
      desc: "Measures profitability after cost of goods sold. Higher is better.",
    },
    {
      key: "runway",
      label: "Cash Runway",
      desc: "Months you can operate at current burn.",
    },
    {
      key: "ar_days",
      label: "AR Days",
      desc: "Average time to collect receivables. Lower improves cash flow.",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Educational Resources</h1>
      <p className="mt-2 text-slate-600">
        Financial analysis, reporting, and key indicators explained.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {indicators.map((i) => (
          <div key={i.key} className="border rounded-lg p-6 bg-white">
            <div className="font-semibold">{i.label}</div>
            <p className="mt-2 text-sm text-slate-600">{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
