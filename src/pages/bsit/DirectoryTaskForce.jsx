import { useState } from "react";
import NameBanner from "../../components/directiryTaskForce/NameBanner";

const DirectoryTaskForce = () =>{
    const [steeringOpen, setSteeringOpen] = useState(false);
    const steeringCommitee = [
        'Asst. Prof. May G. Gonzales',
        'Ms. Celinne A. Mendez',
        'Mr. John Bryan G. Naños',
    ]

    const area1 = [
        {name: 'Dr. Jocelyn C. Banaybanay', position: 'Chairman'},
        {name: 'Mrs. Teresita N. Flores', position: 'Member'},
        {name: 'Engr. Jasmin E. Cabuay', position: 'Member'}
    ]

    return(
        <main className="px-4 lg:px-36">
            <header className="py-10 text-center uppercase">
                <h1 className="text-xl font-bold tracking-wide">Local Accreditation Task Force</h1>
                <p className="text-sm tracking-wider font-light">bsit preliminary survey visit</p>
            </header>

            <section id="overall-steering">
                <div>
                    <NameBanner name={"Dr. Marc Zeus R. Villanueva"} position={"Overall Chairman"}/>
                </div>
                <div>
                    <button
                        type="button"
                        onClick={() => setSteeringOpen(!steeringOpen)}
                        aria-expanded={steeringOpen}
                        className="flex w-full items-center justify-between py-3 text-left font-semibold"
                        >
                        <span className="font-bold">Steering Committee</span>

                        <svg
                            className={`h-5 w-5 transition-transform duration-300 ${
                            steeringOpen ? "rotate-180" : "rotate-0"
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
                        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                            steeringOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                        >
                        <div className="overflow-hidden">
                            <ul className="space-y-2">
                            {steeringCommitee.map((s) => (
                                <li key={s}>
                                <NameBanner
                                    name={s}
                                    position="Steering Committee"
                                />
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="area1">
                <div>
                    <h2>Area I</h2>
                    <p>Vision, Mission, Goals and Objectives</p>
                </div>
                <article>
                    <ul>
                        {area1.map((s, index) => (
                            <li key={index}>
                                <NameBanner name={s.name} position={s.position}/>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>
        </main>
    )
}

export default DirectoryTaskForce;