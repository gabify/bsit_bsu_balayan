import React from "react";
import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 1",
  title: "Vision, Mission, Goals and Objectives",

  description:
    "This area covers the institution’s statement of its vision, mission, goals and objectives, how these are shared with stakeholders, and how well they are understood and reviewed.",

  focalPerson: {
    name: "Juan Dela Cruz",
    email: "juan.delacruz@example.edu",
  },

  parameters: [
    {
      id: "A",
      title: "Statement of VMGO",
      description:
        "Clarity and completeness of the stated vision, mission, goals and objectives.",
    },
    {
      id: "B",
      title: "Dissemination and acceptability",
      description: "How the VMGO is shared with and accepted by stakeholders.",
    },
    {
      id: "C",
      title: "Review and revision",
      description: "The process used to review and update the VMGO.",
    },
  ],
};

const VMGO = ({ area = defaultArea }) => {
  const { code, title, description, focalPerson, files, parameters } = area;

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

export default VMGO;
