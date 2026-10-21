import React, { useState } from "react";
import {
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const documents = [
  {
    title: "Curriculum",
    description: "Bachelor of Science in Information Technology curriculum.",
    href: "/documents/curriculum.pdf",
  },
  {
    title: "Certificate of Program Compliance",
    description: "Official certificate of program compliance.",
    href: "/documents/certificate-of-program-compliance.pdf",
  },
  {
    title: "CMO 25 s. 2015",
    description: "Policies, Standards and Guidelines for BSIT.",
    href: "/documents/cmo-25-s-2015.pdf",
  },
  {
    title: "AACCUP Technical Review Board Action",
    description: "Preliminary Survey Visit (PSV) review documents.",
    href: "/documents/aaccup-technical-review-board-action.pdf",
  },
];

const ReferenceModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative flex w-full flex-col rounded-2xl border border-slate-200 bg-white p-7 text-left transition hover:border-yellow-900 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-red-200"
      >
        <div className="absolute bottom-4 right-3 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-yellow-900 transition group-hover:bg-yellow-900 group-hover:text-white">
          <svg
            className="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
            />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-slate-900">Reference Files</h3>

        <p className="mt-2 mb-10 pr-8 text-sm font-light leading-tight text-slate-600">
          Manuals, templates, and forms in one place.
        </p>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="reference-modal-title"
            className="w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 bg-slate-100 p-5 shadow-2xl sm:p-8"
          >
            {/* Modal Heading */}
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <div className="mb-4 h-1 w-16 bg-yellow-900" />

                <h2
                  id="reference-modal-title"
                  className="bebas-neue text-2xl font-bold uppercase text-red-800 md:text-4xl"
                >
                  Reference Files
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  Browse the curriculum, compliance certificates, policies, and
                  accreditation review documents.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close reference documents"
                className="shrink-0 rounded-xl border border-slate-200 bg-white p-2 text-slate-600 transition hover:border-yellow-900 hover:bg-yellow-900 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-red-200"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Four-Column Document Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {documents.map((document) => (
                <a
                  key={document.title}
                  href={document.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex min-h-56 flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-yellow-900 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-red-200"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-yellow-900 transition group-hover:bg-yellow-900 group-hover:text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-lg font-bold leading-snug text-slate-900 transition group-hover:text-yellow-900">
                    {document.title}
                  </h3>

                  <p className="mt-2 text-sm font-light leading-relaxed text-slate-600">
                    {document.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="text-sm font-semibold text-yellow-900">
                      View Document
                    </span>

                    <ArrowTopRightOnSquareIcon className="h-5 w-5 text-slate-400 transition group-hover:text-yellow-900" />
                  </div>
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-8 flex justify-end border-t border-slate-200 pt-5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-yellow-900 hover:bg-yellow-900 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-red-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReferenceModal;
