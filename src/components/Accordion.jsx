import { useState } from "react";

const Accordion = ({data}) =>{
    const [openArea, setOpenArea] = useState(null);
    const toggleArea = (area) => setOpenArea((current) => current === area ? null : area);

    const areas = data.length > 0 ? data : [];
    
    return(
        <>
            {areas.map((s, index) => (
                <article key={index} id={`area${s.area}`} className="overflow-hidden rounded-lg border border-gray-200">
                    <button
                        type="button"
                        onClick={() => toggleArea(s.area)}
                        aria-expanded={openArea === s.area}
                        className="flex w-full items-center justify-between bg-yellow-900 p-4 text-left text-white cursor-pointer"
                    >
                        <h2 className="font-bold tracking-wide">{`Area ${s.area}`}</h2>
                    
                    <svg
                        className={`h-5 w-5 transition-transform duration-300 ${
                        openArea === s.area ? "rotate-180" : "rotate-0"
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                        d="m6 9 6 6 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>

                    </button>
                    <div
                        className={`grid transition-[grid-template-rows]
                                    duration-500 ease-in-out ${
                            openArea === s.area
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        }`}
                    >
                        <div className="min-h-0 overflow-hidden">
                            <div className="py-3 px-2">
                                <p className={`font-semibold mb-2`}>
                                    {s.title}
                                </p>
                                <div className={`w-36 lg:w-24 h-1 bg-yellow-900`} />
                            </div>
                            <div>
                                <ul className="space-y-3">
                                    {s.committe.map((c, index) =>(
                                        <li key={index} className="py-2 px-4 hover:bg-yellow-900 hover:text-gray-50 transition-all hover:border-s-4 border-yellow-700">
                                            <h3 className="-mb-1.5 font-medium text-sm cursor-default">{c.name}</h3>
                                            <small className="font-light text-xs tracking-wide cursor-default">{c.position}</small>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
}

export default Accordion;