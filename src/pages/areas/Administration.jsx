import React from "react";
import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 10",
  title: "Administration",

  description:
    "This area covers the institution's administrative organization, leadership, management practices, policies, and processes that support the effective delivery of academic programs and institutional services.",

  focalPerson: {
    name: "Juan Dela Cruz",
    email: "juan.delacruz@example.edu",
  },

  parameters: [
    {
      id: "A",
      title: "Organization and Administration",
      description:
        "The adequacy of the organizational structure, administrative offices, and distribution of responsibilities.",
    },
    {
      id: "B",
      title: "Academic Administration",
      description:
        "The effectiveness of administrative leadership and management in supporting academic programs and institutional objectives.",
    },
    {
      id: "C",
      title: "Administrative Policies and Procedures",
      description:
        "The implementation, accessibility, and effectiveness of institutional policies and administrative procedures.",
    },
  ],
};

const Administration = ({ area = defaultArea }) => {
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

export default Administration;
