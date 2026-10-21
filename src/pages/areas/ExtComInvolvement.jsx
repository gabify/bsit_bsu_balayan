import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 6",
  title: "Extension and Community Involvement",

  description:
    "This area covers the institution's extension programs, community engagement initiatives, and partnerships designed to address community needs, share institutional expertise, and promote sustainable community development.",

  focalPerson: {
    name: "Juan Dela Cruz",
    email: "juan.delacruz@example.edu",
  },

  files: [
    {
      id: 1,
      name: "Extension Program and Development Plan.pdf",
      url: "#",
    },
    {
      id: 2,
      name: "Community Needs Assessment Report.pdf",
      url: "#",
    },
    {
      id: 3,
      name: "Extension Activities and Accomplishment Reports.pdf",
      url: "#",
    },
  ],

  parameters: [
    {
      id: "A",
      title: "Extension Programs and Projects",
      description:
        "The relevance, implementation, and sustainability of extension programs in addressing identified community needs.",
    },
    {
      id: "B",
      title: "Community Involvement and Partnerships",
      description:
        "The participation of stakeholders and the development of partnerships with communities, government agencies, and other organizations.",
    },
    {
      id: "C",
      title: "Monitoring and Evaluation",
      description:
        "The assessment of extension activities, community outcomes, and the use of evaluation results to improve future programs.",
    },
  ],
};

const ExtComInvolvement = ({ area = defaultArea }) => {
  const { code, title, description, focalPerson, parameters } = area;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 text-slate-800">
      {/* Header */}
      <AreaHeader code={code} title={title} />

      {/* Description, focal person, and files */}
      <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
        <AreaDescription description={description} />

        <FocalPerson focalPerson={focalPerson} />

        <AreaFiles />
      </div>

      {/* Parameters */}
      <AreaParameters parameters={parameters} />
    </div>
  );
};

export default ExtComInvolvement;
