import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 5",
  title: "Research",

  description:
    "This area covers the institution's research policies, priorities, programs, and activities, including faculty and student research, research dissemination, partnerships, and the application of research findings.",

  focalPerson: {
    name: "Dr. Marites M. Abdon",
    email: "marites.abdon@g.batstate-u.edu.ph",
  },


  parameters: [
    {
      id: "A",
      title: "Priorities and Relevance",
      description:[
        { title: 'Copy of the Institutional Research Agenda', link: 'https://drive.google.com/drive/folders/1AKUUWOhDNjLZ6DV6iC4dY_xgDpk5TTIE?usp=drive_link' },
        { title: 'Structure of the Research and Development Unit, including the Profile of the Research Head', link: 'https://drive.google.com/drive/folders/1DBGdlW4OcyS7FfjBBCC2mVWSQYU8rcpU?usp=drive_link' },
        { title: 'Copy of the Research Program of the', link: 'https://drive.google.com/drive/folders/1_FID-4XBH706VXzFf2ZJOVBtAERJjp2L?usp=drive_link' },
        { title: 'Evidence oof Participation of different stakeholders', link: 'https://drive.google.com/drive/folders/1s8W5TLXKCVx94-4XMYeJyAw5vwFjDacF?usp=drive_link' },
        { title: 'Abstracts of researches conducted', link: 'https://drive.google.com/drive/folders/1Op3GC10s2j9znE0Gwu72x2gJ4LzwsT-9?usp=drive_link' }
      ]
    },
    {
      id: "B",
      title: "Funding and Other Resources",
      description:[
        { title: 'Copy of the budget allocation for research', link: 'https://drive.google.com/drive/folders/1X7jcSCEFBytEEHJ0CwY_Nai2Bqj1GDfh?usp=drive_link' },
        { title: 'List of Linkages_Networking with Research Funding', link: 'https://drive.google.com/drive/folders/1G3PP-9i48kMYmTYRkLYNFr9hSVBKsPWR?usp=drive_link' },
        { title: 'Inventory of the Research Facilities, equipment and', link: 'https://drive.google.com/drive/folders/17SQPxeTsezfUn7Ny6-VWDQWj_XAz_6qj?usp=drive_link' },
        { title: 'Profile of the reserch personnelstaff', link: 'https://drive.google.com/drive/folders/1hQtBvbt4SRgfMStTPAmSKgrO0JkC1rH7?usp=drive_link' },
        { title: 'List of patents, licenses, copyrights,and', link: 'https://drive.google.com/drive/folders/1A_ckQpHwo9qmgotXWRm-XLtCYdljTtWM?usp=drive_link' },
        { title: 'Copy of the research staff development program', link: 'https://drive.google.com/drive/folders/1sMPfI5F3FNiPQsawaWmVIfKjOn3QZMGY?usp=drive_link' },
        { title: 'List of Team Collaborative Researches', link: 'https://drive.google.com/drive/folders/1rIu0WfyvtKBojdtAevzHuOpc07Va3KXn?usp=drive_link' }
      ]
    },
    {
      id: "C",
      title: "Imlpementation, Monitoring and Evaluation",
      description:[
        { title: 'Copy of the Research Manual', link: 'https://drive.google.com/drive/folders/1n1XBK_wLHDCQor1521yBVKyq2CwaeHSC?usp=drive_link' },
        { title: 'Summary of Faculty researches conducted', link: 'https://drive.google.com/drive/folders/17rtpqoolSyOXZgh8hVOsZNKjYzXhbY6G?usp=drive_link' },
        { title: 'List of in-service training conducted', link: 'https://drive.google.com/drive/folders/1vpB-kKrtb1NBuCjsJs9a80flnK5z3QP3?usp=drive_link' },
        { title: 'Report on in-house review conducted 2022-2026', link: 'https://drive.google.com/drive/folders/1ZOBEGnh6RwogLkj86BGYLsVrR5F_M4JL?usp=drive_link' },
        { title: 'Evidences that research results have been utilized', link: 'https://drive.google.com/drive/folders/15AqdFOB7JYFBo9qVn7rOVeQJJk3mKzxX?usp=drive_link' },
        { title: 'Policies pertining to Intellectual Property Rights', link: 'https://drive.google.com/drive/folders/1zv4nGi3jK7K18P_C5cz_FY-sYLA-gi_8?usp=drive_link' }
      ]
    },
    {
      id: "D",
      title: "Publication",
      description:[
        { title: 'Evidence of publication and dissemination of research', link: 'https://drive.google.com/drive/folders/1W1AaczmOhW8WTUisHTtsWsr908Qt0bTE?usp=drive_link' },
        { title: 'List of dissemination activities conducted', link: 'https://drive.google.com/drive/folders/152wEP0HUVao_rx_rjGf6C7v4Ci0zfiah?usp=drive_link' },
        { title: 'Copies of published articles', link: 'https://drive.google.com/drive/folders/1i1WQZdOoOwA6EoPmLVtIajvbeis0dP34?usp=drive_link' },
        { title: 'Linkages established for exchange of research publications', link: 'https://drive.google.com/drive/folders/1rWGCEqP9gaLirUN8mx2Xc_RUpJqX6u0q?usp=drive_link' },
        { title: 'Composition of a Technical Committee to edit', link: 'https://drive.google.com/drive/folders/1WM3Jv7Pvw4aGDQVtCci8jxqbGmRc5AXy?usp=drive_link' },
        { title: 'List of Faculty who served as paper presentors', link: 'https://drive.google.com/drive/folders/1lv7yxnUmUmTw3MmAxIBcDKqDknYJk-Cv?usp=drive_link' }
      ]
    },
  ],
};

const Research = ({ area = defaultArea }) => {
  const { code, title, description, focalPerson, parameters } = area;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 text-slate-800">
      {/* Header */}
      <AreaHeader code={code} title={title} />

      {/* Description, focal person, and files */}
      <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
        <AreaDescription description={description} />

        <FocalPerson focalPerson={focalPerson} />

        <AreaFiles   />
      </div>

      {/* Parameters */}
      <AreaParameters parameters={parameters} />
    </div>
  );
};

export default Research;
