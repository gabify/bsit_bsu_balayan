import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";
import bg from "../../assets/bg-picture.jpg";

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
      title: "Statement of Vission, Mission, Goals and Objectives",
      description:[
        {title: 'Vision Statement', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: 'Mission Statement', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: 'Statement of the goals of the academic unit', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: 'Statement of the program objectives', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: 'Copy the charter of the institution', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'}, 
        {title: 'Minutes of the meeting in the formulation, review and revision of VMGO', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: "File Copies of Letter of Invitation to Participants", link: "https://drive.google.com/drive/folders/1PhdOT68sxDkAKxUNw1-pHarQt9Jd0zol?usp=drive_link"},
        {title: "Attendance Record of Stakeholder-Participants", link: "https://drive.google.com/drive/folders/14imtkUwmbQvepmwOqXW3XYtqBkOJ9-bs?usp=drive_link"},
        {title: "Copies of CMO's Relevant to VMGO Formulation if any", link:"https://drive.google.com/drive/folders/1UZ-VugkK7o6H_aE0mpkxU6NA09EnhvxW?usp=drive_link"},
      ]
    },
    {
      id: "B",
      title: "Dissemination and Acceptability",
      description:[
        {title: "DISPLAY BOARDS ON WHICH THE VMGO IS POSTED", link:"https://drive.google.com/drive/folders/17skyObwlV9Nj-TJwFHK8UvOG1uQOuXhp?usp=drive_link"},
        {title: "SAMPLES OF DISSEMINATION MATERIALS(BROCHURES, LEAFLETS, FLYERS, ETC.)", link:"https://drive.google.com/drive/folders/1yyCxp7DFttu5wakAhTboW95NDqcVZMQu?usp=drive_link"},
        {title: "EVIDENCE OF AWARENESS AND ACCEPTABILITY OF VMGO", link: "https://drive.google.com/file/d/1o5ZG8V8kmDWETQaHy912sekXJWlFSYq4/view?usp=drive_link"}
      ]
    },
    {
      id: "C",
      title: "Congruence and Implementation",
      description:[
        {title: "CONGRUENCE BETWEEN EDUCATIONAL PRACTICES/ACTIVITIES AND THE VMGO", link: "https://drive.google.com/drive/folders/1-Vg3SGfBwOMjV-isbkidFG5yV2nGvZ6F?usp=drive_link"},
        {title: "REWARDS/CITATIONS RECEIVED BY THE PROGRAM UNDER SURVEY", link:"https://drive.google.com/drive/folders/1UJmMGD_JFK3lVmE6ZoCk4vLKqebv_PtT?usp=drive_link"},
        {title: "LIST OF LINKAGES, CONSORTIA AND  NETWORKING", link: "https://drive.google.com/file/d/1Fd6FMbspapXJV12LpVSamC44tn-gVyuG/view?usp=drive_link"},
        {title: "DATA ON EMPLOYABILITY OF GRADUATES", link:"https://drive.google.com/file/d/1f7Yz5mdJ2PZKam9QHsa8PmcN1D24EUP2/view?usp=drive_link"}
      ]
    },
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

        <AreaFiles />
      </div>

      {/* Parameters */}
      <AreaParameters parameters={parameters} />
    </div>
  );
};

export default VMGO;
