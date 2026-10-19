import { useNavigate } from "react-router-dom";

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
    note: "Research agenda, outputs, funding, and utilization.",
  },
  {
    slug: "extension-community-involvement",
    title: "Extension and Community Involvement",
    note: "Outreach programs and partnerships with the community.",
  },
  {
    slug: "library",
    title: "Library",
    note: "Collections, services, staffing, and learning resources.",
  },
  {
    slug: "physical-plant-facilities",
    title: "Physical Plant and Facilities",
    note: "Campus buildings, classrooms, and the safety and upkeep of facilities.",
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

const AreaSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="program-areas"
      className="px-5 py-12 font-sans text-[#2a1416]"
      aria-labelledby="areas-heading"
    >
      <div className="mx-auto max-w-260 text-center lg:text-start">
        <h2
          id="areas-heading"
          className="mb-2 bebas-neue text-[clamp(1.8rem,4vw,2.4rem)] font-semibold leading-[1.15]"
        >
          Accreditation Areas
        </h2>

        <p className="mb-8 max-w-[56ch] text-base text-yellow-950">
          Explore the comprehensive areas of the Bachelor of Science in
          Information Technology program
        </p>

        <ol className="m-0 grid list-none grid-cols-1 grid-flow-row gap-3 p-0 min-[700px]:grid-cols-2 min-[700px]:grid-rows-5 min-[700px]:grid-flow-col">
          {AREAS.map((area, index) => {
            const number = index + 1;

            return (
              <li key={area.slug}>
                <button
                  type="button"
                  className="
                    group relative grid h-full w-full
                    grid-cols-[56px_1fr_20px]
                    items-start gap-3
                    overflow-hidden rounded-lg
                    border border-[#ecd3d3] bg-white
                    py-4 pl-0 pr-4
                    text-left
                    transition-colors duration-150
                    hover:border-yellow-900 hover:bg-yellow-900
                    focus-visible:border-yellow-900 focus-visible:bg-[#fdecec]
                    focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-yellow-900
                    cursor-pointer
                  "
                  onClick={() => navigate(`/areas/${area.slug}`)}
                >
                  {/* Number */}
                  <span
                    className="pt-0.5 text-center font-serif text-[2rem] font-semibold leading-none text-yellow-900 group-hover:text-yellow-50 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    {number}
                  </span>

                  {/* Content */}
                  <span>
                    <span className="block text-[1.2rem] lg:text-[1.5rem] font-bold leading-[1.3] group-hover:text-yellow-50 group-hover:opacity-100">
                      {area.title}
                    </span>

                    <span className="mt-1 block text-[0.88rem] font-light leading-normal text-[#7a5b5e] group-hover:text-gray-300 group-hover:opacity-100">
                      {area.note}
                    </span>
                  </span>

                  {/* Arrow */}
                  <svg
                    className="mt-1 h-5 w-5 text-[#7a5b5e] transition-[transform,color] duration-150 group-hover:translate-x-0.75 group-hover:text-yellow-50 group-focus-visible:translate-x-0.75 group-focus-visible:text-yellow-50"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 4l6 6-6 6" />
                  </svg>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default AreaSection;
