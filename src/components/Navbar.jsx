import BSULogo from "../assets/Batangas_State_Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  /* const menus = [
    {
      title: "Program Areas",
      path: "/#program-areas",
      columns: [
        {
          title: "Program Areas",
          links: [
            {
              label: "Vision, Mission, Goals, and Objectives",
              path: "/areas/vmgo",
            },
            {
              label: "Faculty",
              path: "/areas/faculty",
            },
            {
              label: "Curriculum and Instruction",
              path: "/areas/curriculum-instruction",
            },
          ],
        },
        {
          links: [
            {
              label: "Support to Students",
              path: "/areas/support-to-students",
            },
            {
              label: "Research",
              path: "/areas/research",
            },
            {
              label: "Extension and Community Involvement",
              path: "/areas/extension-community-involvement",
            },
            {
              label: "Library",
              path: "/areas/library",
            },
          ],
        },
        {
          links: [
            {
              label: "Physical Plant and Facilities",
              path: "/areas/physical-plant-facilities",
            },
            {
              label: "Laboratories",
              path: "/areas/laboratories",
            },
            {
              label: "Administration",
              path: "/areas/administration",
            },
          ],
        },
      ],
    },

    {
      title: "Bachelor of Science in Information Technology",
      path: "/bsit",
      columns: [
        {
          title: "BSIT Program",
          links: [
            {
              label: "Program Activities",
              path: "/bsit/program-activities",
            },
            {
              label: "Directory Task Force",
              path: "/bsit/directory-task-force",
            },
            {
              label: "AACCUP Additional Documents",
              path: "/bsit/aaccup-additional-documents",
            },
          ],
        },
        {
          title: "Reference Files",
          links: [
            {
              label: "Curriculum",
              path: "/bsit/curriculum",
            },
            {
              label: "Certificate of Program Compliance",
              path: "/bsit/certificate-of-program-compliance",
            },
            {
              label:
                "CMO 25 s2015. Policies, Standards and Guidelines for BSIT",
              path: "/bsit/cmo-25-s2015",
            },
            {
              label: "AACCUP Technical Review Board Action (PSV)",
              path: "/bsit/aaccup-technical-review-board-action",
            },
          ],
        },
      ],
    },
  ];
 */
  return (
    <>
      <nav className="flex items-center gap-3 px-5 py-2 shadow-sm">
        <Link
          to="/"
          aria-label="BatStateU Balayan Information Technology homepage"
          className="group flex items-center gap-3"
        >
          <img
            src={BSULogo}
            alt="BatStateU Logo"
            className="w-12 shrink-0 transition-transform duration-200 group-hover:scale-105"
          />

          <section>
            <h1 className="mb-0.5 text-xs font-light uppercase tracking-wider text-gray-600 transition-colors duration-200 group-hover:text-red-700">
              BatStateU TNEU - Balayan
            </h1>

            <h2 className="font-extrabold tracking-wide transition-colors duration-200 group-hover:text-red-700">
              Information Technology
            </h2>
          </section>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
