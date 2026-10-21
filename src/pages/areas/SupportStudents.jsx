import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 4",
  title: "Support to Students",

  description:
    "This area covers the student support services, programs, and facilities provided by the institution to promote student welfare, academic success, personal development, and overall well-being.",

  focalPerson: {
    name: "Juan Dela Cruz",
    email: "juan.delacruz@example.edu",
  },

  parameters: [
    {
      id: "A",
      title: "Student Services Program",
      description:
        "The availability and effectiveness of programs and services that address students' academic, personal, and developmental needs.",
    },
    {
      id: "B",
      title: "Student Welfare and Development",
      description:
        "The implementation of activities and support mechanisms that promote student welfare, participation, and personal growth.",
    },
    {
      id: "C",
      title: "Guidance and Counseling Services",
      description:
        "The accessibility and effectiveness of guidance, counseling, and referral services for students.",
    },
  ],
};

const SupportStudents = ({ area = defaultArea }) => {
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

export default SupportStudents;
