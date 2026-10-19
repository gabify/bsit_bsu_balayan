import React from "react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import SectionTitle from "./SectionTitle";

const AreaDescription = ({ description }) => {
  return (
    <section className="flex flex-2 flex-col gap-2 rounded-lg border border-slate-200 p-5">
      <SectionTitle icon={DocumentTextIcon}>Description</SectionTitle>

      <p className="leading-relaxed text-slate-600">{description}</p>
    </section>
  );
};

export default AreaDescription;
