import { useState } from "react";
import NameBanner from "../../components/directiryTaskForce/NameBanner";

const DirectoryTaskForce = () =>{
    const [openArea, setOpenArea] = useState(null);
    const toggleArea = (area) => setOpenArea((current) => current === area ? null : area);

    const steeringCommitee = {
        area: 'steering', 
        title: 'Steering Committee',
        committe: [
            {name: 'Asst. Prof. May G. Gonzales', position: 'Steering Commitee'},
            {name: 'Ms. Celinne A. Mendez', position: 'Steering Commitee'},
            {name: 'Mr. John Bryan G. Naños', position: 'Steering Commitee'}
        ]
    }

    const areas = [
        {
            area: 'I', 
            title: 'Vision, Mission, Goals and Objectives',
            committe: [
                {name: 'Dr. Jocelyn C. Banaybanay', position: 'Chairman'},
                {name: 'Mrs. Teresita N. Flores', position: 'Member'},
                {name: 'Engr. Jasmin E. Cabuay', position: 'Member'}
            ]
        },
        {
            area: 'II', 
            title: 'Faculty',
            committe: [
                {name: 'Mrs. Annalyn G. Macatangay', position: 'Chairman'},
                {name: 'Asst. Prof. Nerissa V. Rodriguez', position: 'Member'},
                {name: 'Mrs. Vince Sharmaine F. Villanueva', position: 'Member'}
            ]
        },
        {
            area: 'III', 
            title: 'Currculum And Instruction',
            committe: [
                {name: 'Dr. Kathleen B. Bayungan', position: 'Chairman'},
                {name: 'Dr. Marian C. Panganiban', position: 'Member'},
                {name: 'Ms. Carla M. Villalobos', position: 'Member'},
                {name: 'Ms. Noelisa M. Benter', position: 'Member'},
                {name: 'Mr. Christian Jade Yap', position: 'Member'}
            ]
        },
        {
            area: 'IV', 
            title: 'Support to Students',
            committe: [
                {name: 'Mrs. Ma. Gizelle G. Calaud', position: 'Chairman'},
                {name: 'Asst. Prof. Irenea T. Diaz', position: 'Member'},
                {name: 'Ms. Jubilee C. Delos Reyes', position: 'Member'},
                {name: 'Ms. Noelisa M. Benter', position: 'Member'},
                {name: 'Ms. Rona I. Garcia', position: 'Member'}
            ]
        },
        {
            area: 'V', 
            title: 'Research',
            committe: [
                {name: 'Dr. Marites M. Abdon', position: 'Chairman'},
                {name: 'Engr. John Arone M. Tenorio', position: 'Member'},

            ]
        },
        {
            area: 'VI', 
            title: 'Extension and Community Involvement',
            committe: [
                {name: 'Engr. Jean Karla M. Castillo', position: 'Chairman'},
                {name: 'Engr. Arvin M. Delos Reyes', position: 'Member'},
                {name: 'Ms. Mary Joy Ramos', position: 'Member'},
            ]
        },
        {
            area: 'VII', 
            title: 'Library',
            committe: [
                {name: 'Mrs. Ma. Cecilia D. De Vera', position: 'Chairman'},
                {name: 'Ms. Bernadette V. Rodriguez', position: 'Member'},
            ]
        },
        {
            area: 'VIII', 
            title: 'Physical Plant and Facilities',
            committe: [
                {name: 'Dr. Ma. Luz I. Sanchez', position: 'Chairman'},
                {name: 'Asst. Prof. Gaudencio B. Panganiban', position: 'Member'},
                {name: 'Mr. Joel N. Cañada', position: 'Member'},
                {name: 'Mr. Wilfredo M. Lopez', position: 'Member'},
                {name: 'Ms. Maureen V. Maningat', position: 'Member'},
                {name: 'GSO Personnel', position: 'Member'},
            ]
        },
        {
            area: 'IX', 
            title: 'Laboratories',
            committe: [
                {name: 'Mr. Mark Anthony P. Ribaldo', position: 'Chairman'},
                {name: 'Engr. Jayvee A. Dimaunahan', position: 'Member'},
                {name: 'Mr. Allan Carlo M. Lastrilla', position: 'Member'},
            ]
        },
        {
            area: 'X', 
            title: 'Administration',
            committe: [
                {name: 'Mr. Ruel M. Panday', position: 'Chairman'},
                {name: 'Engr. Raquel S. Benitez', position: 'Member'},
                {name: 'Ms. Bernadette T. Endaya', position: 'Member'},
            ]
        },
    ]

    return(
        <main className="px-4 py-3 lg:px-36">
            <header className="py-10 text-center uppercase lg:text-start">
                <h1 className="text-xl lg:text-2xl font-bold tracking-wide">Local Accreditation Task Force</h1>
                <p className="text-sm lg:text-md tracking-wider font-light">bsit preliminary survey visit</p>
            </header>

            <section id="overall-steering">
                <div>
                    <NameBanner name={"Dr. Marc Zeus R. Villanueva"} position={"Overall Chairman"}/>
                </div>
            </section>

            <section className="space-y-4">
                {areas.map((s, index) => (
                    <article key={index} id={`area${s.area}`} className="overflow-hidden rounded-lg border border-gray-200">
                        <button
                            type="button"
                            onClick={() => toggleArea(s.area)}
                            aria-expanded={openArea === s.area}
                            className="flex w-full items-center justify-between bg-[#B93400] p-4 text-left text-white cursor-pointer"
                        >
                            <h2 className="font-bold tracking-wide">{s.area === 'steering' ? 'Steering Committee' : `Area ${s.area}`}</h2>
                        
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
                                    <p className={`font-semibold mb-2 ${s.area === 'steering' ? 'hidden' : 'block'}`}>
                                        {s.title}
                                    </p>
                                    <div className={`w-36 lg:w-24 h-1 bg-yellow-900 ${s.area === 'steering' ? 'hidden' : 'block'}`} />
                                </div>
                                <div>
                                    <ul className="space-y-3">
                                        {s.committe.map((c, index) =>(
                                            <li key={index} className="py-2 px-4 hover:bg-[#B93400] hover:text-gray-50 transition-all hover:border-s-4 border-red-50">
                                                <h3 className="-mb-1.5 font-medium text-sm cursor-default">{c.name}</h3>
                                                <small className="font-light text-xs cursor-default">{c.position}</small>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    )
}

export default DirectoryTaskForce;