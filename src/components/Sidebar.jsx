import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const AREAS = [
  {
    slug: "vmgo",
    title: "Vision, Mission, Goals, and Objectives",
    note: "Institutional direction and how it is shared and put into practice.",
  },
  {
    slug: "faculty",
    title: "Faculty",
    note: "Qualifications, workload, development, and performance of teaching staff.",
  },
  {
    slug: "curriculum-instruction",
    title: "Curriculum and Instruction",
    note: "Program design, teaching methods, and assessment of learning.",
  },
  {
    slug: "support-to-students",
    title: "Support to Students",
    note: "Services, programs, and activities that support student welfare.",
  },
  {
    slug: "research",
    title: "Research",
    note: "Research agenda, outputs, and utilization.",
  },
  {
    slug: "extension-community-involvement",
    title: "Extension and Community Involvement",
    note: "Outreach programs and community partnerships.",
  },
  {
    slug: "library",
    title: "Library",
    note: "Collections, services, staffing, and learning resources.",
  },
  {
    slug: "physical-plant-facilities",
    title: "Physical Plant and Facilities",
    note: "Campus buildings, classrooms, safety, and upkeep.",
  },
  {
    slug: "laboratories",
    title: "Laboratories",
    note: "Laboratory spaces, equipment, and safety practices.",
  },
  {
    slug: "administration",
    title: "Administration",
    note: "Governance, management, records, and resource planning.",
  },
];

const linkClass = ({ isActive }) =>
  `flex min-h-10 items-center gap-3 rounded-md px-3 py-2 transition-colors duration-200 ${
    isActive
      ? "bg-yellow-900 text-white"
      : "text-gray-700 hover:bg-yellow-900 hover:text-white"
  }`;

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the drawer whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape and lock body scroll while the drawer is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ================= MOBILE: hamburger + drawer (below md) ================= */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open program areas"
        aria-expanded={open}
        className="fixed left-3 top-3 z-40 rounded-md bg-white p-2 shadow md:hidden"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        aria-hidden={!open}
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] overflow-y-auto bg-white p-3 shadow-xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-6 flex h-7 items-center justify-between px-1">
          <span className="text-sm font-semibold uppercase">Program Areas</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-1 text-gray-500"
          >
            ✕
          </button>
        </div>

        <nav className="space-y-2">
          {AREAS.map((area, index) => (
            <NavLink
              key={area.slug}
              to={`/areas/${area.slug}`}
              className={linkClass}
              tabIndex={open ? 0 : -1}
            >
              <span className="w-6 shrink-0 text-center font-semibold">
                {index + 1}
              </span>
              {/* wrap instead of nowrap so long titles fit */}
              <span className="min-w-0 whitespace-normal text-sm leading-snug">
                {area.title}
              </span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* ================= DESKTOP: hover rail (md and up) ================= */}
      <aside className="relative z-50 hidden w-18 shrink-0 md:block">
        <div
          className="
            group/sidebar absolute left-0 top-0
            w-18 hover:w-90
            min-h-full
            overflow-hidden
            rounded-r-lg
            bg-white
            p-3
            shadow-sm hover:shadow-xl
            transition-[width,box-shadow]
            duration-300
            ease-[cubic-bezier(0.22,1,0.36,1)]
          "
        >
          <h2 className="mb-6 flex h-7 items-center justify-center whitespace-nowrap">
            <span className="text-sm font-semibold uppercase">
              <span className="group-hover/sidebar:hidden">Areas</span>
              <span className="hidden group-hover/sidebar:inline">
                Program Areas
              </span>
            </span>
          </h2>

          <nav className="space-y-2">
            {AREAS.map((area, index) => (
              <NavLink
                key={area.slug}
                to={`/areas/${area.slug}`}
                title={area.note}
                className={({ isActive }) =>
                  `
                    flex min-h-10 items-center gap-3
                    rounded-md px-3 py-2
                    whitespace-nowrap
                    transition-colors duration-200
                    ${
                      isActive
                        ? "bg-yellow-900 text-white"
                        : "text-gray-700 hover:bg-yellow-900 hover:text-white"
                    }
                  `
                }
              >
                <span className="w-6 shrink-0 text-center font-semibold">
                  {index + 1}
                </span>

                <span
                  className="
                    min-w-0 text-sm
                    opacity-0
                    translate-x-2
                    transition-[opacity,transform]
                    duration-200
                    ease-out
                    group-hover/sidebar:translate-x-0
                    group-hover/sidebar:opacity-100
                    delay-75
                  "
                >
                  {area.title}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
