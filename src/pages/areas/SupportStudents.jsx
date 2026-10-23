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
      title: "Student Service Program",
      description:[
        { title: 'A copy of the objectives of the SSP', link: 'https://drive.google.com/drive/folders/139WNk9E7IL-DkWwyaQeWdOIo_3zJhp_P?usp=drive_link' },
        { title: 'Organizational chart of the SSP', link: 'https://drive.google.com/drive/folders/1mobu2ljN1v36O75ZIamEWVCZGEFGfSaw?usp=drive_link' },
        { title: 'Functional Chart of the SSP', link: 'https://drive.google.com/drive/folders/1ViKACGjKtvDcbxTibXub4JNXLOTbbU4a?usp=drive_link' },
        { title: 'Profile of the SSP Staff', link: 'https://drive.google.com/drive/folders/1-uv2XjdSEuL61ZU6y0mDHGMwFR7EBgfO?usp=drive_link' },
        { title: 'Copy of the SSP Master Plan', link: 'https://drive.google.com/drive/folders/1VO18NBWa55HEub0ksHQOqAJtf5jQAH5G?usp=drive_link' },
        { title: 'Evaluation program to assess the effectiveness of the SSP', link: 'https://drive.google.com/drive/folders/15wmj2Ku7EMJQkubz9JhYqgYaP9JPHJnj?usp=drive_link' },
        { title: 'Inventory of physical facilities, equipment. supplies, and materials for the SSP', link: 'https://drive.google.com/drive/folders/17AwRBKuCTvLLb7oqqAON83KX7FawLTft?usp=drive_link' }
      ]
    },
    {
      id: "B",
      title: "Student Service Program",
      description:[
        { title: 'Bulletin of Information', link: 'https://drive.google.com/drive/folders/1_V4mzGBSVNyAhcNYJ9HUqvm30AnfK8fh?usp=drive_link' },
        { title: 'Student Handbook', link: 'https://drive.google.com/drive/folders/18MV0wckJFFepTizYgyxO82SbyOXF53Gj?usp=drive_link' },
        { title: 'Data on student admission (Enrolment trends, drop-out rate, transferees, course shifters etc.)', link: 'https://drive.google.com/drive/folders/1GuZ1mePnneEtndEjZVN4-RQENqdjIYCo?usp=drive_link' }
      ]
    },
    {
      id: "C",
      title: "Guidance Program",
      description:[
        { title: 'Profile of the Guidance and Counseling Head', link: '' },
        { title: 'Updated Student Profiles', link: 'https://drive.google.com/file/d/1ONyBnw4ddizyRIfhpU0n2Gu6mSWKsEof/view?usp=drive_link' },
        { title: 'Policies on the confidentiality of student records', link: 'https://drive.google.com/file/d/1FFKg9j_DflqDjKFZjSZYjtpids6T-Nz-/view?usp=drive_link' },
        { title: 'A copy of the Testing Program', link: 'https://drive.google.com/drive/folders/1Sh0XXAtcQ38wNM0p6ajmX8mZi7RF2_we?usp=drive_link' },
        { title: 'List of tests and evaluative tools used in Guidance and Counseling services', link: 'https://drive.google.com/drive/folders/1eeKfTI5ME6trS038CNr7IRB6Bk2zztY2?usp=drive_link' },
        { title: 'List of students who availed of the counseling service', link: 'https://drive.google.com/drive/folders/19tNazFf_aCml-AUa27jyEaDFNhfg35qk?usp=drive_link' },
        { title: 'Sample counseling referral form', link: 'https://drive.google.com/file/d/1VOrSTIPG2qw41fNslkZfCmBjYuVVH0JG/view?usp=drive_link' },
        { title: 'List of prospective employers of graduates of a particular program', link: 'https://drive.google.com/drive/folders/1_V4mzGBSVNyAhcNYJ9HUqvm30AnfK8fh?usp=drive_link' },
        { title: 'Sample letters of employers inviting graduates of a particular program to apply', link: '' },
        { title: 'Alumni Directory and officers of the Alumni Association', link: 'https://drive.google.com/drive/folders/1oS8JsYbZxG-nTt6JrWv6O2Bxtt8x6532?usp=drive_link' },
        { title: 'Linkage/s established with industries and prospective employers', link: 'https://drive.google.com/drive/folders/1lQOQTQVNzNIU_PAl7xqeRXFVIizEak4B?usp=drive_link' },
        { title: 'Copy of the instrument to evaluate the guidance program', link: 'https://drive.google.com/drive/folders/1Fh7UvYNjKnDuO3-T1BdfBV4mmsvVeAOk?usp=drive_link' }
      ]
    },
    {
      id: "D",
      title: "Other Student Services",
      description:[
        { title: 'Food Services', link: 'https://drive.google.com/drive/folders/1dnRaaCL1ooQ83O5exDGADOmR9Hka6DCr?usp=drive_link' },
        { title: 'Health Services', link: 'https://drive.google.com/drive/folders/1s9wAJLTgCnBauT1gZDCQ6nOCJarco41b?usp=drive_link' },
        { title: 'Socio-Cultural Development Program', link: 'https://drive.google.com/drive/folders/14TXy05l_PVZXqbTylISbEwSGPxotQMG3?usp=drive_link' },
        { title: 'Sports Development Program', link: 'https://drive.google.com/drive/folders/1UwjsyStTxjQ5Wnw55Q9ZCF5VbOFaomkv?usp=drive_link' },
        { title: 'Student Publication', link: 'https://drive.google.com/drive/folders/1EGbK_NMDqs_NEL8LPPsWBaL3xZfyJtMd?usp=drive_link' }
      ]
    },
    {
      id: "E",
      title: "Scholarships/Grants",
      description:[
        { title: 'Copy of the Institutional Scholarship Program containing:', link: 'https://drive.google.com/drive/folders/1iYRnRHBpvrQWbUSKvc9HEcHqlPCctzui?usp=drive_link' },
        { title: 'Copy of the orientation program for scholars and grantees', link: 'https://drive.google.com/drive/folders/1Ywn9d38rwNFUjLtbFJMWuanSty3JoeAo?usp=drive_link' }
      ]
    },
  ],
};

const SupportStudents = ({ area = defaultArea }) => {
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

export default SupportStudents;
