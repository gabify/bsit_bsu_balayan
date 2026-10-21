import React from "react";
import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 5",
  title: "Research",

  description:
    "This area covers the institution's research policies, priorities, programs, and activities, including faculty and student research, research dissemination, partnerships, and the application of research findings.",

  focalPerson: {
    name: "Juan Dela Cruz",
    email: "juan.delacruz@example.edu",
  },


  parameters: [
    {
      id: "A",
      title: "Research Policies and Priorities",
      description:
        "The availability and implementation of research policies, institutional research priorities, and development plans.",
    },
    {
      id: "B",
      title: "Research Capability and Support",
      description:
        "The provision of resources, training, funding, and other support to strengthen faculty and student research capabilities.",
    },
    {
      id: "C",
      title: "Research Output and Dissemination",
      description:
        "The production, presentation, publication, and utilization of research outputs to contribute to knowledge and community development.",
    },
  ],
};

const Research = ({ area = defaultArea }) => {
  const { code, title, description, focalPerson, files, parameters } = area;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 text-slate-800">
      {/* Header */}
      <AreaHeader code={code} title={title} />

      {/* Description, focal person, and files */}
      <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
        <AreaDescription description={description} />

        <FocalPerson focalPerson={focalPerson} />

        <AreaFiles   />
      </div>

      {/* Parameters */}
      <AreaParameters parameters={parameters} />
    </div>
  );
};

export default Research;
