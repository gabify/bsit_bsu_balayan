import AreaHeader from "../../components/accreditations/AreaHeader";
import AreaDescription from "../../components/accreditations/AreaDescription";
import FocalPerson from "../../components/accreditations/FocalPerson";
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
      title: "Curriculum and Program of Studies",
      description: [
          {title: "A.1 Copy of the Curriculum (with prerequisite courses, where applicable)", link: "https://drive.google.com/drive/folders/1r27FlroVbCgfYTD7SkbVhCLnYqdCRNcy?usp=drive_link"},
          {title: "A.2 CHED Policies and Standards, CMOs, where applicable", link: "https://drive.google.com/drive/folders/1Mw8QzDL7ikmvVLaKS2My_xozLVzwiZus?usp=drive_link"},
          {title: "A.3 Copies of MOA or MOU with agencies re Immersion, OJT, RLE, Practice Teaching and other related activities", link: "https://drive.google.com/drive/folders/1nwB0jz33rZTfNzO8u5DBZR_1gN23pWOT?usp=drive_link"},
          {title: "A.4 Minutes of the Academic Council Meeting", link: "https://drive.google.com/drive/folders/1HeX6e8huT5A_k3-fDv1abw3sP39RwIEU?usp=drive_link"},
          {title: "A.5 Policies on Curriculum Development", link: "https://drive.google.com/drive/folders/10VtWJ4q15IURh5NTL1iGDdbVCrPBik1w?usp=drive_link"},
          {title: "A.6 Policies on validation of subjects taken by transferees and accomodation of students with special needs", link: "https://drive.google.com/drive/folders/1mC8L2by8t6KyhbJzhzIhvGCba8d6pWI4?usp=drive_link"}
      ]
    },
    {
        id: "B",
        title: "Instructional Process, Methodologies and Learning Opportunities",
        description: [
            {title: "Compilation of updated course syllabi in all subjects", link: "https://drive.google.com/drive/folders/1tIYF3RHZO7WR3HBWFottbrdU_BVh9joC?usp=drive_link"},
            {title: "Evidence/s on remedial programs conducted", link: "https://drive.google.com/drive/folders/1lym6yd5f8H6rkvNHLONUnUO_KtUhxGuF?usp=drive_link"},
            {title: "List of teaching strategies used in the different subject areas", link: "https://drive.google.com/drive/folders/10zv8C-weeiVu-7Bmb3NCqxfFKcMqLTRs?usp=drive_link"},
            {title: "Sample course requirements submitted by students", link: "https://drive.google.com/drive/folders/1x5wxs6h0htHPSbvXs8xup6XXDebA-GO1?usp=drive_link"},
            {title: "Record of class observations", link: "https://drive.google.com/drive/folders/1BnhqlxMHE7Xj815RoYfljHuBWG26qtWG?usp=drive_link"},
            {title: "List of academic linkages or consortia", link: "https://drive.google.com/drive/folders/1PxTOZ2DqZpL1xD49HeiQp3veGZa8ISJk?usp=drive_link"}
        ]
    },
    {
        id: "C",
        title: "Assessment of Academic Performance",
        description: [
            {title: "Sample copies of Summative Exams with TOS", link: "https://drive.google.com/drive/folders/19L4pA7AJAKXACXz3YU-xpKyb7wBPMbpo?usp=drive_link"},
            {title: "Samples of Non-Traditional Assessment Tools", link: "https://drive.google.com/drive/folders/1uWwjA_E5zGcGuQBOUQKlSTc-L-WH_jET?usp=drive_link"},
            {title: "Sample of Assessment Tools for Individual Differences and Multiple Intelligences", link: "https://drive.google.com/drive/folders/1VddnAltnm9uHlvBjHBEt7KeOTE8Pw5ui?usp=drive_link"},
            {title: "Sample Class Records", link: "https://drive.google.com/drive/folders/1dc5mKZ2Ej-wqV5QdVS3oRgohCrabNvAT?usp=drive_link"},
            {title: "Copy of the Grading system, including evidence that it has been approved", link: "https://drive.google.com/drive/folders/1hpLoWTL-bExM03eX1qY9hRs3lPgprL1_?usp=drive_link"},
            {title: "Evidence that Course Requirements are Returned to Students after they were evaluated and recorded", link: "https://drive.google.com/drive/folders/1DPB-W-9h6Qn3LSY2qlSSxURmI2xEwYCm?usp=drive_link"}
        ]
    },
    {
        id: "D",
        title: "Classroom Management",
        description: [
            {title: "Policies on Class Attendance and Discipline", link: "https://drive.google.com/file/d/1uvMHFuhDbyPChGkQEwTTGzAtCalb211Q/view?usp=drive_link"},
            {title: "Evidences that Independent Work or Performance is encouraged and monitored, such as Student outputs", link: "https://drive.google.com/file/d/1-oYyssVwudW35vkmoZAPfl_YyIGbFdTp/view?usp=drive_link"}
        ]
    },
    {
        id: "E",
        title: "Graduation Requirements",
        description: [
            {title: "Policies that Apply to Student Returnees, transferees, and with academic deficiencies including residency", link: "https://drive.google.com/drive/folders/111FMM_Qc6vZ05Vfoo3CHhw2rAH_-YBBC?usp=drive_link"},
            {title: "Sample copies of student clearance before graduationn", link: "https://drive.google.com/drive/folders/1iLcAndMTKoc_yVZlm0No9tutz_JD9PMX?usp=drive_link"},
            {title: "Samples of Researches conducted by students", link: "https://drive.google.com/drive/folders/1i9YBToDNwL8K2XBT5gazHTeYvbw5EW8L?usp=drive_link"},
            {title: "Policies on OJT (Practice Teaching, RLE, Apprenticeship, Practicum, etc.), if applicable", link: "https://drive.google.com/drive/folders/1mH33aAKhQTQiyk6tSlt3LYr3jOBlZCnn?usp=drive_link"}
        ]
    },
    {
        id: "F",
        title: "Administrative Support for Effective Instruction",
        description: [
            {title: "Admin Manual", link: "https://drive.google.com/drive/folders/1bGHTFHRF-3CmUr29LTZNTSXfGIv4VZ6T?usp=drive_link"},
            {title: "Evidences of Dialogues conducted among Administration, Faculty and Students", link: "https://drive.google.com/drive/folders/1KsrR6h7uNYjl1cVLTlOrji1HQzracPMG?usp=drive_link"},
            {title: "Schedule of Regular Faculty Consultation Hours", link: "https://drive.google.com/drive/folders/1J2Eau9-aCF7AG4wygPSHpXpOOWy9ANlf?usp=drive_link"},
            {title: "System of awards and recognition for graduating students with outstanding achievements", link: "https://drive.google.com/drive/folders/1D8RF6bZJyvzmt6OdHZkhB0NnaaOtfpex?usp=drive_link"},
            {title: "Resuls of a Study on the Licensed Performance of Graduates, if applicable", link: "https://drive.google.com/drive/folders/1vB1Rkr3cwBP9QxxwmQpmE_KkThHGelQO?usp=drive_link"},
            {title: "Evidence of Administrative Support to Improve Licensure performance graduates, if applicable", link: "https://drive.google.com/drive/folders/1NcMRA43rjPCsEC9oclXVvvbNed4uZ-Pv?usp=drive_link"},
            {title: "Conduct of a Tracer Study on the Employability of the Graduates", link: "https://drive.google.com/drive/folders/1Jn6SGnLc3QdE6gUZbZES_Enz9UFNWhzZ?usp=drive_link"},
            {title: "Feedback from Employers regarding Performance of Graduates", link: "https://drive.google.com/drive/folders/180Y0X0GWYxxyn9eci-JCVbF5RDhgY97O?usp=drive_link"}
        ]
    }
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
      </div>

      {/* Parameters */}
      <AreaParameters parameters={parameters} />
    </div>
  );
};

export default CurriculumInstruction;
