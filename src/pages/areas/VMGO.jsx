import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 1",
  title: "Vision, Mission, Goals and Objectives",

  description:
    "This area covers the institution’s statement of its vision, mission, goals and objectives, how these are shared with stakeholders, and how well they are understood and reviewed.",

  focalPerson: {
    name: "Dr. Jocelyn C. Banaybanay",
    email: "jocelyn.banaybanay@g.bastate-u.edu.ph",
  },

  parameters: [
      {
        id: "A",
        title: "Statement of Vision, Mission, Goals and Objectives",
        description: [
            {title: "Vision Statement", link: "https://drive.google.com/drive/folders/12TlEJ3kZXWG5PalAOKk9z1dugHCDfMWQ?usp=drive_link"},
            {title: "Mission Statement", link: "https://drive.google.com/drive/folders/1ZdpW__LbeNHKoHAXVSeQrCHdOhSaKX_i?usp=drive_link"},
            {title: "Statement of the Goals of the Academic Units", link: "https://drive.google.com/file/d/1CaEG-LI7Sdv5iHuRSKiDUQwWp0vPyk_K/view?usp=drive_link"},
            {title: "Statement of the Program Objectives", link: "https://drive.google.com/file/d/1v7lYqKqHZWOpHIhZqhkqOlt0awzFwkvK/view?usp=drive_link"},
            {title: "Copy of the Charter of the Institution", link: "https://drive.google.com/file/d/13rbCJ0sChPRfptoyEN_ezlB0bfmrisXT/view?usp=drive_link"},
            {title: "Minutes of the Meeting in the Formulation, Review and Revision of the VMGO", link: "https://drive.google.com/drive/folders/1QqAq3_VDBwp9IGWw_5Pc9_5uLsulg0aw?usp=drive_link"},
            {title: "File Copies of Letter of Invitation to Participants", link: "https://drive.google.com/file/d/1L3KAZpX0xqXMULOaW570Gaa56NYMn6_Z/view?usp=drive_link"},
            {title: "Attendance Record of Stakeholder-Participants", link: "https://drive.google.com/drive/folders/14imtkUwmbQvepmwOqXW3XYtqBkOJ9-bs?usp=drive_link"},
            {title: "Copies of CMO's Relevant to VMGO Formulation, if any", link: "https://drive.google.com/drive/folders/1UZ-VugkK7o6H_aE0mpkxU6NA09EnhvxW?usp=drive_link"}
        ]
    },
    {
        id: "B",
        title: "Dissemination and Acceptability",
        description: [
            {title: "Display Boards on Which the VMGO Is Posted", link: "https://drive.google.com/drive/folders/17skyObwlV9Nj-TJwFHK8UvOG1uQOuXhp?usp=drive_link"},
            {title: "Samples of Dissemination Materials (Brochures, Leaflets, Flyers, etc.)", link: "https://drive.google.com/drive/folders/1yyCxp7DFttu5wakAhTboW95NDqcVZMQu?usp=drive_link"},
            {title: "Evidence of Awareness and Acceptability of VMGO", link: "https://drive.google.com/drive/folders/180BzO4gKjJBIgE4Iztvw4NwwVp3zNRCQ?usp=drive_link"}
        ]
    },
    {
        id: "C",
        title: "Congruence and Implementation",
        description: [
            {title: "Congruence Between Educational Practices/Activities and the VMGO", link: "https://drive.google.com/drive/folders/1-Vg3SGfBwOMjV-isbkidFG5yV2nGvZ6F?usp=drive_link"},
            {title: "Rewards/Citations Received by the Program Under Survey", link: "https://drive.google.com/drive/folders/1UJmMGD_JFK3lVmE6ZoCk4vLKqebv_PtT?usp=drive_link"},
            {title: "List of Linkages, Consortia and Networking", link: "https://drive.google.com/drive/folders/15wo1H9Xt39N2_9s92SBmP7YBhmsmvAIA?usp=drive_link"},
            {title: "Data on Employability of Graduates", link: "https://drive.google.com/drive/folders/1Hc6NRCcVeYUKKbkUS3Pu3urGBXb3lAz_?usp=drive_link"}
        ]

    }
  ],
};

const VMGO = ({ area = defaultArea }) => {
  const { code, title, description, focalPerson, parameters } = area;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 text-slate-800 relative isolate overflow-hidden">
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

export default VMGO;
