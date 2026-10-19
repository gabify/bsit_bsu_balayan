import React from "react";
import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 8",
  title: "Physical Plant and Facilities",

  description:
    "This area covers the institution's physical infrastructure, classrooms, laboratories, equipment, utilities, and other facilities that provide a safe, accessible, and conducive environment for teaching, learning, research, and administrative activities.",

  focalPerson: {
    name: "Juan Dela Cruz",
    email: "juan.delacruz@example.edu",
  },

  files: [
    {
      id: 1,
      name: "Campus Development and Facilities Plan.pdf",
      url: "#",
    },
    {
      id: 2,
      name: "Facilities Inventory and Equipment Report.pdf",
      url: "#",
    },
    {
      id: 3,
      name: "Safety, Security, and Maintenance Procedures.pdf",
      url: "#",
    },
  ],

  parameters: [
    {
      id: "A",
      title: "Physical Facilities and Infrastructure",
      description:
        "The adequacy, condition, accessibility, and suitability of classrooms, laboratories, offices, and other institutional facilities.",
    },
    {
      id: "B",
      title: "Equipment and Utilities",
      description:
        "The availability, functionality, and maintenance of equipment, utilities, and technological resources needed for institutional operations.",
    },
    {
      id: "C",
      title: "Safety, Security, and Maintenance",
      description:
        "The implementation of safety measures, emergency procedures, accessibility provisions, and preventive maintenance practices.",
    },
  ],
};

const PhysicalPlantFacilities = ({ area = defaultArea }) => {
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

export default PhysicalPlantFacilities;
