import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? "text-white bg-brand" : "text-slate-700 hover:text-brand"
    }`;

  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-brand">
            Brooke Finance
          </Link>
          <nav className="flex items-center gap-2">
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
            <NavLink to="/resources" className={linkClass}>
              Resources
            </NavLink>
            <NavLink to="/testimonials" className={linkClass}>
              Testimonials
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
