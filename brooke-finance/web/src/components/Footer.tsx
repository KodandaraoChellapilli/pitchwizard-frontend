import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Brooke Finance. All rights reserved.</p>
        <nav className="flex gap-4">
          <Link to="/privacy" className="hover:text-brand">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-brand">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
