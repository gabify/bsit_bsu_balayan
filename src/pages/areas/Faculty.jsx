import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
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
        description: [
            {title: "Copy of Qualification Standards", link: "https://drive.google.com/drive/folders/1D2ehZjp8BHqDrhZqtxqVRw6iTAKo8cfw?usp=drive_link"},
            {title: "The Faculty's Personal Data Sheet", link: "https://drive.google.com/drive/folders/15iYHS0lKC2Dg_l2k813h6vwkFc9sm87t?usp=drive_link"},
            {title: "Profile of the Faculty According to:", link: "https://drive.google.com/drive/folders/14EuBRS_S7Q_9AbR2epODWlCcpanxdNIm?usp=drive_link"},
            {title: "List of Faculty Who Have Received Academic Awards/Recognition", link: "https://drive.google.com/drive/folders/1sYgqkSpY-WqTDi7iyoCTJ9lBdPw11Cqh?usp=drive_link"}
        ]
    },
    {
        id: "B",
        title: "Recruitment, Selection and Orientation",
        description: [
            {title: "Policies on Hiring and Selection", link: "https://drive.google.com/drive/folders/1HBCphKWWFbj8W0L5L7yK_la9TU6dnVot?usp=drive_link"},
            {title: "Criteria Used in the Selection Process", link: "https://drive.google.com/drive/folders/1CoXF4fIqjojEz8x8Mk-jXMV21Hud-9PO?usp=drive_link"},
            {title: "Composition of the Screening Committee", link: "https://drive.google.com/drive/folders/1puIF91A4ViyQcWb_Blww4CKdzHs2Tbxd?usp=drive_link"},
            {title: "Evidence of the Selection Process Showing the Names of Applicants", link: "https://drive.google.com/drive/folders/16cmd8uBje7vOXwJdVlKs_r07oAoqdlms?usp=drive_link"},
            {title: "Evidences of the Orientation Program for Newly Hired Faculty", link: "https://drive.google.com/drive/folders/1jrOgu_QYB3O6KCK7iQQIB7a0xyC8qSIK?usp=drive_link"},
            {title: "Policies on Inbreeding", link: "https://drive.google.com/drive/folders/1ZIbvCunk2MIoWU4ukJutsgskDH0ZhG52?usp=drive_link"}
        ]
    },
    {
        id: "C",
        title: "Adequate Faculty and Loading",
        description: [
            {title: "Roster of Faculty with Valid Professional License, if Applicable", link: "https://drive.google.com/drive/folders/1Smvs4ptG4nxTxfdmwQdTImE1YVaBsVMA?usp=drive_link"},
            {title: "Faculty Manual", link: "https://drive.google.com/drive/folders/1X7dFzZgHU3MNd7NaiZd-FHoYfp_XN5Ks?usp=drive_link"},
            {title: "Copy of the Loading System", link: "https://drive.google.com/drive/folders/1cpTQjpAXKmStbkQFh6JvN2u63Rk-ZvsE?usp=drive_link"},
            {title: "Report on Faculty-Student Ratio", link: "https://drive.google.com/drive/folders/1WHkSnMOxyTUYTzHZoSO1o9GKDC00bLic?usp=drive_link"},
            {title: "Files of Individual Faculty Load", link: "https://drive.google.com/drive/folders/1Q7upzWPFE4oAM9TMIDRzPLmc-p69DrHd?usp=drive_link"}
        ]
    },
    {
        id: "D",
        title: "Rank and Tenure",
        description: [
            {title: "Policies on Rank and Tenure Including Pertinent Board Resolutions", link: "https://drive.google.com/drive/folders/1-RPFfvqttPlq_ywVA9VqB3ReKuP82F8W?usp=drive_link"},
            {title: "Copy of the Merit System and Promotion Plan", link: "https://drive.google.com/drive/folders/1jMCs5rpjk8RqKBF8ygaqbJUY_3H5SPER?usp=drive_link"},
            {title: "Profile of the Faculty According to:", link: "https://drive.google.com/drive/folders/1ekBNbgnf2p3LPEdH0y3BYW4RFmytKZbK?usp=drive_link"},
            {title: "List of Faculty Arranged According to Academic Rank", link: "https://drive.google.com/drive/folders/145iewi1NK1jl-Fb_iKixvzy1wzsb-QlV?usp=drive_link"}
        ]
    },
    {
        id: "E",
        title: "Faculty Development",
        description: [
            {title: "Copy of the Faculty Development Program", link: "https://drive.google.com/drive/folders/1X-0v04zbOyuOF6Yqe49nDgOx1E2VpQId?usp=drive_link"},
            {title: "Summary of Faculty Who Were Granted Scholarship, Fellowship, etc.", link: "https://drive.google.com/drive/folders/1klolWzH27Z8mRxhQ38LfJccB6Ca6z0t0?usp=drive_link"},
            {title: "File Copies of Scholarship/Fellowship/Training Contract", link: "https://drive.google.com/drive/folders/1y8vQ6YcC_wACpC6iQtK8eBaITZFEZzDB?usp=drive_link"},
            {title: "Summary of In-Service Training Conducted on Campus by the Program Under Survey, Including List of Faculty-Participants", link: "https://drive.google.com/drive/folders/1CIpg33-RAdlVW_jfwo5kJhHXBDfePGKe?usp=drive_link"},
            {title: "Budgetary Allocation for Faculty Development", link: "https://drive.google.com/drive/folders/1tjtz_yJ0X7ExmiLYhmPAF8sa_5FPmzSO?usp=drive_link"}
        ]
    },
    {
        id: "F",
        title: "Professional Performance and Scholarly Works",
        description: [
            {title: "Updated Course Syllabi of Individual Faculty", link: "https://drive.google.com/drive/folders/1pJRmqsYVRNHxNs9ytyOZSJnPreY62EQM?usp=drive_link"},
            {title: "Samples of Instructional Materials Developed and Produced by the Faculty (Workbook, Manual, Module, ICT Materials, etc.)", link: "https://drive.google.com/drive/folders/1_Ga2tITLtPWN1agOzYBBY5QjX-mMD1cX?usp=drive_link"},
            {title: "Composition and Profile of the Instructional Materials Development Committee", link: "https://drive.google.com/drive/folders/17d6iKwkX409kzt9jbI1vCCtMQCyiHxBc?usp=drive_link"},
            {title: "Faculty Who Served as Lecturer, Resource Person, Consultant in His/Her Field of Specialization as Well as in Allied Disciplines", link: "https://drive.google.com/drive/folders/13bQEuVlH3oducft-4p1qPkLuJu-wGY7K?usp=drive_link"},
            {title: "List of Publications Where Faculty Outputs Are Published", link: "https://drive.google.com/drive/folders/11wRAE6c4StNL4s2BzrVASHU2uCU0pFCf?usp=drive_link"}
        ]
    },
    {
        id: "G",
        title: "Salaries, Fringe Benefits and Incentives",
        description: [
            {title: "Policies and Guidelines on Salaries, Benefits and Privileges, Including the System of Availment", link: "https://drive.google.com/drive/folders/1_Wpwg3Xjwkrn3SQzrt2Gc-CIHFcekuhH?usp=drive_link"},
            {title: "List of Privileges, Fringe Benefits as Well as Incentives", link: "https://drive.google.com/drive/folders/1QFm7YgO2bEZ4ICQiK8CVtuKXvRgeMCZo?usp=drive_link"},
            {title: "Copy of the Plantilla", link: "https://drive.google.com/drive/folders/1aXrgj8Pb0btWTropRb7P8eP5_a_nKDob?usp=drive_link"},
            {title: "Evidence/s That Fringe Benefits and Incentives Are Provided to the Faculty", link: "https://drive.google.com/drive/folders/11CGagTUXDMv35YVRPj3k50zqImT3GTE9?usp=drive_link"},
            {title: "Description of the Faculty Performance Evaluation System, Including the Instrument/s Used", link: "https://drive.google.com/drive/folders/1fiYaY720OtduXP4l89ewUp5n4t0g5GVL?usp=drive_link"},
            {title: "List of Faculty Given Recognition/Award/Credits for Outstanding Performance and Production of Scholarly Works", link: "https://drive.google.com/drive/folders/1NSBuDjEoz0_X41FYXhP3dU7Tccy6JAyZ?usp=drive_link"}
        ]
    },
    {
        id: "H",
        title: "Professionalism",
        description: [
            {title: "Evidence/s on Faculty Attendance in Class and Other Institutional Activities", link: "https://drive.google.com/drive/folders/10mKcrmHaMRXOYwiPOueg1iU-lnBwRi40?usp=drive_link"},
            {title: "Minutes of Meetings Conducted", link: "https://drive.google.com/drive/folders/16FT-dfyzgxsfOifUQiolQ2wKSlrpka0B?usp=drive_link"},
            {title: "Evidence on Submission of Required Reports by the Faculty", link: "https://drive.google.com/drive/folders/1NGe8afUfMGX4cvnSrvsK5onIS3Z47vTj?usp=drive_link"},
            {title: "Personnel Records on Administrative/Disciplinary Cases, if Any", link: "https://drive.google.com/drive/folders/16EbsWcf7n2a681yvJW4eoqkJiZMIrtsr?usp=drive_link"},
            {title: "Records of Termination Cases, if Any", link: "https://drive.google.com/drive/folders/1mADD5FA_0_ysoPcnAgvg-gkEcqfwl3He?usp=drive_link"},
            {title: "Evidence/s of Professional Growth (Advanced Studies and Attendance to Seminars and Other In-Service Training)", link: "https://drive.google.com/drive/folders/1dxdjYl_sJ8LXyx5FwJRRVKeuZY1w7DC3?usp=drive_link"},
            {title: "Code of Professional Ethics/RA 6713 and Other Pertinent CSC Issuances", link: "https://drive.google.com/drive/folders/18q7UVgNIkk-_N4GBIb0LV6H6dgxz59m8?usp=drive_link"},
            {title: "Evidence/s of Dissemination and Observance of RA 6713, the Citizen's Charter and Other Pertinent Legal Issuances", link: "https://drive.google.com/drive/folders/11miCq3NsOSIZmPbpBbsXQc9pOdXvTowv?usp=drive_link"}
        ]    
    }
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
      </div>

      {/* Parameters */}
      <AreaParameters parameters={parameters} />
    </div>
  );
};

export default Faculty;
