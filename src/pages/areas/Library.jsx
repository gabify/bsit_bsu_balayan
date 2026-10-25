import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 7",
  title: "Library",

  description:
    "This area covers the library's collection of learning resources, facilities, services, and technologies that support instruction, research, and the academic needs of students, faculty, and other institutional stakeholders.",

  focalPerson: {
    name: "Mrs. Ma. Cecilia D. De Vera",
    email: "cecilia.devera@g.batstate-u.edu.ph",
  },

  parameters: [
     {
        id : "A",
        title: "A. ADMINISTRATION",
        description : [
          { title: 'Organizational Structure of the Library', link: 'https://drive.google.com/file/d/1kVCtAjTNA7a6W9EuaMrYXxmwCpuKinG2/view?usp=drive_link' },
          { title: 'Profile and Functions of the Head Librarian', link: 'https://drive.google.com/file/d/1hUZxUqu5V-iOy3yPP_f9adlRH7aeUWIE/view?usp=drive_link' },
          { title: 'Composition of the Library Advisory Committee including their functions', link: 'https://drive.google.com/file/d/1abn9OSEKNJ-kFeKqRZ_MLkOlVDbpekYg/view?usp=drive_link' }
        ]
    },
    {
      id : "B",
      title: "STAFF PERSONNEL",
      description : [
        { title: 'B.1.  Profile of the Library staff personnel', link: 'https://drive.google.com/file/d/1Kmf7olLdTN0W7OQiO5a8IeruORFnuUi_/view?usp=drive_link' },
        { title: 'B.2.  Evidence of Compliance on Adequacy of Library Personnel ', link: 'https://drive.google.com/file/d/1JJzV7XngLSYm1OyFPbsSVSEqFdA82r_Q/view?usp=drive_link' },
        { title: 'B.3. Copy of the Library Staff Development Plan', link: 'https://drive.google.com/file/d/1VB6oEmbrWDL2LHdQi4ud5I5g0W6ZSh-x/view?usp=drive_link' },
        { title: 'B.4. Library Staff Compensation', link: 'https://drive.google.com/file/d/1uy4CoqJUWbxL782vvtlPVkVpAtoX0irZ/view?usp=drive_link' }
      ]
    },
  ],
};

const Library = ({ area = defaultArea }) => {
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

export default Library;
