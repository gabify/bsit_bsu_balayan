import React from "react";
import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 10",
  title: "Faculty",

  description:
    "This area covers the qualifications, recruitment, development, performance, and welfare of faculty members, ensuring that teaching personnel are competent, professionally qualified, and capable of delivering quality instruction.",

  focalPerson: {
    name: "Juan Dela Cruz",
    email: "juan.delacruz@example.edu",
  },

  files: [
    {
      id: 1,
      name: "Faculty Profile and Qualifications.pdf",
      url: "#",
    },
    {
      id: 2,
      name: "Faculty Development and Training Programs.pdf",
      url: "#",
    },
    {
      id: 3,
      name: "Faculty Performance Evaluation Report.pdf",
      url: "#",
    },
  ],

  parameters: [
    {
      id: "A",
      title: "Faculty Qualifications and Recruitment",
      description:
        "The academic qualifications, professional credentials, recruitment procedures, and selection of faculty members in relation to program requirements.",
    },
    {
      id: "B",
      title: "Faculty Development and Advancement",
      description:
        "The availability of professional development opportunities, continuing education, research support, and career advancement programs.",
    },
    {
      id: "C",
      title: "Faculty Performance and Welfare",
      description:
        "The implementation of faculty evaluation, recognition, workload management, and support mechanisms that promote professional effectiveness and well-being.",
    },
  ],
};

const Faculty = ({ area = defaultArea }) => {
  const { code, title, description, focalPerson, files, parameters } = area;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 text-slate-800">
      {/* Header */}
      <AreaHeader code={code} title={title} />

      {/* Description, focal person, and files */}
      <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
        <AreaDescription description={description} />

        <FocalPerson focalPerson={focalPerson} />

        <AreaFiles files={files} />
      </div>

      {/* Parameters */}
      <AreaParameters parameters={parameters} />
    </div>
  );
};

export default Faculty;
