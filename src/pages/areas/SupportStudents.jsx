import React from "react";
import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 4",
  title: "Support to Students",

  description:
    "This area covers the student support services, programs, and facilities provided by the institution to promote student welfare, academic success, personal development, and overall well-being.",

  focalPerson: {
    name: "Mrs. Ma. Gizelle G. Calaud",
    email: "gizelle.calaud@g.batstate-u.edu. ph",
  },

  parameters: [
    {
      id: "A",
      title: "Student Services Program",
      description:[
        {title: 'Vision Statement', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: 'Mission Statement', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: 'Statement of the goals of the academic unit', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: 'Statement of the program objectives', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: 'Copy the charter of the institution', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'}, 
        {title: 'Minutes of the meeting in the formulation, review and revision of VMGO', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
      ]
    },
    {
      id: "B",
      title: "Student Welfare and Development",
      description:[
        {title: 'Vision Statement', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: 'Mission Statement', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: 'Statement of the goals of the academic unit', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: 'Statement of the program objectives', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: 'Copy the charter of the institution', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'}, 
        {title: 'Minutes of the meeting in the formulation, review and revision of VMGO', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
      ]
    },
    {
      id: "C",
      title: "Guidance and Counseling Services",
      description:[
        {title: 'Vision Statement', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: 'Mission Statement', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: 'Statement of the goals of the academic unit', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: 'Statement of the program objectives', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
        {title: 'Copy the charter of the institution', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'}, 
        {title: 'Minutes of the meeting in the formulation, review and revision of VMGO', link: 'https://drive.google.com/file/d/1uB1VvaS8HglyGC76urV0Ob5MvQ1VIQ2V/view?usp=drive_link'},
      ]
    },
  ],
};

const SupportStudents = ({ area = defaultArea }) => {
  const { code, title, description, focalPerson, files, parameters } = area;

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

export default SupportStudents;
