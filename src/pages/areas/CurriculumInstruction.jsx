import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 3",
  title: "Curriculum and Instruction",

  description:
    "This area covers the design, development, implementation, and evaluation of academic programs and curricula, including instructional strategies, learning resources, and assessment practices that support student learning.",

  focalPerson: {
    name: "Juan Dela Cruz",
    email: "juan.delacruz@example.edu",
  },

  parameters: [
    {
      id: "A",
      title: "Curriculum and Program of Study",
      description:
        "The relevance, organization, and alignment of the curriculum with program objectives, institutional goals, and industry requirements.",
      href: "https://drive.google.com/your-faculty-document",
    },
    {
      id: "B",
      title: "Instructional Processes and Methodologies",
      description:
        "The effectiveness of teaching strategies, learning activities, and instructional approaches in achieving intended learning outcomes.",
    },
    {
      id: "C",
      title: "Assessment of Student Learning",
      description:
        "The appropriateness of assessment methods and the use of assessment results to monitor and improve student learning.",
    },
  ],
};

const CurriculumInstruction = ({ area = defaultArea }) => {
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

export default CurriculumInstruction;
