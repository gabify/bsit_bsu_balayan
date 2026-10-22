import NameBanner from "../../components/directiryTaskForce/NameBanner";
import Accordion from "../../components/Accordion";
import DirectoryModal from "../../components/DirectoryModal";

const DirectoryTaskForce = () =>{
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
            title: 'Curriculum And Instruction',
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

            <section className="space-y-4 lg:hidden">
                <Accordion data={areas} />
            </section>

            <section className=" my-10 hidden lg:grid grid-cols-2 grid-flow-col grid-rows-5 gap-3">
                <DirectoryModal data={areas} />
            </section>
        </main>
    )
}

export default DirectoryTaskForce;