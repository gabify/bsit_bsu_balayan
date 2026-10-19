import React from "react";
import { FolderOpenIcon, DocumentIcon } from "@heroicons/react/24/outline";
import SectionTitle from "./SectionTitle";

const AreaFiles = ({ files = [] }) => {
  return (
    <section className="flex flex-1 flex-col gap-3 rounded-lg border border-slate-200 p-5">
      <SectionTitle icon={FolderOpenIcon}>Files</SectionTitle>

      {files.length === 0 ? (
        <p className="text-sm text-slate-500">No files uploaded yet.</p>
      ) : (
        <ul className="flex flex-col gap-1">
          {files.map((file) => (
            <li key={file.id}>
              <a
                href={file.url}
                className="flex items-center gap-2 rounded px-2 py-1.5 text-sm text-slate-700 hover:bg-yellow-50 hover:text-yellow-900 focus-visible:outline focus-visible:outline-yellow-900"
              >
                <DocumentIcon
                  className="h-4 w-4 shrink-0 text-yellow-900"
                  aria-hidden="true"
                />

                <span className="truncate">{file.name}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default AreaFiles;
