import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 8",
  title: "Physical Plant and Facilities",

  description:
    "This area covers the institution's physical infrastructure, classrooms, laboratories, equipment, utilities, and other facilities that provide a safe, accessible, and conducive environment for teaching, learning, research, and administrative activities.",

  focalPerson: {
    name: "Dr. Ma. Luz I. Sanchez",
    email: "luz.sanchez@g.batstate-u.edu.ph",
  },

  parameters: [
    {
      id: "A",
      title: "Site",
      description:[
        {title: "Site Development Plan.pdf", link: "https://drive.google.com/file/d/1R7KknkW4GtA95t2HNHqTp4Up16zPfLHl/view?usp=drive_link"},
        {title: "Evidence of Land Ownership", link: "https://drive.google.com/file/d/1DNcAYP0ewoTex7rsJHGvxv1C5psCfhPg/view?usp=drive_link"},
        {title: "Vicinity Map", link: "https://drive.google.com/file/d/1RQtGc5Bfxz37DHrqbz34EqcsHdKVwkpM/view?usp=drive_link"}
      ]
    },
    {
      id: "B",
      title: "Campus",
      description:[
        {title: "A copy of the Campus Development Plan", link: "https://drive.google.com/drive/folders/1Xeh0F0m-Km2d359x00Z6zXDYbrVfro1m?usp=drive_link"},
        {title: "Description of a mechanism to ensure the following", link: "https://drive.google.com/drive/folders/1ZpY492HBC4KzB-7qV5Let-KDPmSGo5uQ?usp=drive_link"}
      ]
    },
    {
      id: "C",
      title: "Buildings",
      description:[
        {title: "Approved building plan, showing the location of the different buildings in the campus", link: "https://drive.google.com/drive/folders/1CvFiSQ9EanqbQFXeLEWyN_Ht_NlLAMQs?usp=drive_link"},
        {title: "Evidence that electrical lines are safely installed and periodically checked", link: "https://drive.google.com/drive/folders/14UAQOPEhVEFueSHAcAbRnDn-xgITXCZu?usp=drive_link"},
        {title: "Schedule of water potability testing and pest control inspection", link: "https://drive.google.com/drive/folders/1TzEaEZ9cWBWKUUrdGuMJ6rrn3uWGQO_h?usp=drive_link"},
        {title: "PDF of the Janitorial staff, including work schedule", link: "https://drive.google.com/drive/folders/1ip_kpLSnEOo7fd5LngBO3xBe9TT2Bf83?usp=drive_link"}
      ]
    },
    {
      id: "D",
      title: "Classrooms",
      description:[
        {title: "Number of classrooms utilized by the program under survey", link: "https://drive.google.com/drive/folders/1O67COky5kelixaZCcDLx948hkcXy6cci?usp=drive_link"},
        {title: "Sample of Photographs of material resources inside the classroom", link: "https://drive.google.com/drive/folders/1ayMNMWr2uZVGyO_VCCgfq-t4VmXqHQGN?usp=drive_link"} 
      ]
    },
    {
      id: "E",
      title: "OFFICES, FUNCTION ROOMS AND STAFF ROOMS",
      description:[
        {title: "Photographs of offices and function rooms", link: "https://drive.google.com/drive/folders/1iupYwVHsrji5HUnCgD2zNAzwjY1CMwh1?usp=drive_link"},
        {title: "Inventory of equipment, amenities and supplies in function rooms and offices", link: "https://drive.google.com/drive/folders/12P26PsvzrrW7zJA54quFhZE8F4hi4IpS?usp=drive_link"},
        {title: "Availability of toilets and storeroom, where needed", link: "https://drive.google.com/drive/folders/1DIkqmbQgs-SVTkvgKAcsK6j-uweyI__f?usp=drive_link"},
        {title: "List and description of function rooms (administrative office, faculty rooms, faculty lounge, music room, conference hall,", link: "https://drive.google.com/drive/folders/1q2WU5aPvDpKUhn_lMG7_I4PxLY904vF4?usp=drive_link"},
        {title: "File copies of approved requests for the use of the function rooms", link: "https://drive.google.com/drive/folders/1kvONufwsvvefOV-7l84TJlQtzBzLvCWq?usp=drive_link"} 
      ]
    },
    {
      id: "F",
      title: "ASSEMBLY AND ATHLETIC FACILITIES",
      description:[
        {title: "Lay-out of the Sports Center", link: "https://drive.google.com/drive/folders/1L5DfiD_qYWfE-Jr4uB2-RYb3cz-DidVI?usp=drive_link"},
        {title: "Inventory of Sports Facilities", link: "https://drive.google.com/drive/folders/10bLYQJ4qFrdD1Iiny2eU-vEKCPi8sfJk?usp=drive_link"},
        {title: "List of Assembly Halls", link: "https://drive.google.com/drive/folders/1wDQBuXRxxzok6QAwVKpj24khxUvaT2RA?usp=drive_link"},
        {title: "Copy of rules and regulations in the use of assembly halls and sportsathletic facilities", link: "https://drive.google.com/drive/folders/1Hdc86NRm4SDUuMub6yka2-0o750MhUqy?usp=drive_link"}
      ]
    },
    {
      id: "G",
      title: "MEDICAL AND DENTAL CLINIC",
      description:[
        {title: "Floor Plan of the Medical and Dental Clinic", link: "https://drive.google.com/file/d/1oIpqbGvLcIP9TMg73uVxfNXVQY3hgQRV/view?usp=drive_link"},
        {title: "Qualification of the Medical and Dental Staff", link: "https://drive.google.com/file/d/1PNx9wGRhjaHwCZtcq0qH9BV5wS2kXCQz/view?usp=drive_link"},
        {title: "Inventory of Equipment, Supplies and Other Materials Resources", link: "https://drive.google.com/file/d/1p6J4gfL60FBkcMHEaPJHq6M-5d1Mr7HX/view?usp=drive_link"} 
      ]
    },
    {
      id: "H",
      title: "STUDENT CENTER",
      description:[
        {title: "Floor Plan of the Student Center showing the location of different offices", link: "https://drive.google.com/drive/folders/19K4ITsdXtFINurFAUuro0gbYfZcAkyTl?usp=drive_link"},
        {title: "Inventory of equipment, furniture and amenities at the SC", link: "https://drive.google.com/drive/folders/1O-EAMabCSWdkp69GU_sQeSgp2fZ3f3PO?usp=drive_link"} 
      ]
    },
    {
      id: "I",
      title: "FOOD SERVICES/CANTEEN",
      description:[
        {title: "Copy of the Permit to Operate conspicuously displayed", link: "https://drive.google.com/drive/folders/1_CG7r__KX5FlHDyb5uNL-PZpnQWzlidr?usp=drive_link"},
        {title: "Display board where food menufor the day, including prices are posted", link: "https://drive.google.com/drive/folders/15C73Z7unw8Su3EyVGfAGh_GIXMp1bmop?usp=drive_link"},
        {title: "Health Certificates of Canteen Staff and Food Handlers", link: "https://drive.google.com/drive/folders/1BnJ5cPwusmCGANHTQVIk8vltzclFnydj?usp=drive_link"},
        {title: "Inventory of equipment, furniture and amenities", link: "https://drive.google.com/drive/folders/1Iy-HsCqjjZxs-4CBBD0VIZ_EkNIViwHW?usp=drive_link"} 
      ]
    },
    {
      id: "J",
      title: "ACCREDITATION CENTER",
      description:[
        {title: "Inventory of equipment and furniture", link: "https://drive.google.com/drive/folders/1_RrAnQp-wzBPcmZ7sxr3Hl9_OOGVwDtC?usp=drive_link"}
      ]
    },
  ],
};

const PhysicalPlantFacilities = ({ area = defaultArea }) => {
  const { code, title, description, focalPerson, parameters } = area;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 text-slate-800">
      {/* Header */}
      <AreaHeader code={code} title={title} />

      {/* Description, focal person, and files */}
      <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
        <AreaDescription description={description} />

        <FocalPerson focalPerson={focalPerson} />

        <AreaFiles />
      </div>

      {/* Parameters */}
      <AreaParameters parameters={parameters} />
    </div>
  );
};

export default PhysicalPlantFacilities;
