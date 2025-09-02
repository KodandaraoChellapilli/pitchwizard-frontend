import { useState } from "react";
import axios from "axios";

type AnswerValue = string | number | boolean;

export default function QualificationPage() {
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({
    hasQBO: true,
    monthlyCloseDays: 15,
    hasBudget: false,
  });
  const [result, setResult] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await axios.post("/api/qualify", { leadEmail: email, answers });
    setResult(res.data.score);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Client Qualification</h1>
      <p className="mt-2 text-slate-600">
        A quick readiness check and QBO analysis.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            className="mt-1 w-full rounded-md border-slate-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={Boolean(answers.hasQBO)}
              onChange={(e) =>
                setAnswers({ ...answers, hasQBO: e.target.checked })
              }
            />
            QuickBooks Online in use
          </label>
          <div>
            <label className="block text-sm font-medium">
              Monthly close timing (days)
            </label>
            <input
              type="number"
              className="mt-1 w-full rounded-md border-slate-300"
              value={Number(answers.monthlyCloseDays) || 0}
              onChange={(e) =>
                setAnswers({
                  ...answers,
                  monthlyCloseDays: Number(e.target.value),
                })
              }
            />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={Boolean(answers.hasBudget)}
              onChange={(e) =>
                setAnswers({ ...answers, hasBudget: e.target.checked })
              }
            />
            Budget in place
          </label>
        </div>
        <button
          type="submit"
          className="bg-brand hover:bg-brand-dark text-white font-semibold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
      {result !== null && (
        <div className="mt-6 rounded-md border p-4">
          <div className="font-semibold">Readiness score: {result}</div>
          <p className="text-slate-600 text-sm mt-1">
            Higher scores indicate stronger readiness for service engagement.
          </p>
        </div>
      )}
    </div>
  );
}
