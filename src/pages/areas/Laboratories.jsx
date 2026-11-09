import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 9",
  title: "Laboratories",

  description:
    "This area covers the adequacy, functionality, management, and maintenance of laboratories and specialized learning facilities that support practical instruction, experimentation, research, and the development of students' technical competencies.",

  focalPerson: {
    name: "Mr. Mark Anthony P. Ribaldo",
    email: "markanthony.ribaldo@g.batstate-u.edu.ph",
  },

  parameters: [
     {
        id: "A",
        title: "Laboratories-Shops-Facilities",
        description: [
            {title: "Building plan showing the location of laboratory rooms-shops used by the program under survey", link: "https://drive.google.com/drive/folders/1mjJ32i_EQKIHIB7R5zHl0EcmC9zeMu3i?usp=drive_link"},
            {title: "Copy of the laboratory lay-out", link: "https://drive.google.com/drive/folders/1N2Fmz1BhunT0tiHDpps2NrnerOJB1Jbw?usp=drive_link"},
            {title: "Inventory of available equipment, gadgets, fixtures in every laboratory", link: "https://drive.google.com/drive/folders/10msouC8-r170LbEDNFOt-NJlp17cy0MG?usp=drive_link"},
            {title: "Laboratory Manuals", link: "https://drive.google.com/drive/folders/1Npjfba-DB2jeeE-nyRTdwFc2ObOtxmQW?usp=drive_link"},
            {title: "First-aid Kit and Antidote charts displayed conspicuously", link: "https://drive.google.com/drive/folders/1xUdIXhvOJm8neptpNyckeoKcvfuQUerB?usp=drive_link"},
            {title: "List of safety and precautionary measures being implemented", link: "https://drive.google.com/drive/folders/1CDL1sJ3Nn-ER3DWBOoEVZGls77ORyXGw?usp=drive_link"},
            {title: "Evidence of training conducted on the proper use of laboratories", link: "https://drive.google.com/drive/folders/1EVXUaJJCmU_sbnb6rTXe4dZtAoP7nZRW?usp=drive_link"},
            {title: "Inventory of usable computer units and other equipment", link: "https://drive.google.com/drive/folders/13Ct6GyOncDdWfCJq-NKVLUiuUNnFkPna?usp=drive_link"},
            {title: "Guidelines in the use of computer laboratories", link: "https://drive.google.com/drive/folders/1yzp2UTbP91eL50VpH8Ih7hWPZlSxp1E3?usp=drive_link"},
            {title: "PDF of the designated computer technician-s", link: "https://drive.google.com/drive/folders/1zDYNMrKdjIXdKMVeZ0i2ktspTBY4dU0N?usp=drive_link"},
            {title: "nventory of equipment, fixtures, apparatuses, supplies and materials", link: "https://drive.google.com/drive/folders/1rlV8I1O2Q7fl3U4K0kEPppII3VfqYHqV?usp=drive_link"},
            {title: "Availability of a stockroom", link: "https://drive.google.com/drive/folders/13JAtiMdto1JbBXH6l_gPYXzfsDkGd2Oq?usp=drive_link"},
            {title: "Evidence on the availability of gas, water and electricity for practicum purposes", link: "https://drive.google.com/drive/folders/13bI8BQJfc7f8EY8mqH_StnjgjUEFwFhf?usp=drive_link"},
            {title: "Guidelines in the use of equipment and apparatuses", link: "https://drive.google.com/drive/folders/1svkOCoLvoBKjVG8FJiELMpW1hct3PgRN?usp=drive_link"}
        ]
    },
    {
        id: "B",
        title: "Equipment and Supplies",
        description: [
            {title: "Inventory of available equipment, apparatuses, supplies and materials", link: "https://drive.google.com/drive/folders/1ze_w2Wa1RrBxb8xJmAXge5369w8gFVfT?usp=drive_link"},
            {title: "List of fabricated tools and apparatuses, including relevant information", link: "https://drive.google.com/drive/folders/1VJzm6Xqdz81QKb-bd3SDwh2oJdY8rdrz?usp=drive_link"},
            {title: "List of fabricated equipment with patent (state patent number), if any", link: "https://drive.google.com/drive/folders/1a1Qyo8H7Am7WG8W283V-llVbl5Y1Io0K?usp=drive_link"}
        ]
    },
    {
        id: "C",
        title: "Maintenance",
        description: [
            {title: "Description of the system on_", link: "https://drive.google.com/drive/folders/160PfNeIfwN8WC7m0ydCYmi2N7bQWjjLD?usp=drive_link"},
            {title: "Composition of the Maintenance and Repair unit", link: "https://drive.google.com/drive/folders/1O4JT8ea6lDYlYgzU21c7qTqTyJ-bye8l?usp=drive_link"},
            {title: "PDF of the maintenance personnel", link: "https://drive.google.com/drive/folders/189PQiO5g0m4XlY60yKdfqAaLX_U9HT1P?usp=drive_link"}
        ]
    },
    {
        id: "D",
        title: "Special Provisions",
        description: [
            {title: "Evidence of compliance on the requirements and operation of laboratories, if applicable", link: "https://drive.google.com/drive/folders/1uxgIt4CLv3hshXed3o0rDcyqIFF1CgnY?usp=drive_link"}
        ]
    }
  ],
};

const Laboratories = ({ area = defaultArea }) => {
  const { code, title, description, focalPerson, parameters } = area;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 text-slate-800">
      {/* Header */}
      <AreaHeader code={code} title={title} />

      {/* Description, focal person, and files */}
      <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
        <AreaDescription description={description} />

        <FocalPerson focalPerson={focalPerson} />
      </div>

      {/* Parameters */}
      <AreaParameters parameters={parameters} />
    </div>
  );
};

export default Laboratories;
