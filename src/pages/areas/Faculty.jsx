import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 2",
  title: "Faculty",

  description:
    "This area covers the qualifications, recruitment, development, performance, and welfare of faculty members, ensuring that teaching personnel are competent, professionally qualified, and capable of delivering quality instruction.",

  focalPerson: {
    name: "Mrs. Annalyn G. Macatangay",
    email: "annalyn.macatangay@g.batstate-u.edu.ph",
  },

  parameters: [
    {
      id: "A",
      title: "Academic Qualifications and Professional Experience",
      description:[
        {title: "Copy of Qualification Standards", link: "https://drive.google.com/file/d/1sSasgVVXJuEZt_GX8HpbL6fVPOejWnxZ/view?usp=drive_link"},
        {title: "The Faculty's Personal Data Sheet", link:""},
        {title: "Profile of the faculty according to: ", link:""},
        {title: "List of Faculty who have received academic awards/recognition.", link: "https://drive.google.com/file/d/1sSasgVVXJuEZt_GX8HpbL6fVPOejWnxZ/view?usp=drive_link"},
      ]
    },
    {
      id: "B",
      title: "Recruitment, Selection and Orientation",
      description:[
        {title: "Policies on hiring and selection", link:""},
        {title: "Criteria used in the slection process", link: ""},
        {title: "Composition of the Screening Committee ", link:"https://drive.google.com/file/d/1Miq9ez6eBGg8zfpTOT132FGgiLjFlepm/view?usp=drive_link"},
        {title: "Evidence of the selection process showing the names of applicant", link: ""},
        {title: "Evidences of the Orientation Program for newly hired faculty", link: "https://drive.google.com/file/d/1UPSY2w_46zZMSG3TMpNJV8Fz1hkzUtBY/view?usp=drive_link"},
        {title: "Policies on inbreeding", link: "https://drive.google.com/file/d/1uvuucDBOpMSAvTdtLM-8Afqb5H-xlslp/view?usp=drive_link"}
      ]
    },
    {
      id: "C",
      title: "Adequate Faculty and Loading",
      description:[
        {title: "Roster of Faculty with Valid Professional license, if applicable", link:""},
        {title: "Faculty Manual", link: "https://drive.google.com/file/d/1jqtx87R5osD41APfNWhC-Tu6lDQi9xy8/view?usp=drive_link"},
        {title: "Copy of the Loading System", link:"https://drive.google.com/file/d/1Miq9ez6eBGg8zfpTOT132FGgiLjFlepm/view?usp=drive_link"},
        {title: "Report on Faculty-Student Ratio", link: "https://docs.google.com/document/d/1-RFSLtolwLwgxOwZKLn60t0yVyQATmRx/edit?usp=drive_link&ouid=117557882749063467705&rtpof=true&sd=true"},
        {title: "Files of Individual Faculty Load", link: "https://drive.google.com/drive/folders/1dYkXXd4x2tZ5sYZ1NBNF7bD3TsgDfkvZ?usp=drive_link"}
      ]
    },
    {
      id: "D",
      title: "Rank and Tenure",
      description:[
        {title: "Policies on rank and tenure including pertinend Board Resolutions", link: ""},
        {title: "Copy of the Merit System and Promotion Plan", link: "https://drive.google.com/file/d/1hWVhcZqwTELg6V4xqYpaH9Digwe1WUZe/view?usp=drive_link"},
        {title: "Profile of the Faculty according to:", link: ""},
        {title: "List of Faculty arranged according to academic rank", link: "https://docs.google.com/spreadsheets/d/1yEPb7xc4S5YUynB1Ld4elb0PRqlPLpKA/edit?usp=drive_link&ouid=117557882749063467705&rtpof=true&sd=true"},
      ]
    },
    {
      id: "E",
      title: "Faculty Development",
      description:[
        {title: "Copy of the Faculty Development Program", link: ""},
        {title: "Summary of Faculty who were granted scholarship, fellowship, etc. ", link: "https://drive.google.com/file/d/1B0v_qjzgJEedw6secAJaGyFUo_5_b3Os/view?usp=drive_link"},
        {title: "File copies of Scholarship/ Fellowship/ Training Contract", link: ""},
        {title: "Summary of in-service training conducted in campus bu the program under survey, including list of faculty-participants", link: ""},
        {title: "Budgetary allocation for faculty development", link: "https://drive.google.com/file/d/1WcbLNTwBiOKi0s_YpOe8cgWhiGrdfjUO/view?usp=drive_link"}
      ]
    },
    {
      id: "F",
      title: "Professional Performance and Scholarly Works",
      description:[
        {title: "List of publications where faculty outputs are published", link: ""},
        {title: "Updated course syllabi of individual faculty", link: "https://drive.google.com/file/d/1B0v_qjzgJEedw6secAJaGyFUo_5_b3Os/view?usp=drive_link"},
        {title: "Samples of instructional materials developed and produced by the faculty (workbook, manual, module, ICT materials etc.)", link: ""},
        {title: "Composition and Profile of the Instructional Materials Development Committee", link: "https://drive.google.com/file/d/1SEtaPIcPukbxSyW23Gsn9jLlsFwzJi8d/view?usp=drive_link"},
        {title: "Faculty who served as lecturer, resource person, consultant in his/her field of specialization as well as in allied disciplines", link: ""}
      ]
    },
    {
      id: "G",
      title: "Salaries, Fringe Benefits and Incentives",
      description:[
        {title: "Policies and guidelines on salaries, benefits and privileges, including the system of availment", link: "https://drive.google.com/drive/folders/1_Wpwg3Xjwkrn3SQzrt2Gc-CIHFcekuhH?usp=drive_link"},
        {title: "List of privileges, fringe benefits as well as incentives.", link: "https://drive.google.com/file/d/1UJ8wZn0exfknATBiU54UWv7ibbHHgzOT/view?usp=drive_link"},
        {title: "Copy of the Plantilla.", link: "https://drive.google.com/drive/folders/1aXrgj8Pb0btWTropRb7P8eP5_a_nKDob?usp=drive_link"},
        {title: "Evidence/s that fringe benefits and incentives are provided to the faculty.", link:""},
        {title: "Description of the Faculty Performance Evaluation System, including the instrument/s used.", link: "https://drive.google.com/drive/folders/1fiYaY720OtduXP4l89ewUp5n4t0g5GVL?usp=drive_link"},
        {title: "List of faculty given recognition/ award/credits for outstanding performance and production of scholarly works.", link:""}
      ]
    },
    {
      id: "H",
      title: "Professionalism",
      description:[
        {title: "Evidence/s on faculty attendance in class and other institutional activities.", link: "https://drive.google.com/drive/folders/10mKcrmHaMRXOYwiPOueg1iU-lnBwRi40?usp=drive_link"},
        {title: "Minutes ofMeetings Conducted", link: "https://drive.google.com/drive/folders/16FT-dfyzgxsfOifUQiolQ2wKSlrpka0B?usp=drive_link"},
        {title: "Evidence on Submission of Required Reports by the faculty.", link: "https://drive.google.com/file/d/10jnsC-4-O27xCS5Dq9iRDU5tNSULu5c8/view?usp=drive_link"},
        {title: "Personnel Records on Administrative/Disciplinary Cases, if any.", link: ""},
        {title: "Records of termination cases, if any.", link: ""},
        {title: "Evidence/s of professional growth (advanced studies and attendance to seminars and other in­ service training).", link:"https://drive.google.com/drive/folders/1dxdjYl_sJ8LXyx5FwJRRVKeuZY1w7DC3?usp=drive_link"},
        {title: "Code of Professional Ethics/RA 6713 and other pertinent CSC issuances.", link: "https://drive.google.com/file/d/14GW4WaZSjFxksPoG_VXhZDT2-d_fe1H9/view?usp=drive_link"},
        {title: "Evidence/s of dissemination and observance of RA 6713, the Citizen's Charter and other pertinent legal issuances.", link:""}
      ]
    },
  ],
};

const Faculty = ({ area = defaultArea }) => {
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

export default Faculty;
