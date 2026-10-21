import React from "react";
import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 7",
  title: "Library",

  description:
    "This area covers the library's collection of learning resources, facilities, services, and technologies that support instruction, research, and the academic needs of students, faculty, and other institutional stakeholders.",

  focalPerson: {
    name: "Juan Dela Cruz",
    email: "juan.delacruz@example.edu",
  },

  parameters: [
    {
      id: "A",
      title: "Library Resources and Collections",
      description:
        "The adequacy, relevance, currency, and accessibility of books, journals, electronic resources, and other learning materials.",
    },
    {
      id: "B",
      title: "Library Facilities and Equipment",
      description:
        "The suitability, accessibility, and maintenance of library spaces, equipment, and technology for academic activities.",
    },
    {
      id: "C",
      title: "Library Services and Management",
      description:
        "The effectiveness of library services, personnel, policies, and management practices in meeting the needs of users.",
    },
  ],
};

const Library = ({ area = defaultArea }) => {
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

export default Library;
