import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
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
        title: "SITE",
        description: [
            {title: "Site Development Plan-Physical Plant-Plant Map Displayed Prominently in the Campus", link: "https://drive.google.com/file/d/1ocG-chH61gH1nQNHb1wHTvr7cz3zD9Rb/view?usp=drive_link"},
            {title: "Evidence of Land Ownership", link: "https://drive.google.com/file/d/16GleQGBFoYJ2lOmesZ60BkPuaNIlHtvq/view?usp=drive_link"},
            {title: "Vicinity Map", link: "https://drive.google.com/file/d/1R2Ak3EDflztDsjIQmhRAFCKqhk_tYX0a/view?usp=drive_link"}
        ]
    },
    {
        id: "B",
        title: "CAMPUS",
        description: [
            {title: "Copy of CAmpus Development Plan", link: "https://drive.google.com/file/d/1XI4yZYFJ2vI6MQyLfcN9GK6vOWxUhliL/view?usp=drive_link"},
            {title: "Traffic Safety In and Out of the Campus", link: "https://drive.google.com/file/d/1_46v_ziTktdraRjMrjK5ckuWOI1nK5aK/view?usp=drive_link"},
            {title: "Waste Management", link: "https://drive.google.com/file/d/1765kvNWoem5ihUWlJnKlEEVCmKSzdch6/view?usp=drive_link"},
            {title: "Maintenance, repair and upkeep of property", link: "https://drive.google.com/file/d/1NG1zAMUPxNayE-gEeurMFhIqFouHiXS-/view?usp=drive_link"},
            {title: "Cleanliness and orderliness in the campus", link: "https://drive.google.com/file/d/1yuDHsEl-t2UnPfnIOLg6jMn1HFcv7Qne/view?usp=drive_link"},
            {title: "Security of the Academic Community Inside the Campus", link: "https://drive.google.com/file/d/1PTIYCA9QBxD0hWa_V37iW7KsH7jpu7-M/view?usp=drive_link"}
        ]
    },
    {
        id: "C",
        title: "BUILDINGS",
        description: [
            {title: "Approved building plan, showing the location of the different buildings in the campus", link: "https://drive.google.com/file/d/1ofU-ZupBAngOW7Suhk-uuNAD3HVp_OyD/view?usp=drive_link"},
            {title: "Evidence that electrical lines are safely installed and periodically checked", link: "https://drive.google.com/file/d/10aqAB3INZka7f3mlRRP9q_sQ4FqaQwIf/view?usp=drive_link"},
            {title: "Schedule of water potability testing and pest control inspection", link: "https://drive.google.com/file/d/1ZhIAWBjr0d7IGkd8pKbNHUKrXAdsesgk/view?usp=drive_link"},
            {title: "PDF of the Janitorial staff, including work schedule", link: "https://drive.google.com/file/d/1qFtL2zNXgiTxd0ukDmvUTZiPXquu6cIE/view?usp=drive_link"}
        ]
    },
    {
        id: "D",
        title: "CLASSROOMS",
        description: [
            {title: "Number of classrooms utilized by the program under survey", link: "https://drive.google.com/file/d/1k5dzYK7TgS6dIuID3f-ZVYXtvs04WZRD/view?usp=drive_link"},
            {title: "Sample of Photographs of material resources inside the classroom", link: "https://drive.google.com/file/d/1Gou9l7qqdeZBFe7c-Y0WKzLyLPH34PmO/view?usp=drive_link"}
        ]
    },
    {
        id: "E",
        title: "OFFICES, FUNCTION ROOMS AND STAFF ROOMS",
        description: [
            {title: "Photographs of offices and function rooms", link: "https://drive.google.com/file/d/1doS6ZUApPL6LhywQxW1XVAFLHg2i7Jha/view?usp=drive_link"},
            {title: "Inventory of equipment, amenities and supplies in function rooms and offices", link: "https://drive.google.com/file/d/1qpZyAZTZ3u9KB7FqW8r4Pe0jmu8Mpye0/view?usp=drive_link"},
            {title: "Availability of toilets and storeroom, where needed", link: "https://drive.google.com/file/d/10nSH2XMdyoqjdOOseVu2ORKldjvhBvYo/view?usp=drive_link"},
            {title: "List and description of function rooms (administrative office, faculty rooms, faculty lounge, music room, conference hall,", link: "https://drive.google.com/file/d/1iVbqf9wJq7BytUwmtgIuFWglu-iwMhhY/view?usp=drive_link"},
            {title: "File copies of approved requests for the use of the function rooms", link: "https://drive.google.com/file/d/1rTugapIY5S3VFF9CtKy5ePGh5n2ArmJn/view?usp=drive_link"}
        ]
    },
    {
        id: "F",
        title: "ASSEMBLY AND ATHLETIC FACILITIES",
        description: [
            {title: "Lay-out of the Sports Center", link: "https://drive.google.com/file/d/1-beGH5MJj7wbpE0H0paSGbQ7DB3RgblX/view?usp=drive_link"},
            {title: "Inventory of Sports Facilities", link: "https://drive.google.com/file/d/1fUkUWyE-ZO5Ui-ZewiAqraZeLWRxRbVZ/view?usp=drive_link"},
            {title: "List of Assembly Halls", link: "https://drive.google.com/file/d/1ZQl1U55ZY9aO_sy-XZW4q97Qoj2q2QTw/view?usp=drive_link"},
            {title: "Copy of rules and regulations in the use of assembly halls and sportsathletic facilities", link: "https://drive.google.com/file/d/1QuEgESdBsUL_r6Us95BYyiADhQgPj7Dm/view?usp=drive_link"}
        ]
    },
    {
        id: "G",
        title: "MEDICAL AND DENTAL CLINIC",
        description: [
            {title: "Floor Plan of the Medical and Dental Clinic", link: "https://drive.google.com/file/d/1oIpqbGvLcIP9TMg73uVxfNXVQY3hgQRV/view?usp=drive_link"},
            {title: "Qualification of the Medical and Dental Staff", link: "https://drive.google.com/file/d/1PNx9wGRhjaHwCZtcq0qH9BV5wS2kXCQz/view?usp=drive_link"},
            {title: "Inventory of Equipment, Supplies and Other Materials Resources", link: "https://drive.google.com/file/d/1p6J4gfL60FBkcMHEaPJHq6M-5d1Mr7HX/view?usp=drive_link"}
        ]
    },
    {
        id: "H",
        title: "STUDENT CENTER",
        description: [
            {title: "Floor Plan of the Student Center showing the location of different offices", link: "https://drive.google.com/file/d/1X75nY0JCbpOxDpobzF_CeIHbNAFi1Peo/view?usp=drive_link"},
            {title: "Inventory of equipment, furniture and amenities at the SC", link: "https://drive.google.com/file/d/1BJd83cRphHLW3ySuCzYyAwmHknLU3TcW/view?usp=drive_link"}
        ]
    },
    {
        id: "I",
        title: "FOOD SERVICES/CANTEEN",
        description: [
            {title: "Copy of the Permit to Operate conspicuously displayed", link: "https://drive.google.com/file/d/1IzaW8PelrU7ciUqEnd-Yxgz4WqNi9HQT/view?usp=drive_link"},
            {title: "Display board where food menufor the day, including prices are posted", link: "https://drive.google.com/file/d/1L3SR6iW0MqLWsEHTu-ExAbRD6Rj_Vj_u/view?usp=drive_link"},
            {title: "Health Certificates of Canteen Staff and Food Handlers", link: "https://drive.google.com/file/d/18kH2f5wRp5vzGzIJxzv9V7-_68tqHIp-/view?usp=drive_link"},
            {title: "Inventory of Equipment and Furniture", link: "https://drive.google.com/file/d/1aKW97QFbrc2bqXUV8a41Ow7VgK9Tgjcy/view?usp=drive_link"}
        ]
    },
    {
        id: "J",
        title: "ACCREDITATION CENTER",
        description: [
            {title: "Inventory of Equipment, Furniture and Amenities", link: "https://drive.google.com/file/d/1KcWL5YA9biHyXqRcFesMgKEFRu2eEchq/view?usp=drive_link"}
        ]
    }
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
      </div>

      {/* Parameters */}
      <AreaParameters parameters={parameters} />
    </div>
  );
};

export default PhysicalPlantFacilities;
