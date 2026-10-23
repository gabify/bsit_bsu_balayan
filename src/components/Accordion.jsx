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
                                            <div className="flex items-center-safe gap-3">
                                                <div>
                                                    {Object.hasOwn(c, "image") ? (
                                                        <img src={c.image} alt={c.name} className=" w-16 object-cover object-[30%_20%] aspect-square lg:w-48 rounded-full"/>
                                                    ): (
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 text-yellow-900">
                                                            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="-mb-1.5 font-medium text-sm cursor-default lg:text-2xl">{c.name}</h3>
                                                    <small className="font-light text-xs  cursor-default lg:text-lg tracking-tight">{c.position}</small>
                                                </div>
                                            </div>
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