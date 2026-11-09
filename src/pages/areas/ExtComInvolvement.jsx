import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 6",
  title: "Extension and Community Involvement",

  description:
    "This area covers the institution's extension programs, community engagement initiatives, and partnerships designed to address community needs, share institutional expertise, and promote sustainable community development.",

  focalPerson: {
    name: "Engr. Jean karla M. Castillo",
    email: "jeankarla.castillo@g.batstate-u.edu.ph",
  },

  files: [
    {
      id: 1,
      name: "Extension Program and Development Plan.pdf",
      url: "#",
    },
    {
      id: 2,
      name: "Community Needs Assessment Report.pdf",
      url: "#",
    },
    {
      id: 3,
      name: "Extension Activities and Accomplishment Reports.pdf",
      url: "#",
    },
  ],

  parameters: [
    {
        id: "A",
        title: "Priorities and Relevance",
        description: [
            {title: "Copy of the benchmark survey instrument", link: "https://drive.google.com/file/d/1MNYfpKXwSBCfh4p9wPfmKkZmWgE2fK9a/view?usp=drive_link"},
            {title: "Evidence of complementation between the curriculum of the program under survey and its extension program", link: "https://drive.google.com/file/d/1-WB9KUBv8JS0VgjCkiJbF0WUJn7iwwIO/view?usp=drive_link"},
            {title: "List of linkages established with extension-oriented agencies", link: "https://drive.google.com/file/d/1bPldgCxhHQpBxtc75vJBS0kdM_giL5Il/view?usp=drive_link"},
            {title: "Copies of MOA or MOU with partner or collaborating GA's, NGO's, and institutions", link: "https://drive.google.com/file/d/1Wri2OUbr3oS2lTHzm-pkCTHpxD93IbcL/view?usp=drive_link"}
        ]
    },
    {
        id: "B",
        title: "Planning, Implementation, Monitoring and Evaluation",
        description: [
            {title: "Evidence of extension planning sessions", link: "https://drive.google.com/file/d/1W0Yp7-GfSRFptqQnwYa-irsPKjwdgLFz/view?usp=drive_link"},
            {title: "Copy of the extension program, including relevant information", link: "https://drive.google.com/file/d/1qwYPhm2XGxpeR6Nuf1lEQpKvM0T1oSNP/view?usp=drive_link"},
            {title: "Organizational Structure of the Extension Units", link: "https://drive.google.com/file/d/1fmfF33Fep63kOcFxNI3-zD4zPTfL0nJc/view?usp=drive_link"},
            {title: "Profile of the Unit Head and his_her staff. Profile of the Unit Head and his_her staff. Profile of the Unit Head and his_her staff", link: "https://drive.google.com/file/d/1MeQPrKqCooAaCu9LF39oxuRNPp65jA9Q/view?usp=drive_link"},
            {title: "Operational plan of the Extension Program, with focus on implementation strategies", link: "https://drive.google.com/file/d/1ldL8QmO8AepBssyuSixIEv7gK5MtI981/view?usp=drive_link"},
            {title: "Roster/Experts for extension projects, if necessary", link: "https://drive.google.com/file/d/1pZorIsKWKpApGLo0KsAOvtSVisXyVunK/view?usp=drive_link"},
            {title: "Evidence of transfer of appropriate technology to the target clientele", link: "https://drive.google.com/file/d/16vKUne3CvnZLC7JFYnShU43qWL2YgXjL/view?usp=drive_link"},
            {title: "Samples of packaged technologies/news/information disseminated to the clientele", link: "https://drive.google.com/file/d/1MCfW9fuRDb4FtkTBPHkjtd-vLVkTGJ5r/view?usp=drive_link"},
            {title: "Copy of the Extension Manual", link: "https://drive.google.com/file/d/1U_wDGUapI4hyc9zelDzFuNayfhXZrzuV/view?usp=drive_link"},
            {title: "Copy of the monitoring and evaluation instrument/s", link: "https://drive.google.com/file/d/1m-MkfaI3ap1OW_T5rVuIypU7egAfcjdc/view?usp=drive_link"},
            {title: "Sample accomplishment and terminal reports", link: "https://drive.google.com/file/d/16rbrsY07yFS_T3tmOeleK_XurvHnOazT/view?usp=drive_link"},
            {title: "Copy of the budgetary allocation for the extension program", link: "https://drive.google.com/file/d/1ROvQrytEfhNffu_iyEdXYSHjCNfXcF6o/view?usp=drive_link"},
            {title: "Evidences of outsourcing for fund augmentation", link: "https://drive.google.com/file/d/1Kwh4INnle9w-dMqyGVVwwtBe7LAU5UhH/view?usp=drive_link"},
            {title: "Evidence for outsourcing for technical assistance and service inputs from other agencies", link: "https://drive.google.com/file/d/1wtH3I3bYZzmXKwFdoAqdRKp5BVksgAAh/view?usp=drive_link"}
        ]
    },
    {
        id: "C",
        title: "Community Involvement and Participation in the Extension Activities",
        description: [
            {title: "Evidence of community participation in the planning and implementation of extension projects/activities", link: "https://drive.google.com/file/d/155A3XRtcgpLEW00dAbwzv_4mpk7jJFdw/view?usp=drive_link"},
            {title: "Evidence of technology adoption, utilization and commercialization", link: "https://drive.google.com/file/d/1rxOEOufUxOmcP3r8LdnQHpAfrE90p-ym/view?usp=drive_link"},
            {title: "Copy of a long-term sustainable extension program, e.g. community development projects, etc.", link: "https://drive.google.com/file/d/15A_C65N-xM5EzBL2eoTcmIj1oru9bap_/view?usp=drive_link"},
            {title: "List of collaborating agencies, including the nature of collaboration", link: "https://drive.google.com/file/d/1t27uBlPkcWIgYUEyQaIrWfZf2-CmQEH4/view?usp=drive_link"}
        ]
    },
  ],
};

const ExtComInvolvement = ({ area = defaultArea }) => {
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

export default ExtComInvolvement;
