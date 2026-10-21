import { UserIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import SectionTitle from "./SectionTitle";

const FocalPerson = ({ focalPerson }) => {
  if (!focalPerson) return null;

  return (
    <section className="flex flex-1 flex-col gap-3 rounded-lg border border-slate-200 p-5">
      <SectionTitle icon={UserIcon}>Focal person</SectionTitle>

      <div className="flex min-w-0 flex-col gap-1.5">
        <p className="truncate font-medium">{focalPerson.name}</p>

        <a
          href={`mailto:${focalPerson.email}`}
          className="flex min-w-0 items-center gap-2 text-sm text-yellow-900 underline-offset-2 hover:underline"
        >
          <EnvelopeIcon className="h-4 w-4 shrink-0" aria-hidden="true" />

          <span className="truncate">{focalPerson.email}</span>
        </a>
      </div>
    </section>
  );
};

export default FocalPerson;
