export default function ServicesPage() {
  const services = [
    {
      key: "fractional_cfo",
      title: "Fractional CFO",
      desc: "Strategic financial leadership, forecasting, cash flow management, and fundraising support.",
    },
    {
      key: "controller",
      title: "Controller",
      desc: "Month-end close, financial reporting, policy controls, and process improvement.",
    },
    {
      key: "bookkeeping",
      title: "Bookkeeping",
      desc: "Accurate categorization, reconciliations, AP/AR, and QuickBooks Online maintenance.",
    },
    {
      key: "accounting_clerk",
      title: "Accounting Clerk",
      desc: "Entry-level support for data entry, invoice processing, and routine tasks.",
    },
  ];
  const criteria = [
    "Annual revenue",
    "Number of employees",
    "Existing finance systems (QBO, payroll, AP tools)",
    "Reporting cadence and stakeholder needs",
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-2 text-slate-600">
        Right-sized solutions across the finance stack.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.key} className="border rounded-lg p-6 bg-white">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="mt-2 text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Selection criteria</h2>
        <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700">
          {criteria.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
