import { useState } from "react";
import {
  XMarkIcon,
} from "@heroicons/react/24/outline";
import bg from "../assets/bg-picture.jpg"

const DirectoryModal = ({data}) => {
    const areas = data.length > 0 ? data : [];
    const [isOpen, setIsOpen] = useState(null);
    const [selectedArea, setSelectedArea] = useState(null);

    const toggleArea = (area) => {
        setSelectedArea(area);
        setIsOpen(true);
    };

    return(
        <>
            {areas.map((s) => (
                <button
                    key={s.area}
                    type="button"
                    onClick={() => toggleArea(s)}
                    className="group min-h-44 flex-col rounded-xl
                                border border-gray-200 bg-white p-6 text-left
                                shadow-sm transition duration-200
                                hover:-translate-y-1 hover:border-yellow-900
                                hover:shadow-lg"
                    >
                    <span className="text-sm font-semibold uppercase
                                    tracking-wider text-yellow-900">
                        Area {s.area}
                    </span>

                    <h3 className="text-xl font-bold text-gray-800
                                    transition-colors group-hover:text-yellow-900">
                        {s.title}
                    </h3>

                    <div className="mt-auto flex w-full items-center
                                    justify-between pt-5">
                        <span className="text-sm font-semibold text-yellow-900">
                        View members →
                        </span>
                    </div>
                </button>
            ))}

            {isOpen && (
                <section
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                        setIsOpen(false);
                        }
                    }}
                >
                    <article
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="reference-modal-title"
                        className="w-full max-w-4xl h-[90vh] overflow-y-auto rounded-2xl bg-slate-100 shadow-2xl transition-all"
                    >
                        <div className="grid grid-cols-3 h-full">
                            <aside className="col-span-1 bg-yellow-900 p-6 text-gray-50 relative isolate overflow-hidden flex flex-col justify-center">
                                <img src={bg} alt="background" className="absolute inset-0 h-full w-full object-cover opacity-5" />
                                <div className="absolute inset-0 -z-10 bg-yellow-900 opacity-100" />
                                <div className="absolute z-0">
                                    <div className="mb-10">
                                        <h2 className="mb-3 text-xl">{`Area ${selectedArea.area}`}</h2>
                                        <div className="mb-4 h-1 w-16 bg-yellow-700" />
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 mb-10">
                                            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                            <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-wide">{selectedArea.title}</h3>
                                        <small className="font-light tracking-wide">{`${selectedArea.committe.length} committe members`}</small>
                                    </div>
                                </div>
                            </aside>
                            <div className="col-span-2 p-5">
                                <div className="flex justify-end mb-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        aria-label="Close reference documents"
                                        className="shrink-0 p-2 text-slate-600 transition hover:text-yellow-900 focus:outline-none"
                                    >
                                        <XMarkIcon className="h-6 w-6" />
                                    </button>
                                </div>
                                <ul>
                                    {selectedArea.committe.map((c, index) =>(
                                        <li key={index} className="flex gap-2 items-center-safe justify-between mb-3 bg-gray-50 px-5 py-2 rounded-2xl hover:bg-gray-200">
                                            <div className="flex gap-7 items-center-safe">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 text-yellow-900">
                                                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                                                </svg>
                                                <p className={`font-bold text-gray-800 ${c.position === 'Chairman' ? 'text-lg' : 'text-md'}`}>{c.name}</p>
                                            </div>
                                            <small className={`px-2 py-1 rounded-md font-semibold tracking-wide ${c.position === 'Chairman' ? 'bg-yellow-900 text-gray-50' : 'bg-[#CFB595] text-yellow-700'}`}>{c.position}</small>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </article>
                </section>
            )}
        </>
    )
}

export default DirectoryModal;