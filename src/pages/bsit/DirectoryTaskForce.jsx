import Accordion from "../../components/Accordion";
import DirectoryModal from "../../components/DirectoryModal";
import sirZeus from "../../assets/pics/sirZeus.png";
import mamMay from "../../assets/pics/mamMay.jpg";
import mamCelinne from "../../assets/pics/mamCelinne.jpg";
import sirBryan from "../../assets/pics/sirBryan.png";
import docAbdon from "../../assets/pics/docAbdon.jpg";
import docBB from "../../assets/pics/docBB.jpg";
import mamFlores from "../../assets/pics/mamFlores.jpg";
import mamAnn from "../../assets/pics/mamAnn.jpg";
import docKaye from "../../assets/pics/docKaye.jpg";
import docMarian from "../../assets/pics/docMarian.jpg";
import mamBenter from "../../assets/pics/mamBenter.jpg";
import mamDiaz from "../../assets/pics/mamDiaz.jpg";
import mamG from "../../assets/pics/mamG.jpg";
import mamKarla from "../../assets/pics/mamKarla.jpg";
import mamNeri from "../../assets/pics/mamNeri.jpg";
import mamLuz from "../../assets/pics/mamLuz.jpg";
import mamRaquel from "../../assets/pics/mamRaquel.jpg";
import msMhau from "../../assets/pics/msMhau.jpg";
import sirDing from "../../assets/pics/sirDing.jpg";
import sirJoel from "../../assets/pics/sirJoel.jpg";
import sirRuel from "../../assets/pics/sirRuel.jpg";
import sirWendy from "../../assets/pics/sirWendy.jpg";

import { useState } from "react";

const DirectoryTaskForce = () =>{
    const [openSteering, setOpenSteering] = useState(false);

    const steeringCommitee = {
        area: 'steering', 
        title: 'Steering Committee',
        committe: [
            {name: 'Asst. Prof. May G. Gonzales', position: 'Steering Commitee', image: mamMay},
            {name: 'Ms. Celinne A. Mendez', position: 'Steering Commitee', image: mamCelinne},
            {name: 'Mr. John Bryan G. Naños', position: 'Steering Commitee', image: sirBryan}
        ]
    }

    const specialCommittee = {
        area: 'Committee on AVP and Website Development',
        committee: [
            {name: 'Mr. Ivan Gabriel B. Talaoc', position: 'Member'},
            {name: 'Mr. Angelo L. Posadas', position: 'Member'},
            {name: 'OJT Students', position: 'Member'},
        ]
    }

    const areas = [
        {
            area: 'I', 
            title: 'Vision, Mission, Goals and Objectives',
            committe: [
                {name: 'Dr. Jocelyn C. Banaybanay', position: 'Chairman', image: docBB},
                {name: 'Mrs. Teresita N. Flores', position: 'Member', image: mamFlores},
                {name: 'Engr. Jasmin E. Cabuay', position: 'Member'}
            ]
        },
        {
            area: 'II', 
            title: 'Faculty',
            committe: [
                {name: 'Mrs. Annalyn G. Macatangay', position: 'Chairman', image: mamAnn},
                {name: 'Asst. Prof. Nerissa V. Rodriguez', position: 'Member', image: mamNeri},
                {name: 'Mrs. Vince Sharmaine F. Villanueva', position: 'Member'}
            ]
        },
        {
            area: 'III', 
            title: 'Curriculum And Instruction',
            committe: [
                {name: 'Dr. Kathleen B. Bayungan', position: 'Chairman', image: docKaye},
                {name: 'Dr. Marian C. Panganiban', position: 'Member', image: docMarian},
                {name: 'Ms. Carla M. Villalobos', position: 'Member'},
                {name: 'Ms. Noelisa M. Benter', position: 'Member', image: mamBenter},
                {name: 'Mr. Christian Jade Yap', position: 'Member'}
            ]
        },
        {
            area: 'IV', 
            title: 'Support to Students',
            committe: [
                {name: 'Mrs. Ma. Gizelle G. Calaud', position: 'Chairman', image: mamG},
                {name: 'Asst. Prof. Irenea T. Diaz', position: 'Member', image: mamDiaz},
                {name: 'Ms. Jubilee C. Delos Reyes', position: 'Member'},
                {name: 'Ms. Rona I. Garcia', position: 'Member'}
            ]
        },
        {
            area: 'V', 
            title: 'Research',
            committe: [
                {name: 'Dr. Marites M. Abdon', position: 'Chairman', image: docAbdon},
                {name: 'Engr. John Arone M. Tenorio', position: 'Member'},

            ]
        },
        {
            area: 'VI', 
            title: 'Extension and Community Involvement',
            committe: [
                {name: 'Engr. Jean Karla M. Castillo', position: 'Chairman', image: mamKarla},
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
                {name: 'Dr. Ma. Luz I. Sanchez', position: 'Chairman', image: mamLuz},
                {name: 'Asst. Prof. Gaudencio B. Panganiban', position: 'Member', image: sirDing},
                {name: 'Mr. Joel N. Cañada', position: 'Member', image: sirJoel},
                {name: 'Mr. Wilfredo M. Lopez', position: 'Member', image: sirWendy},
                {name: 'Ms. Maureen V. Maningat', position: 'Member', image: msMhau},
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
                {name: 'Mr. Ruel M. Panday', position: 'Chairman', image: sirRuel},
                {name: 'Engr. Raquel S. Benitez', position: 'Member', mamRaquel},
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

            <section id="overall-steering" className="mb-3 overflow-hidden rounded-lg border border-gray-200">
                <section 
                    className="bg-yellow-900 px-2.5 pt-3 pb-3 rounded-t-xl flex items-end justify-between"
                    onClick={() => setOpenSteering(!openSteering)}
                >
                    <article>
                        <div className="flex gap-1 justify-start items-center mb-2">
                            <div>
                                <img src={sirZeus} alt="sir Zeus" className=" w-16 object-cover object-[30%_20%] aspect-square lg:w-48 rounded-full"/>
                            </div>
                            <div className="text-gray-100">
                                <h2 className="font-semibold -mb-1.5 tracking-tight lg:text-3xl">Dr. Marc Zeus R. Villanueva</h2>
                                <small className="text-yellow-100 text-sx font-light lg:text-lg tracking-tight">Overall Chairman</small>
                            </div>
                        </div>
                        <div className="w-24 lg:w-72 h-0.5 bg-yellow-500" />
                    </article>

                    <svg
                        className={`h-5 w-5 transition-transform duration-300 text-gray-50 ${
                            openSteering ? "rotate-180" : "rotate-0"
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
                </section>
                <div
                    className={`grid transition-[grid-template-rows]
                                duration-500 ease-in-out ${
                        openSteering
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                >
                    <div className="min-h-0 overflow-hidden">
                        <div>
                            <ul className="space-y-3 mt-2">
                                {steeringCommitee.committe.map((c, index) =>(
                                    <li key={index} className="py-2 px-4 hover:bg-yellow-900 hover:text-gray-50 transition-all hover:border-s-4 border-yellow-700">
                                        <div className="flex items-center-safe gap-3">
                                            <div>
                                                <img src={c.image} alt={c.name} className=" w-16 object-cover object-[30%_20%] aspect-square lg:w-48 rounded-full"/>
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
            </section>

            <section className="space-y-4 lg:hidden">
                <Accordion data={areas} />
            </section>

            <section className=" my-10 hidden lg:grid grid-cols-2 grid-flow-col grid-rows-5 gap-3">
                <DirectoryModal data={areas} />
            </section>

            <section className="mb-3 mt-3 overflow-hidden rounded-lg border border-gray-200">
                <section 
                    className="bg-yellow-900 px-2.5 pt-3 pb-3 rounded-t-xl flex items-end justify-between"
                >
                    <article>
                        <div className="flex gap-1 justify-start items-center mb-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 lg:w-18 text-gray-200">
                                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-gray-100">
                                <h2 className="font-semibold -mb-1.5 tracking-tight lg:text-lg">Mr. Eric E. Ungos</h2>
                                <small className="text-yellow-100 text-sx font-light lg:text-md">Chairman</small>
                            </div>
                        </div>
                    </article>
                </section>
                <div
                    className={`grid transition-[grid-template-rows]
                                duration-500 ease-in-out grid-rows-[1fr]`}
                >
                    <div className="min-h-0 overflow-hidden">
                        <div>
                            <ul className="space-y-3 mt-2">
                                {specialCommittee.committee.map((c, index) =>(
                                    <li key={index} className="py-2 px-4 hover:bg-yellow-900 hover:text-gray-50 transition-all hover:border-s-4 border-yellow-700">
                                        <h3 className="-mb-1.5 font-medium text-sm cursor-default lg:text-lg">{c.name}</h3>
                                        <small className="font-light text-xs tracking-wide cursor-default lg:text-md">{c.position}</small>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DirectoryTaskForce;