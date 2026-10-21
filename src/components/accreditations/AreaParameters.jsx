import React from "react";
import {
  ClipboardDocumentListIcon,
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "./SectionTitle";

const AreaParameters = ({ parameters = [] }) => {
  return (
    <section className="flex flex-col gap-3">
      <SectionTitle icon={ClipboardDocumentListIcon} className="text-lg">
        Parameters
      </SectionTitle>

      {parameters.length === 0 ? (
        <p className="text-sm text-slate-500">No parameters available.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-slate-200 rounded-lg border border-slate-200">
          {parameters.map((parameter) => (
            <li key={parameter.id}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-3 hover:bg-yellow-50 focus-visible:outline focus-visible:outline-yellow-900">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-yellow-900 text-sm font-semibold text-white">
                    {parameter.id}
                  </span>

                  <span className="min-w-0 flex-1 font-medium">
                    {parameter.title}
                  </span>

                  <ChevronRightIcon
                    className="h-5 w-5 shrink-0 text-yellow-900 transition-transform group-open:rotate-90"
                    aria-hidden="true"
                  />
                </summary>

                <div className="px-4 pb-4 pl-14 text-sm leading-relaxed text-slate-600">
                  {parameter.description && (
                    <ol className="list-decimal space-y-2 pl-5">
                      {parameter.description
                        .split("\n")
                        .filter((item) => item.trim() !== "")
                        .map((item, index) => (
                          <li key={index}>
                            {parameter.href ? (
                              <a
                                href={parameter.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-900 underline decoration-yellow-900/30 underline-offset-4 transition hover:text-yellow-700 hover:decoration-yellow-700 focus-visible:outline focus-visible:outline-yellow-900"
                              >
                                {item.trim()}
                              </a>
                            ) : (
                              item.trim()
                            )}
                          </li>
                        ))}
                    </ol>
                  )}
                </div>
              </details>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default AreaParameters;
