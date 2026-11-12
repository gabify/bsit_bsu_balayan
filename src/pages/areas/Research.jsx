import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
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
          description: [
              {title: "Copy of the Institutional Research Agenda", link: "https://drive.google.com/file/d/1R7k9F1JHEx40MKaWKB9iDxV5CV9H8tWr/view?usp=drive_link"},
              {title: "Structure of the Research and Development Unit, including the Profile of the Research Head", link: "https://drive.google.com/file/d/1yfEA1dkUGb58MCS8tqbovDrnZI954iU7/view?usp=drive_link"},
              {title: "Copy of the Research Program of the", link: "https://drive.google.com/file/d/1f20pGyiBQPtd2TsBI5QBWpfdVi44277f/view?usp=drive_link"},
              {title: "Evidence oof Participation of different stakeholders", link: "https://drive.google.com/file/d/1ZBKyOJxIY_zUnFqDfJP5rqXW5OEnPxmW/view?usp=drive_link"},
              {title: "Abstracts of researches conducted", link: "https://drive.google.com/file/d/1pjd2vB6VFRS8nimOfG9YoNj4C_0CndTD/view?usp=drive_link"}
          ]
      },
      {
          id: "B",
          title: "Funding and Other Resources",
          description: [
              {title: "Copy of Budget Allocation for Research", link: "https://drive.google.com/file/d/1sooRmyTEdM6EC4hWZRhhWjl0HXp_rcEU/view?usp=drive_link"},
              {title: "List of Linkagaes Networking with Research Funding Agencies", link: "https://drive.google.com/file/d/1ClN3WyjsBxPsbt-3fbKbgdZXOnrOJIFB/view?usp=drive_link"},
              {title: "Inventory of Research Facilities, Equipment and Amenities", link: "https://drive.google.com/file/d/178G3LM_Vp7EVxOTobve2mMf4qcX-0mXc/view?usp=drive_link"},
              {title: "Profile of Research Personnel/Staff", link: "https://drive.google.com/file/d/19Gk-xfs2BGLLUG0DlN5WDZLGv5M_3Ajw/view?usp=drive_link"},
              {title: "List of Patents, Licenses, Copyrights and other Research Outputs, icluding income generated from each of item, if any.", link: "https://drive.google.com/file/d/1x3Z3RsJNB0eZ0HTmjeXQK0MJedFp37mM/view?usp=drive_link"},
              {title: "Copy of Research Staff Development Program", link: "https://drive.google.com/file/d/1x8PiTKFvrcJfw0hF8gt9-gDvCsJoAENR/view?usp=drive_link"},
              {title: "Copy of the research staff development program", link: "https://drive.google.com/file/d/1NcSI1yOiXq1hGbcESJvSgnzKFyoDUnYv/view?usp=drive_link"}
          ]
      },
      {
          id: "C",
          title: "Implementation, Monitoring, Evaluation, and Utilization of Research Results/Outputs",
          description: [
              {title: "Copy of Research Manual", link: "https://drive.google.com/file/d/1aY19IY-LTRHLRs7p2in26itzNqvdZ56W/view?usp=drive_link"},
              {title: "Summary of Faculty Researches Conducted", link: "https://drive.google.com/file/d/1wbpgdII_yxCv4u5eL92iMhqy_rJ_Ap_O/view?usp=drive_link"},
              {title: "List of In-Service Training Conducted to Enhance Faculty Research Capabilities of Faculty", link: "https://drive.google.com/file/d/1vSHNTRGCZFxYzQLgzAkcCyaZn7sYtYl0/view?usp=drive_link"},
              {title: "Report on In-House Reviews Conducted", link: "https://drive.google.com/file/d/1-DNv4TjaOGHxHiix7sP4opeVe4JEMZVB/view?usp=drive_link"},
              {title: "Evidences that Research Results have been utilized", link: "https://drive.google.com/file/d/1KAmpy7hiNssj5VHEHJEcVOxzzd1OtXzw/view?usp=drive_link"},
              {title: "Policies pertaining to Intellectual Property Rights (IPR)", link: "https://drive.google.com/file/d/1m8lfohSkjSdDcS_yXAdRAcLCEBdL2Q1r/view?usp=drive_link"}
          ]
      },
      {
          id: "D",
          title: "Publication and Dissemination",
          description: [
              {title: "Evidence of Publication and Dissemination of Research Results", link: "https://drive.google.com/file/d/1iMLXgZH4AJIgnU63PRpxm1w5AixvUgUT/view?usp=drive_link"},
              {title: "List of Dissemination Activities Conducted (forum, conference, seminars, etc.)", link: "https://drive.google.com/file/d/1rYayAYL3VRSwHliHTDLOMOvg2EikVekH/view?usp=drive_link"},
              {title: "Copies of Published Articles", link: "https://drive.google.com/file/d/1C61YljGiPCaJrMvyGLXtrxQOZYrvHkuB/view?usp=drive_link"},
              {title: "Linkages Established for Exchange of Research Publications", link: "https://drive.google.com/file/d/1GScuG7pfP_MtoNze8X0UpZ256Qawjriv/view?usp=drive_link"},
              {title: "Composition of a Technical Committee to edit Research Manuscripts and Technical Reports.", link: "https://drive.google.com/file/d/1L7zsGTA_QSbM9Tg8QxsKfwdosQvmcUw3/view?usp=drive_link"},
              {title: "Policies Pertaining to Intellectual Property Rights", link: "https://drive.google.com/file/d/1x7Vdiz409qci2TDDAGN0pN8Nm8GeK9aN/view?usp=drive_link"}
          ]
      }
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
      </div>

      {/* Parameters */}
      <AreaParameters parameters={parameters} />
    </div>
  );
};

export default Research;
