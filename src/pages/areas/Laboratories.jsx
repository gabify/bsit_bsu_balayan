import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 9",
  title: "Laboratories",

  description:
    "This area covers the adequacy, functionality, management, and maintenance of laboratories and specialized learning facilities that support practical instruction, experimentation, research, and the development of students' technical competencies.",

  focalPerson: {
    name: "Juan Dela Cruz",
    email: "juan.delacruz@example.edu",
  },

  parameters: [
    {
      id: "A",
      title: "Laboratory Facilities and Equipment",
      description:
        "The adequacy, availability, functionality, and suitability of laboratory facilities and equipment for the requirements of academic programs.",
    },
    {
      id: "B",
      title: "Laboratory Management and Utilization",
      description:
        "The effectiveness of laboratory scheduling, supervision, resource management, and utilization in supporting learning outcomes.",
    },
    {
      id: "C",
      title: "Laboratory Safety and Maintenance",
      description:
        "The implementation of safety protocols, equipment maintenance, risk prevention, and proper laboratory operating procedures.",
    },
  ],
};

const Laboratories = ({ area = defaultArea }) => {
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

export default Laboratories;
