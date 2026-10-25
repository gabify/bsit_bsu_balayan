import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
import AreaFiles from "../../components/accreditations/AreaFiles";
import AreaParameters from "../../components/accreditations/AreaParameters";

const defaultArea = {
  code: "Area 9",
  title: "Laboratories",

  description:
    "This area covers the adequacy, functionality, management, and maintenance of laboratories and specialized learning facilities that support practical instruction, experimentation, research, and the development of students' technical competencies.",

  focalPerson: {
    name: "Mr. Mark Anthony P. Ribaldo",
    email: "markanthony.ribaldo@g.batstate-u.edu.ph",
  },

  parameters: [
    {
      id: "A",
      title: "Laboratories/Shops/Facilities",
      description:[
        { title: 'Building plan showing the location of laboratory rooms/shops used by the program under survey', link: 'https://drive.google.com/drive/folders/1TyjYMhl-1zPD907CNf9Vr7Ai9zc4433k?usp=drive_link' },
        { title: 'Guidelines in the use of equipment and apparatuses', link: 'https://drive.google.com/drive/folders/1MTYmRL7xactgHoV6jTT2mNO3_S0jVjmW?usp=drive_link' }
      ]
    },
    {
      id: "C",
      title: "Maintenance",
      description:[
        { title: 'Description of the system on:', link: 'https://drive.google.com/drive/folders/1i83ln-WO-6UKMuoHFUpN030az1kDYGhL?usp=drive_link' },
        { title: 'Composition of the Maintenance and Repair unit', link: 'https://drive.google.com/drive/folders/1tRVo94R24wk-G1649Icpj59IUYlTTpgn?usp=drive_link' },
        { title: 'PDF of the maintenance personnel', link: '' },
        {title: 'PDF of the maintenance personnel', link: ''}
      ]
    },
  ],
};

const Laboratories = ({ area = defaultArea }) => {
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

export default Laboratories;
