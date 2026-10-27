import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 7",
  title: "Library",

  description:
    "This area covers the library's collection of learning resources, facilities, services, and technologies that support instruction, research, and the academic needs of students, faculty, and other institutional stakeholders.",

  focalPerson: {
    name: "Mrs. Ma. Cecilia D. De Vera",
    email: "cecilia.devera@g.batstate-u.edu.ph",
  },

  parameters: [
     {
        id : "A",
        title: "ADMINISTRATION",
        description : [
          {title: "Organizational Structure of the Library", link: "https://drive.google.com/file/d/1kVCtAjTNA7a6W9EuaMrYXxmwCpuKinG2/view?usp=drive_link"},
          {title: "Profile and Functions of the Head Librarian", link: "https://drive.google.com/file/d/1hUZxUqu5V-iOy3yPP_f9adlRH7aeUWIE/view?usp=drive_link"},
          {title: "Composition of the Library Advisory Committee including their functions", link: "https://drive.google.com/file/d/1abn9OSEKNJ-kFeKqRZ_MLkOlVDbpekYg/view?usp=drive_link"}
        ]
    },
    {
      id : "B",
      title: "STAFF PERSONNEL",
      description : [
        {title: "Profile of the Library staff personnel", link: "https://drive.google.com/file/d/1Kmf7olLdTN0W7OQiO5a8IeruORFnuUi_/view?usp=drive_link"},
        {title: "Evidence of Compliance on Adequacy of Library Personnel ", link: "https://drive.google.com/file/d/1JJzV7XngLSYm1OyFPbsSVSEqFdA82r_Q/view?usp=drive_link"},
        {title: "Copy of the Library Staff Development Plan", link: "https://drive.google.com/file/d/1VB6oEmbrWDL2LHdQi4ud5I5g0W6ZSh-x/view?usp=drive_link"},
        {title: "Library Staff Compensation", link: "https://drive.google.com/file/d/1uy4CoqJUWbxL782vvtlPVkVpAtoX0irZ/view?usp=drive_link"}      
      ]
    },
    {
      id : "C",
      title: "COLLECTION DEVELOPMENT, ORGANIZATION AND PRESERVATION",
      description : [
        {title: "Policies on  Collection Development", link: "https://drive.google.com/file/d/1P6yAT9aDoSJ7JTtuL-jnhDsxtxGlP7kt/view?usp=drive_link"},
        {title: "Inventory of Core Collection ", link: "https://drive.google.com/file/d/1X3JCuKScdgBPiEW1fPUdYs2UkZTyTcwa/view?usp=drive_link"},
        {title: "Evidence on the Provision for Non-Print, Digital and Electronic Resources", link: "https://drive.google.com/file/d/1VRXlbnc8gZmIvPu39AcMLs-rqq_hIrPT/view?usp=drive_link"},
        {title: "List of Research Books and Materials", link: "https://drive.google.com/file/d/1psHKXg26fbu3JVe88dLIz34tMirkw5po/view?usp=drive_link"},
        {title: "Inventory of Flipiniana Collections", link: "https://drive.google.com/file/d/1DpwGYTSYJ7pZ1VTyBKo3EQX8RBu-Zp4u/view?usp=drive_link"},
        {title: "Evidence of an Accepted and Standard Classification Scheme", link: "https://drive.google.com/file/d/1JJzV7XngLSYm1OyFPbsSVSEqFdA82r_Q/view?usp=drive_link"},
        {title: "Policies on Preservation, Care and Upkeep of Library Resources", link: "https://drive.google.com/file/d/1cJzhTXb_oFVb0O_mXhe2hiN2dSiuwlhb/view?usp=drive_link"},
        {title: "Evidence that the Library Resources are Provided", link: "https://drive.google.com/file/d/1RnhJbWHlV7sOje5tADzyu9tzAv5JBGt2/view?usp=drive_link"}
      ]
    },
    {
      id : "D",
      title: "SERVICES AND UTILIZATION",
      description : [
        {title: "Schedule of Library Hours Posted Conspicuously", link: "https://drive.google.com/file/d/1aDBL9S2oh_KwChsjgxcAk09jjKIwJuyz/view?usp=drive_link"},
        {title: "Copy of Library Rules and Regulations Posted Conspicuously", link: "https://drive.google.com/file/d/15crxl0OVLL6sr4ooPM__hUbHxQ2KoyP6/view?usp=drive_link"},
        {title: "Display Board Where List of New Book, Arrivals and Other Relevant Information are Posted", link: "https://drive.google.com/file/d/1zOERn-FajQkD1kvCKZYBU_h8tvp7aWzr/view?usp=drive_link"},
        {title: "Evidence on the Existence of an Integrated Library System (OPAC, Internet, CD Rom, Database, e=-library, etc.)", link: "https://drive.google.com/file/d/1u3DVHkXEq0yvtg7DFQ0INY-9APLiIzVP/view?usp=drive_link"},
        {title: "Summarized Statistical data on Library Resources Utilization", link: "https://drive.google.com/file/d/1nULxfZ02lrwXFVvr3gP8IiB5Kd_kqoLn/view?usp=drive_link"}
      ]
    },
    {
      id : "E",
      title: "PHYSICAL SET-UP AND FACILITIES",
      description : [
        {title: "Library Floor Plan Showing the Location of the Different Offices", link: "https://drive.google.com/file/d/1qPfi5ZOBvr6pLmCbNrZNVKpur0WBnmtG/view?usp=drive_link"},
        {title: "Description of Lighting, Ventillation, Safety and Security Conditions", link: "https://drive.google.com/file/d/1SV-cYnHYLnK_-zmpKfJkI-CFKyJO3iUC/view?usp=drive_link"},
        {title: "Inventory of Library, Furniture and Other Physical Amenities", link: "https://drive.google.com/file/d/1BdFEb82Il-kPRdw7S3Yp5_vJdyAZNoWC/view?usp=drive_link"}
      ]
    },
    {
      id : "F",
      title: "FINANCIAL SUPPORT",
      description : [
        {title: "Copy of the General Budgetary Allocation for the Library", link: "https://drive.google.com/file/d/1_ZTLV-hjMw3FWN3hGA31AKLkvzWIR2bK/view?usp=drive_link"},
        {title: "Evidence of the Head Librarian's Participation in Budget Preparation", link: "https://drive.google.com/file/d/1CyowK5KPC-UtBzrOg5mePWq_dT7hkerc/view?usp=drive_link"},
        {title: "Evidence that Library Fees are Utilized for Library Purposes", link: "https://drive.google.com/file/d/19E-smBnFuWPvrJyXsl8NQt_Xwot-wUCq/view?usp=drive_link"}
      ]
    },
    {
      id : "G",
      title: "Linkages",
      description : [
        {title: "G.1. List of Linkages Established for Exchange of Materials, Funding, and Technical Assistance", link: "https://drive.google.com/file/d/1wOrnKIfLhV_2L_6HfAm_XspW4Se9PlBq/view?usp=drive_link"}
      ]
    },
  ],
};

const Library = ({ area = defaultArea }) => {
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

export default Library;
