import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 10",
  title: "Administration",

  description:
    "This area covers the institution's administrative organization, leadership, management practices, policies, and processes that support the effective delivery of academic programs and institutional services.",

  focalPerson: {
    name: "Mr. Ruel M. Panday",
    email: "ruel.panday@g.batstate-u.edu.ph",
  },

  parameters: [
    {
        id: "A",
        title: "Organization",
        description: [
            {title: "Organizational Chart of the Institution displayed at he Administration Office", link: "https://drive.google.com/drive/folders/1e9fv-N2rHzIPGS5SzCv--tNr9JevdyQ0?usp=drive_link"},
            {title: "Copy of Board Resolution approving the organizational structure and other relevant resolutions", link: "https://drive.google.com/drive/folders/1u7f9z3kYfJqICbpG_DgYRnIsg4Vl3zLz?usp=drive_link"},
            {title: "Functional Chart", link: "https://drive.google.com/drive/folders/1agn2wnO4lr1D_eE95wcGqFzXFoPTto_X?usp=drive_link"},
            {title: "Composition of the Administrative Council including its powers and functions", link: "https://drive.google.com/drive/folders/1B19iZhNhum-tFhFbErffi4_cR_IpJzPh?usp=drive_link"},
            {title: "College-University Code", link: "https://drive.google.com/drive/folders/1n5AQUf85zGawep8USEiLtFla4r4qhRWu?usp=drive_link"},
            {title: "System of Communication Flow", link: "https://drive.google.com/drive/folders/1fYQ74ZD9S_HYSP5taQqe2uPpo7uORRcC?usp=drive_link"},
            {title: "Administrative-Operational Manual", link: "https://drive.google.com/drive/folders/1vpewxQceL9ZOl8QQkPKJKkdqXSafZiCF?usp=drive_link"},
            {title: "Qualification Standards for Administrative power and functions", link: "https://drive.google.com/drive/folders/1iYLAGHLgKCm5XOc4MVYImqxsCN1IhRkG?usp=drive_link"}
        ]
    },
    {
        id: "B",
        title: "Academic Administration",
        description: [
            {title: "Educational Profile and functions of the academic administrators", link: "https://drive.google.com/drive/folders/1_6gUfJ6u6z518S_lSf3VvxfDa5nZhnxi?usp=drive_link"},
            {title: "Evidence of Participatory administration in the College-Institute", link: "https://drive.google.com/drive/folders/1S_ipqXNeqmYSalqv5OliQdI9u2iY7KuX?usp=drive_link"},
            {title: "Dean_s Supervisory Program", link: "https://drive.google.com/drive/folders/18DaXIsE_PSzi1HEbdoz7Uip3G46nkkRq?usp=drive_link"}
        ]
    },
    {
        id: "C",
        title: "Student Administration",
        description: [
            {title: "Policies and guidelines on different aspects of student life", link: "https://drive.google.com/drive/folders/1EUXImP_2gmLlqY0OwHawjqqqUxZaHeIx?usp=drive_link"},
            {title: "Evidence of students participation in planning and implementation of student activities", link: "https://drive.google.com/drive/folders/1_ihP2cTuGyKIJgccdYQoZBBMixQRterz?usp=drive_link"},
            {title: "Evidence of good working relationship among the administration, faculty, staff and students", link: "https://drive.google.com/drive/folders/1BhxymJjFFlUGPb0t_CLx7fmcxk8ghfBT?usp=drive_link"}
        ]
    },
    {
        id: "D",
        title: "Financial Management",
        description: [
            {title: "Qualification of te Head of the FMO, inclduing his or her functions", link: "https://drive.google.com/drive/folders/1eXIQAjh-nU_a6Xx1Pjvmzqq9R3MeFoGz?usp=drive_link"},
            {title: "Guidelines in budget preparation", link: "https://drive.google.com/drive/folders/1pA50WraHgxjHXnGPQPmUoTs718xX6lPG?usp=drive_link"},
            {title: "Evidence of participation of the academic unit in budget allocation", link: "https://drive.google.com/drive/folders/1DrKr-nMT_Zj1IjcUI6kDcoZkKQsNB9_j?usp=drive_link"},
            {title: "Statement of budget priorities", link: "https://drive.google.com/drive/folders/17GZ3DfzN8Bmz9MGefj0EER1os-Z8We7z?usp=drive_link"},
            {title: "Plantilla of Administrative Personnel", link: "https://drive.google.com/drive/folders/1YUS63D0AMPyiccRjieyW78P0qqo-njLG?usp=drive_link"}
        ]
    },
    {
        id: "E",
        title: "Supply Management",
        description: [
            {title: "Composition of the Supply Management Office, including their qualifications, functions and responsibilities", link: "https://drive.google.com/drive/folders/1Dqs-dHDwj8TBSQQxbBuvbMnh7yAlAXtJ?usp=drive_link"},
            {title: "Descirption of teh system of Supply Management", link: "https://drive.google.com/drive/folders/1eOn7KoFYFpU601kJtstM7H9GRULZKXuh?usp=drive_link"},
            {title: "Composition and functions of the Bids and Awards Committee", link: "https://drive.google.com/drive/folders/1wRLr8V2e83JyOLyXF7a2BXYKQLa5R5T4?usp=drive_link"},
            {title: "Evidence of compliance to RA 9184 - Procurement of equipment, supplies and materials", link: "https://drive.google.com/drive/folders/1lJaMrLvIXSeeoCyP96d-6P-_1q5eNRz2?usp=drive_link"},
            {title: "File copies of annual inventories of serviceable and non-serviceable equipment", link: "https://drive.google.com/drive/folders/1Iq-xh_KwnqgI8O66Qf30rCoXv0LuKILC?usp=drive_link"}
        ]
    },
    {
        id: "F",
        title: "Records Management",
        description: [
            {title: "Composition of the Records Management Office, their qualifications and functions", link: "https://drive.google.com/drive/folders/10mFYd8FUZBT-Jv-Sp3cGMapTifmTtW_6?usp=drive_link"},
            {title: "Description of the records management in the institution", link: "https://drive.google.com/drive/folders/1O3s6bJGl9rkW89lR8JzTposDd25FqxBv?usp=drive_link"},
            {title: "Description of the system of maintaining the confidentiality and security of official records", link: "https://drive.google.com/drive/folders/1d-ueS9O1cKTCdHrgOgXkaKRY8TQqGC0_?usp=drive_link"},
            {title: "Updated records or files indeified under Administration", link: "https://drive.google.com/drive/folders/1nqHT2_ffAFkQdcZo-9LTqUj56d3gCYKr?usp=drive_link"}
        ]
    },
    {
        id: "G",
        title: "Institutional Planning and Development",
        description: [
            {title: "Composition of the Planning Unit, including their functions", link: "https://drive.google.com/drive/folders/119XjnkghVzNkd7VlbHGDIGRPJKPnahvA?usp=drive_link"},
            {title: "Copy of the Development Plan, long term and short term", link: "https://drive.google.com/drive/folders/14rDvILffkqsoWtVo1ZLHUm_x8M8yFfDa?usp=drive_link"},
            {title: "Evidence of participatory financial management", link: "https://drive.google.com/drive/folders/1m4hEp5kEZ66FC85CTqPIKD6PCNi-sL-1?usp=drive_link"},
            {title: "Description of inter-office sharing of resources (facilities and equipment)", link: "https://drive.google.com/drive/folders/1aq5ddfkzwmoBmvlblfDrOIJfwP8Uz2RM?usp=drive_link"},
            {title: "Copy of the Personnel Performance Evaluation instrument", link: "https://drive.google.com/drive/folders/13oFJK4WSiIsFH9kqwm7JXmSYCaFszf2P?usp=drive_link"},
            {title: "Evidence on the use of the Personnel Evaluation results to improve performance and delivery of services", link: "https://drive.google.com/drive/folders/155em8r0bm-x0Sr-YLDzRoZ400Bwkc4GY?usp=drive_link"},
            {title: "Annual Reports", link: "https://drive.google.com/drive/folders/1qGQI3D9DJl5gQV5g6a48ldbrwvYONYne?usp=drive_link"}
        ]
    }
  ],
};

const Administration = ({ area = defaultArea }) => {
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

export default Administration;
