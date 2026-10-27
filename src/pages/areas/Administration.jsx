import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 10",
  title: "Administration",

  description:
    "This area covers the institution's administrative organization, leadership, management practices, policies, and processes that support the effective delivery of academic programs and institutional services.",

  focalPerson: {
    name: "Mr. Ruel M. Panday",
    email: "ruel.panday@g.batstate-u.edu.ph",
  },

  parameters: [
    {
      id: "A",
      title: "Organization",
      description:[
        {title: "Copy of Board Resolution approving the organizational structure and other relevant resolutions", link: "https://drive.google.com/drive/folders/1IpcI0mDWL63QUxuqmIC1g-Un2aDczaHs?usp=drive_link"},
        {title: "Functional Chart", link: "https://drive.google.com/drive/folders/1lnsiWyeaLM3YhlZcfD0Lnfpfb-9_2Dai?usp=drive_link"},
        {title: "Composition of the Administrative Council including its powers and functions", link: "https://drive.google.com/drive/folders/1gig1xUVhDHBK9VkYtPvaowSWa3J-q5SH?usp=drive_link"},
        {title: "College-University Code", link: "https://drive.google.com/drive/folders/1JEHa7WiewdfaT0FBIT4Amdd7458blYj0?usp=drive_link"},
        {title: "System of Communication Flow", link: "https://drive.google.com/drive/folders/1ozVmNp3-_9E2bFihlkfDqiyhFhlQTUxa?usp=drive_link"},
        {title: "Administrative-Operational Manual", link: "https://drive.google.com/drive/folders/12bGnuDmwDr62wXNiJ5pBNenCuj1MIquP?usp=drive_link"},
        {title: "Qualification Standards for Administrative power and functions", link: "https://drive.google.com/drive/folders/1shpJvr2Urgjv_tXqvzZdyofv_QaHa5bA?usp=drive_link"}
      ]
    },
    {
      id: "B",
      title: "Academic Administration",
      description:[
        {title: "Educational Profile and functions of the academic administrators", link: "https://drive.google.com/drive/folders/11kKAumh0Nt8BIfJte2v1eTEBhfR4yOIz?usp=drive_link"},
        {title: "Evidence of Participatory administration in the College-Institute", link: "https://drive.google.com/drive/folders/1lTe_9qu8P2z30ADvIYb3SFCDPZgABqS9?usp=drive_link"},
        {title: "Dean's Supervisory Program", link: "https://drive.google.com/drive/folders/1prJgtQfO2speOFqEkSL4IvsmIgJ2lfLH?usp=drive_link"}
      ]
    },
    {
      id: "C",
      title: "Student Administration",
      description:[
         {title: "Policies and Guidelines on different aspects of student life", link: "https://drive.google.com/drive/folders/14BHOQYCH0htSh8-GoREgP6G6IzmP7O7X?usp=drive_link"}
      ]
    },
    {
      id: "D",
      title: "Financial Management",
      description:[
        {title: "D.1", link: "https://drive.google.com/drive/folders/10c91KWLDlm2hebca2QQbmFlFP1D0MRcd?usp=drive_link"},
        {title: "D.2", link: "https://drive.google.com/drive/folders/1ezKmY1NkF21-ibI-uXWXUXatY6FAOcG3?usp=drive_link"}
      ]
    },
    {
      id: "E",
      title: "Supply Management",
      description:[
        {title: "Composition of the Supply Management Office, including their qualifications, functions and responsibilities", link: "https://drive.google.com/drive/folders/1VOlJSTmMBUQZlpNVUlnaSnYtmTE7rt6k?usp=drive_link"},
        {title: "Descirption of teh system of Supply Management", link: "https://drive.google.com/drive/folders/1BNCDUYVO4JQ8xT3c1ZVEkDWNZWIS0iHN?usp=drive_link"},
        {title: "Composition and functions of the Bids and Awards Committee", link: "https://drive.google.com/drive/folders/1WS5304am6MB1z4m-ZFPO762Onpdvh8XP?usp=drive_link"}
      ]
    },
    {
      id: "F",
      title: "Records Management",
      description:[
        {title: "Description of the records management in the institution", link: "https://drive.google.com/drive/folders/1xz59l5pH42MtzJJ-AYy12ri19NKzn5Y-?usp=drive_link"},
        {title: "Description of the system of maintaining the confidentiality and security of official records", link: "https://drive.google.com/drive/folders/1HWRcLhRw4irHzG80-dL3eeVn491C4761?usp=drive_link"}
      ]
    },
    {
      id: "G",
      title: "Institutional Planning and Development",
      description:[
        {title: "Copy of the Development Plan, long term and short term", link: "https://drive.google.com/drive/folders/1p6IvXEpYg-eXIj0TH1IQsXUV3nJNusz5?usp=drive_link"},
        {title: "Evidence on the use of the Personnel Evaluation results to improve performance and delivery of services", link: "https://drive.google.com/drive/folders/1CGmkKKkkNCxHxxT2_PDleg2OtODSJstO?usp=drive_link"},
        {title: "Annual Report", link: "https://drive.google.com/drive/folders/1O8yYgRzmFVd8ROF-ZtBzCmBpBLRZydvm?usp=drive_link"}
      ]
    },
  ],
};

const Administration = ({ area = defaultArea }) => {
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

export default Administration;
