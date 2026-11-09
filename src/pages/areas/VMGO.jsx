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
              {title: "Vision Statement", link: "https://drive.google.com/file/d/14Cmzt2ljqZ05GPtoUVuuotaMqMQXe8Tg/view?usp=drive_link"},
              {title: "Mission Statement", link: "https://drive.google.com/file/d/1d7asP2moKdfl4gFhU1DmmALa5KYT8XtP/view?usp=drive_link"},
              {title: "Statement of the Goals of the Academic Units", link: "https://drive.google.com/file/d/1OzPHx6oA-XrhywFqtDaIyp80qcXl6IUV/view?usp=drive_link"},
              {title: "Statement of the Program Objectives", link: "https://drive.google.com/file/d/1QC31afdksw9hbMiaKEShQaf_9Yp9DeB0/view?usp=drive_link"},
              {title: "Copy of the Charter of the Institution", link: "https://drive.google.com/file/d/1jOnL6-JEPP-HysLRI401VNaADeHe92nN/view?usp=drive_link"},
              {title: "Minutes of the Meeting in the Formulation, Review and Revision of the VMGO", link: "https://drive.google.com/file/d/16vWuk50MbDM5P-fvDVv1ukYYukLpi-G6/view?usp=drive_link"},
              {title: "File Copies of Letter of Invitation to Participants", link: "https://drive.google.com/file/d/1ulqINJ5kxwXxmdc3ruZwQQ6OpMiJluR4/view?usp=drive_link"},
              {title: "Attendance Record of Stakeholder-Participants", link: "https://drive.google.com/file/d/1MIS4Ez137nDMsgcexgW_zBME9nMja_tp/view?usp=drive_link"},
              {title: "Copies of CMO's Relevant to VMGO Formulation, if any", link: "https://drive.google.com/file/d/1ix-7nbj9Oipui6IY-7429NiCQQSMeQp3/view?usp=drive_link"}
          ]
      },
      {
          id: "B",
          title: "Dissemination and Acceptability",
          description: [
              {title: "Display Boards on Which the VMGO Is Posted", link: "https://drive.google.com/file/d/1KQ76MQMV_uQaCdzk78m4SDagBZXoYC-V/view?usp=drive_link"},
              {title: "Samples of Dissemination Materials (Brochures, Leaflets, Flyers, etc.)", link: "https://drive.google.com/file/d/1RQw_Q3mvg3Uj8cFaneyuG_J0OcmDIe3p/view?usp=drive_link"},
              {title: "Evidence of Awareness and Acceptability of VMGO", link: "https://drive.google.com/file/d/12ZLIKx1aCoLUkNxj9__sEmzylxMpg5MK/view?usp=drive_link"}
          ]
      },
      {
          id: "C",
          title: "Congruence and Implementation",
          description: [
              {title: "Congruence Between Educational Practices/Activities and the VMGO", link: "https://drive.google.com/file/d/1MZtPv1O1fa94Ute5Io7sL7L0xvs60n34/view?usp=drive_link"},
              {title: "Rewards/Citations Received by the Program Under Survey", link: "https://drive.google.com/file/d/1T7BPsqgb4hnszcpyI5pKtWcTNLOrg17I/view?usp=drive_link"},
              {title: "List of Linkages, Consortia and Networking", link: "https://drive.google.com/file/d/1LheWEKct9yMSFL-zwRwnPINR7gi_ujUA/view?usp=drive_link"},
              {title: "Data on Employability of Graduates", link: "https://drive.google.com/file/d/1GKpQAVf5l_xy8W8IeZLVbK2jldigbXkU/view?usp=drive_link"}
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
