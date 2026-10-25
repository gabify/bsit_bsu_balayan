import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 3",
  title: "Curriculum and Instruction",

  description:
    "This area covers the design, development, implementation, and evaluation of academic programs and curricula, including instructional strategies, learning resources, and assessment practices that support student learning.",

  focalPerson: {
    name: "Dr. Kathleen B. Bayungan",
    email: "kathleen.bayungan@g.bastate-u.edu.ph",
  },

  parameters: [
    {
      id: "A",
      title: "Instructional Process, Methodologies and Learning Opportunities",
      description:[
        { title: 'Compilation of updated course syllabi in all subjects', link: 'https://drive.google.com/drive/folders/1qdCwOJn8xNac0cNyUD8FVFg4o97F8tIr?usp=drive_link' },
        { title: 'Evidence/s on remedial programs conducted', link: 'https://drive.google.com/file/d/16fVLLM05WASflV8JAlhSUm5mlDkKDDrS/view?usp=drive_link' },
        { title: 'List of teaching strategies used in the different subject areas', link: 'https://drive.google.com/drive/folders/1febfNzT84HucJmlkmLd-SvUOK9AW5bN7?usp=drive_link' },
        { title: 'Sample course requirements submitted by students', link: 'https://drive.google.com/drive/folders/17TkRNBzhctZKKtC2iVqLut2S8CfHZSgH?usp=drive_link' },
        { title: 'Record of class observations', link: 'https://drive.google.com/drive/folders/1Yaj0KmS5uiWklMrbDWVrInoRt8sAJkpq?usp=drive_link' },
        { title: 'List of academic linkages or consortia', link: 'https://drive.google.com/drive/folders/1vefONlcD1rVngMEaJukRKiibMqV0To5Z?usp=drive_link' }
      ]
    },
  ],
};

const CurriculumInstruction = ({ area = defaultArea }) => {
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

export default CurriculumInstruction;
