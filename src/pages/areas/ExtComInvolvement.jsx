import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 6",
  title: "Extension and Community Involvement",

  description:
    "This area covers the institution's extension programs, community engagement initiatives, and partnerships designed to address community needs, share institutional expertise, and promote sustainable community development.",

  focalPerson: {
    name: "Engr. Jean karla M. Castillo",
    email: "jeankarla.castillo@g.batstaate-u.edu.ph",
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
      description:[
        { title: 'Copy of the benchmark survey instrument', link: 'https://drive.google.com/drive/folders/1ODhO1EqVz3fkz9QK_-jwq4DOolNVJjXs?usp=drive_link' },
        { title: 'Evidence of complementation between the curriculum of the program under survey and its extension program', link: 'https://drive.google.com/drive/folders/1UAB4vASHDnNbHfTrKLv73Hp3Swto3nYd?usp=drive_link' },
        { title: 'List of linkages established with extension-oriented agencies', link: 'https://drive.google.com/drive/folders/1sADfjW5_DMaTviH4I1P_fqEF5ALJkEY2?usp=drive_link' },
        { title: "Copies of MOA or MOU with partner or collaborating GA's, NGO's, and institutions", link: 'https://drive.google.com/drive/folders/13oZybMILFwnvVxw_yxov_JLdRFEUkTtA?usp=drive_link' }
      ]
    },
    {
      id: "B",
      title: "Planning, Implementation, Monitoring and Evaluation",
      description:[
        { title: 'Evidence of extension planning sessions', link: 'https://drive.google.com/drive/folders/1R7lIMS3iU2X8UA4cJXxEQ9Yp52MAWpL9?usp=drive_link' },
        { title: 'Copy of the extension program, including relevant information', link: 'https://drive.google.com/drive/folders/16a5Y8yyaIfXa6ARN3QVC2swOkmUw7wo_?usp=drive_link' },
        { title: 'Organizational Structure of the Extension Units', link: 'https://drive.google.com/drive/folders/168EZ51YsHgMBsJMN4rZ3CsZt-Tmi3EXi?usp=drive_link' },
        { title: 'Profile of the Unit Head and his/her staff', link: 'https://drive.google.com/drive/folders/16CYJW5aREC_FnFiJAwCM5fAs6-vMalT9?usp=drive_link' },
        { title: 'Operational plan of the Extension Program, with focus on implementation strategies', link: 'https://drive.google.com/drive/folders/1kFoHaiI4xsw07gByslUyE54BZtaslM9-?usp=drive_link' },
        { title: 'Roster/Experts for extension projects, if necessary', link: 'https://drive.google.com/drive/folders/1Pl06k-3XUhNQYNd9Z7c6m1uaktEBkaIe?usp=drive_link' },
        { title: 'Evidence of transfer of appropriate technology to the target clientele', link: 'https://drive.google.com/drive/folders/1WbK-6dluIz4O19GrUc0P-aR8yH45Vihb?usp=drive_link' },
        { title: 'Samples of packaged technologies/news/information disseminated to the clientele', link: 'https://drive.google.com/drive/folders/1OZYNi_v7ZzEjEagpDLziFRnl-yHo9o5-?usp=drive_link' },
        { title: 'Copy of the Extension Manual', link: 'https://drive.google.com/drive/folders/1fuHtVDQQLjk4CEy18ooaguBpwU3ABbux?usp=drive_link' },
        { title: 'Copy of the monitoring and evaluation instrument/s', link: 'https://drive.google.com/drive/folders/1w3Gu4bjjoR4yt2txHSOdcvQSBypJJhEd?usp=drive_link' },
        { title: 'Sample accomplishment and terminal reports', link: 'https://drive.google.com/drive/folders/12WdqON2mE8VFpeNF2K5wyEOo_w7Bf0jV?usp=drive_link' },
        { title: 'Copy of the budgetary allocation for the extension program', link: 'https://drive.google.com/drive/folders/12jVc9fFF99QG2iGf_xtpi0LQ2i2IfHRl?usp=drive_link' },
        { title: 'Evidences of outsourcing for fund augmentation', link: 'https://drive.google.com/drive/folders/1XLt8uRvBM06B8y0A8eTXG1qFMmriScBd?usp=drive_link' },
        { title: 'Evidence for outsourcing for technical assistance and service inputs from other agencies', link: 'https://drive.google.com/drive/folders/10bo9bsiUH9Vu797C_oxcjrkv1oEMxniR?usp=drive_link' }
      ]
    },
    {
      id : "C",
      title: "Community Involvement and Participation in the Extension Activities",
      description : [
          { title: 'Evidence of community participation in the planning and implementation of extension projects/activities', link: 'https://drive.google.com/drive/folders/11cs4LDGmfu6_YW9eWqQVANyUZCj9U8oT?usp=drive_link' },
          { title: 'Evidence of technology adoption, utilization and commercialization', link: 'https://drive.google.com/drive/folders/1GUXnxqCjzc0IX3fSBf2f2IK2l7UNoNcj?usp=drive_link' },
          { title: 'Copy of a long-term sustainable extension program, e.g. community development projects, etc.', link: 'https://drive.google.com/drive/folders/12-CicsyBT_t5ncpza16nlvLfciJb7jkC?usp=drive_link' },
          { title: 'List of collaborating agencies, including the nature of collaboration', link: 'https://drive.google.com/drive/folders/18oSv389V3FY5WwBvvDhb8WZDDnpjz5iN?usp=drive_link' }
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

        <AreaFiles />
      </div>

      {/* Parameters */}
      <AreaParameters parameters={parameters} />
    </div>
  );
};

export default ExtComInvolvement;
