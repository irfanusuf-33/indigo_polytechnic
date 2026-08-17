export type Unit = {
  code: string;
  title: string;
};

export type CourseDetail = {
  slug: string;
  category: string;
  code: string;
  title: string;
  cricosCode: string;
  heroImage: string;
  overviewImage: string;
  overviewImageHeight?: number;
  details: {
    label: string;
    value: string;
    description?: string;
    href?: string;
  }[];
  overview: string[];
  overviewSkillsIntro?: string;
  overviewSkills?: string[];
  outcomesIntro: string;
  outcomes: string[];
  outcomesOutro: string[];
  entryRequirements: {
    bold: string;
    rest: string;
  }[];
  englishRequirements: string[];
  coreUnits: Unit[];
  electiveUnits: Unit[];
  courseCredit: string[];
  trainingInfo: string[];
  assessmentMethods: string[];
  assessmentOutro: string[];
  resourceRequirements: string;
};

export const courses: CourseDetail[] = [
  {
    slug: "bsb50420-diploma-of-leadership-and-management",
    category: "Business & Management",
    code: "BSB50420",
    title: "Diploma of Leadership and Management",
    cricosCode: "118203J",
    heroImage: "/images/CDP-background-image.svg",
    overviewImage: "/images/Image.svg",
    details: [
      {
        label: "Delivery Mode",
        value: "Classroom and structured self-study.",
        description:
          "This program is delivered in the classroom and through structured self-study.",
      },
      {
        label: "Duration",
        value: "52 weeks",
        description:
          "52 weeks, Including 40 study weeks and 12 weeks of holidays.",
      },
      {
        label: "Study Load",
        value: "20 hours per week",
        description:
          "20 hours a week in classroom and 4 hours of structured self study",
      },
      {
        label: "Fees",
        value: "Click Here",
        href: "/courses",
      },
      {
        label: "Location",
        value: "Hobart Campus",
      },
    ],
    overview: [
      "This qualification reflects the role of individuals who apply knowledge, practical skills and experience in leadership and management across a range of enterprise and industry contexts.",
      "Individuals at this level display initiative and judgement in planning, organising, implementing and monitoring their own workload and the workload of others.",
      "They use communication skills to support individuals and teams to meet organisational or enterprise requirements.",
      "They may plan, design, apply and evaluate solutions to unpredictable problems, and identify, analyse and synthesise information from a variety of sources.",
    ],
    outcomesIntro:
      "This course is specifically designed for international students who fall into the following categories:",
    outcomes: [
      "Individuals in leadership or management positions: if you are already in a leadership or management role within an organisation, this course can enhance your skills, knowledge, and capabilities, allowing you to excel in your current position.",
      "Aspiring leaders and managers: if you have ambitions to progress into leadership or management roles in the future, this course equips you with necessary competencies and insights to pursue such career pathways.",
      "Entrepreneurs and business owners: if you are an entrepreneur or business owner, this course provides valuable knowledge and skills in leadership and management, which are essential for effectively running your own business and leading a team.",
      "Those seeking a pathway to higher-level qualifications: This qualification serves as a steppingstone for those who wish to further their education and pursue higher-level qualifications, such as the Advanced Diploma of Leadership and Management or other relevant higher education programs.",
    ],
    outcomesOutro: [],
    entryRequirements: [
      {
        bold: "Be at least 18 years of age",
        rest: "and have completed the equivalent of Year 12.",
      },
      {
        bold: "Participate in a course entry interview",
        rest: "to determine suitability for the course and student needs. This will also include an LLN assessment and you must achieve ACSF 4 for reading, writing, numeracy and oral communication to enter the course.",
      },
      {
        bold: "Have an IELTS* score of 6.0",
        rest: "(test results must be no more than 2 years old)",
      },
    ],
    englishRequirements: [
      "Educated for 5 years in an English-speaking country.",
      "Completed at least 6 months of a Certificate IV level course in an Australian RTO.",
      "Successful completion of an English Placement Test.",
    ],
    coreUnits: [
      { code: "BSBCMM511", title: "Communicate with influence." },
      { code: "BSBCRT511", title: "Develop critical thinking in others." },
      {
        code: "BSBLDR523",
        title: "Lead and manage effective workplace relationships.",
      },
      { code: "BSBOPS502", title: "Manage business operational plans." },
      { code: "BSBPEF502", title: "Develop and use emotional intelligence." },
      { code: "BSBTWK502", title: "Manage team effectiveness." },
    ],
    electiveUnits: [
      { code: "BSBCMM412", title: "Lead difficult conversations." },
      { code: "BSBCRT512", title: "Originate and develop concepts." },
      { code: "BSBFIN501", title: "Manage budgets and financial plans." },
      { code: "BSBFIN502", title: "Manage financial compliance." },
      {
        code: "BSBHRM522",
        title: "Manage employee and industrial relations.",
      },
    ],
    courseCredit: [
      "If you have existing qualifications or possess skills, knowledge, and experience that are relevant to your desired course of study, you have the option to apply for recognition of these through credit transfer or recognition of prior learning.",
      "Resource Requirements Detailed information regarding this process can be found in our International Student Handbook, which is accessible at ip.edu.au",
      "Please note that if your application for course credit is approved, it will have an impact on both your course fees and the duration of your studies. We will communicate any changes to fees or course duration resulting from the granted credit to you in writing. Additionally, you will receive a new Confirmation of Enrolment reflecting the updated information.",
      "For any questions about course credit, contact us at info@ip.edu.au",
    ],
    trainingInfo: [
      "This course is designed to be delivered in a combination of face-to-face classroom sessions and structured self-study. The details of the timetable will be provided to you during the orientation, although please note that it is subject to change.",
      "Class sessions are carefully structured to include a balance of theoretical instruction and practical activities, with a focus on creating a simulated real-life workplace environment.",
      "During the self-study component, you will receive a comprehensive self-study guide that contains specific activities to be completed on a weekly basis. These completed activities must be submitted to your trainer and assessor for evaluation.",
    ],
    assessmentMethods: [
      "Written questions",
      "Projects",
      "Presentations",
      "Reports",
      "Role plays/observations",
      "Portfolios/journals",
    ],
    assessmentOutro: [
      "At the commencement of each unit, your trainer and assessor will outline the specific assessment tasks that you are required to complete.",
    ],
    resourceRequirements:
      "You are required to bring your own laptop with Office 365 (or similar program) to all classes.",
  },
  {
    slug: "bsb80120-graduate-diploma-of-management-learning",
    category: "Business & Management",
    code: "BSB80120",
    title: "Graduate Diploma of Management (Learning)",
    cricosCode: "118204H",
    heroImage: "/images/gdm-bg.svg",
    overviewImage: "/images/gdm.svg",
    details: [
      {
        label: "Delivery Mode",
        value:
          "This program is delivered in the classroom and through structured self-study.",
      },
      {
        label: "Duration",
        value: "52 weeks, including 40 study weeks and 12 weeks of holidays.",
      },
      {
        label: "Study Load",
        value:
          "20 hours a week in classroom and 4 hours of structured self study",
      },
      {
        label: "Fees",
        value: "Click Here",
        href: "/courses",
      },
      {
        label: "Location",
        value: "Hobart Campus",
      },
    ],
    overview: [
      "This qualification reflects the role of individuals who apply highly specialised knowledge and skills in the field of organisational learning and capability development.",
      "Individuals in these roles generate and evaluate complex ideas. They also initiate, design, and execute major learning and development functions within an organisation. Typically, they would have full responsibility and accountability for the personal output and work of others.",
      "This qualification may apply to leaders and managers in an organisation where learning is used to build organisational capability. The job roles that relate to this qualification may also include RTO Manager and RTO Director",
    ],
    outcomesIntro:
      "This course is specifically designed for international students who fall into the following categories:",
    outcomes: [
      "Seeking to pursue a career in organization learning and capability development.",
      "Seeking to enter a new industry sector.",
      "Seeking a pathway to higher-level qualifications",
    ],
    outcomesOutro: [
      "Completing this course may provide you with employment or learning opportunities.",
      "Potential employment options are in Education and career development industry.",
      "Further education pathways may include the higher education qualification like Masters in business and education.",
    ],
    entryRequirements: [
      {
        bold: "Be at least 18 years of age.",
        rest: " and have completed the equivalent of Year 12",
      },
      {
        bold: "Participate in a course entry interview",
        rest: " to determine suitability for the course and student needs. This will also include an LLN assessment and you must achieve ACSF 4 for reading, writing, numeracy and oral communication to enter the course.",
      },
      {
        bold: "Have an IELTS* score of 6.0",
        rest: "(test results must be no more than 2 years old)",
      },
    ],
    englishRequirements: [
      "Educated for 5 years in an English- speaking country; or",
      "Completed at least 6 months of a Certificate IV level course in an Australian RTO; or",
      "Successful completion of an English Placement Test.",
    ],
    coreUnits: [
      {
        code: "BSBHRM613",
        title:
          "Contribute to the development of learning & development strategies.",
      },
      { code: "BSBLDR811", title: "Lead strategic transformation." },
      {
        code: "TAELED803",
        title: "Implement improved learning practice.",
      },
    ],
    electiveUnits: [
      {
        code: "BSBCRT611",
        title: "Apply critical thinking for complex problem solving..",
      },
      { code: "BSBFIN801", title: "Lead financial strategy development.." },
      {
        code: "BSBHRM611",
        title: "Contribute to organisational performance development.",
      },
      { code: "BSBINS603", title: "Initiate and lead applied research." },
      {
        code: "BSBLDR601",
        title: "Lead and manage organisational change.",
      },
    ],
    courseCredit: [
      "You can apply for recognition of existing qualifications or skills, knowledge and experience (credit transfer or recognition of prior learning) as per the information included in our International Student Handbook, which is available at ip.edu.au ",
      "If you are granted course credit, this will affect your course fees as well as the duration of your course. We will advise you in writing of changes to fees or course duration as a result of the credit. You will also be issued with a new Confirmation of Enrolment.",
      "For any questions about course credit, contact us at info@ip.edu.au",
    ],
    trainingInfo: [
      "This course is delivered face-to-face in a classroom-based setting, as well as structured- self-study. ",
      "The timetable for this course will be provided to you on orientation, this is subject to change. ",
      "Class sessions include a mix of theory and practical activities with a focus on creating a real-life workplace. ",
      "For the self-study, you will be provided with a self-study guide which includes activities which you must complete and hand into your trainer and assessor each week. ",
      "In addition to classroom-based learning and structured self-study, you will also need to complete approximately 5 hours of additional, unsupervised study per week including general reading and research for assessments.",
      "You will also need to complete assessments for this course which may include:",
    ],
    assessmentMethods: [
      "Written questions",
      "Projects",
      "Presentations",
      "Reports",
      "Role plays/observations",
      "Portfolios/journals",
    ],
    assessmentOutro: [
      "At the beginning of each unit, your trainer and assessor will outline the assessment tasks that must be completed. ",
      "Your classes will be conducted in modern classrooms and you will be able to access Wi-Fi. There are also areas for you to relax, as well as conduct additional study. ",
      "You will be provided with a Student Guide relevant to each unit in your course. Textbooks are also available onsite for you to use and borrow if you wish",
    ],
    resourceRequirements:
      "You are required to bring your own laptop with Office 365 (or similar program) to all classes.",
  },
  {
    slug: "ict60220-advanced-diploma-of-information-technology",
    category: "Information Technology",
    code: "ICT60220",
    title: "Advanced Diploma of Information Technology",
    cricosCode: "118205G",
    heroImage: "/images/it-bg.svg",
    overviewImageHeight: 720,
    overviewImage: "/images/it.svg",
    details: [
      {
        label: "Delivery Mode",
        value:
          "This program is delivered in the classroom and through structured self-study.",
      },
      {
        label: "Duration",
        value: "104 weeks, 80 weeks of study period and 24 weeks of holidays.",
      },
      {
        label: "Study Load",
        value:
          "20 hours a week in classroom and 4 hours of structured self study",
      },
      {
        label: "Fees",
        value: "Click Here",
        href: "/courses",
      },
      {
        label: "Location",
        value: "Hobart Campus",
      },
    ],
    overview: [
      "This qualification reflects the role of individuals in a variety of information and communications technology (ICT) roles who have significant experience in specialist technical skills, or managerial business and people management skills.   ",
      "Individuals in these roles carry out complex tasks in a specialist field, working independently, leading a team or a strategic direction of a business. They apply their skills across a wide range of industries and business functions, or as a business owner (sole trader/contractor).",
    ],
    overviewSkillsIntro:
      "The skills required for these roles may include, but are not restricted to:",
    overviewSkills: [
      "Advanced data management information: creating, designing and monitoring complex systems that store data, and optimising organisational knowledge management.",
      "Cyber security: protecting sensitive data and information through security architecture, and developing disaster recovery and contingency plans.",
      "Full stack web development: building advanced user interfaces, developing representational state transfer application program interfaces (REST APIs) and designing user experience solutions.  ",
      "Course Details CRICOS Course  Code 118204H Overview Advanced Diploma of Information  Technology (Telecommunications Network Engineering) ICT60220 Further programming: applying advanced ICT languages to maintain security and manage data.  ",
      "IT strategy and organizational development: managing and communicating strategic ICT business solutions  Systems development and analysis: modeling and testing data objects, data processes and preferred ICT system solutions.  ",
      "Telecommunications Network Engineering network engineering: managing logistics, organizational specifications, regulations, and legislative requirements across network projects.",
    ],
    outcomesIntro:
      "This course is designed specifically for international students with the following aspirations:",
    outcomes: [
      "Embarking on a professional journey in the field of information technology.",
      "Transitioning into a different industry sector.",
      "Aiming for advanced academic qualifications.",
    ],
    outcomesOutro: [
      "The successful completion of this course could lead to a variety of job prospects or further learning opportunities. Potential career pathways are mainly within the Education and career development sector.   ",
      "In terms of further academic progress, this course could serve as a steppingstone towards higher education qualifications, such as a master's degree in .",
    ],
    entryRequirements: [
      {
        bold: "Be at least 18 years of age.",
        rest: " and have completed the equivalent of Year 12",
      },
      {
        bold: "Participate in a course entry interview",
        rest: " to determine suitability for the course and student needs. This will also include an LLN assessment and you must achieve ACSF 4 for reading, writing, numeracy and oral communication to enter the course.",
      },
      {
        bold: "Have an IELTS* score of 6.0",
        rest: "(test results must be no more than 2 years old)",
      },
    ],
    englishRequirements: [
      "Educated for 5 years in an English- speaking country; or",
      "Completed at least 6 months of a Certificate IV level course in an Australian RTO; or",
      "Successful completion of an English Placement Test.",
    ],
    coreUnits: [
      {
        code: "BSBCRT611",
        title: "Apply critical thinking for complex problem solving.",
      },
      { code: "BSBTWK502", title: "Manage team effectiveness." },
      {
        code: "BSBXCS402",
        title: "Promote workplace cyber security awareness and best practices.",
      },
      {
        code: "ICTICT608",
        title: "Interact with clients on a business level.",
      },
      {
        code: "ICTICT618",
        title: "Manage IP, ethics and privacy in ICT environments.",
      },
      {
        code: "ICTSAD609",
        title:
          "Plan and monitor business analysis activities in an ICT environment.",
      },
    ],
    electiveUnits: [
      { code: "ICTDBS604", title: "Build data warehouses." },
      { code: "ICTDBS605", title: "Develop knowledge management strategies." },
      {
        code: "ICTDBS606",
        title: "Determine database functionality and scalability.",
      },
      {
        code: "ICTICT523",
        title: "Gather data to identify business requirements.",
      },
      {
        code: "ICTCYS604",
        title: "Implement best practices for identity management.",
      },
    ],
    courseCredit: [
      "You can apply for recognition of existing qualifications or skills, knowledge and experience (credit transfer or recognition of prior learning) as per the information included in our International Student Handbook, which is available at ip.edu.au ",
      "If you are granted course credit, this will affect your course fees as well as the duration of your course. We will advise you in writing of changes to fees or course duration as a result of the credit. You will also be issued with a new Confirmation of Enrolment",
      "For any questions about course credit, contact us at info@ip.edu.au",
    ],
    trainingInfo: [
      "For any questions about course credit, contact us at info@ip.edu.au",
      "This course is designed to be delivered in a combination of face to-face classroom sessions and structured self-study. The details of the timetable will be provided to you during the orientation, although please note that it is subject to change.   ",
      "Class sessions are carefully structured to include a balance of theoretical instruction and practical activities, with a focus on creating a simulated real-life workplace environment.",
      "During the self-study component, you will receive a comprehensive self-study guide that contains specific activities to be completed weekly. These completed activities must be submitted to your trainer and assessor for evaluation.",
      "Assessments are an integral part of this course and may encompass a variety of formats, such as:",
    ],
    assessmentMethods: [
      "Written questions",
      "Projects",
      "Presentations",
      "Reports",
      "Role plays/observations",
      "Portfolios/journals",
    ],
    assessmentOutro: [
      "At the commencement of each unit, your trainer and assessor will outline the specific assessment tasks that you are required to complete.",
    ],
    resourceRequirements:
      "You are required to bring your own laptop with Office 365 or similar program to all classes.",
  },
  {
    slug: "rii60520-advanced-diploma-of-civil-construction-design",
    category: "Civil Engineering",
    code: "RII60520",
    title: "Advanced Diploma of Civil Construction Design",
    cricosCode: "118206F",
    heroImage: "/images/ccd-bg.svg",
    overviewImage: "/images/ccd.svg",
    details: [
      {
        label: "Delivery Mode",
        value:
          "This program is delivered in the classroom and through structured self-study.",
      },
      {
        label: "Duration",
        value: "104 weeks, including 80 study weeks and 24 weeks of holidays.",
      },
      {
        label: "Study Load",
        value:
          "20 hours a week in classroom and 4 hours of structured self-study.",
      },
      {
        label: "Fees",
        value: "Click Here",
        href: "/courses",
      },
      {
        label: "Location",
        value: "Hobart Campus",
      },
    ],
    overview: [
      "This qualification reflects the role of an individual working as a senior civil works designer or a para-professional designer, who supports professional engineers.",
      "They perform tasks that are broad, specialised, complex and technical and include strategic areas and initiating activities. They are responsible for the design of complex projects to ensure the implementation of the client’s site requirements and are required to demonstrate self-directed application of theoretical and technical knowledge and initiate solutions to technical problems or management requirements.  ",
      "Licensing, legislative, regulatory and certification requirements that apply to this qualification can vary between states, territories and industry sectors. Users must check requirements with relevant body before applying the qualification.",
    ],
    outcomesIntro: "This course is targeted at international students who are:",
    outcomes: [
      "Individuals who have prior experience and knowledge in civil construction design.",
      "Individuals who want to increase their job opportunities, and responsibilities within the industry.",
      "Individuals who want to advance their career in civil construction design and acquire advanced skills in project management, contract administration, and civil design.",
      "Designers, engineers, project managers, and construction supervisors working in the civil construction industry who are looking to enhance their technical and managerial skills.",
      "Seeking a pathway to higher-level qualifications",
    ],
    outcomesOutro: [
      "This qualification is ideal for those who have prior experience and knowledge in civil construction design and are looking to acquire advanced skills in areas such as project management, contract administration, and civil design.",
      "It is particularly relevant for individuals working in the civil construction industry, including designers, engineers, project managers, and construction supervisors, who are looking to enhance their technical and managerial skills.",
    ],
    entryRequirements: [
      {
        bold: "Be at least 18 years of age.",
        rest: " and have completed the equivalent of Year 12",
      },
      {
        bold: "Participate in a course entry interview",
        rest: " to determine suitability for the course and student needs. This will also include an LLN assessment and you must achieve ACSF 4 for reading, writing, numeracy and oral communication to enter the course.",
      },
      {
        bold: "Have an IELTS* score of 6.0",
        rest: "(test results must be no more than 2 years old)",
      },
    ],
    englishRequirements: [
      "Educated for 5 years in an English- speaking country; or",
      "Completed at least 6 months of a Certificate IV level course in an Australian RTO; or",
      "Successful completion of an English Placement Test.",
    ],
    coreUnits: [
      {
        code: "BSBPMG632",
        title: "Manage program risk.",
      },
      { code: "BSBTWK502", title: "Manage team effectiveness." },
      {
        code: "BSBWHS616",
        title: "Apply safe design principles to control WHS risks.",
      },
      {
        code: "RIICWD601E",
        title: "Manage civil works design processes.",
      },
      {
        code: "RIIQUA6015",
        title: "Establish and maintain a quality system.",
      },
    ],
    electiveUnits: [
      {
        code: "BSBESB406",
        title:
          "Establish operational strategies & procedures for new business ventures.",
      },
      { code: "BSBOPS601", title: "Develop and implement business plans." },
      {
        code: "BSBPMG530",
        title: "Manage project scope.",
      },
      {
        code: "BSBPMG531",
        title: "Manage project time.",
      },
    ],
    courseCredit: [
      "You can apply for recognition of existing qualifications or skills, knowledge and experience (credit transfer or recognition of prior learning) as per the information included in our International Student Handbook, which is available at ip.edu.au",
      "If you are granted course credit, this will affect your course fees as well as the duration of your course. We will advise you in writing of changes to fees or course duration as a result of the credit. You will also be issued with a new Confirmation of Enrolment.",
      "For any questions about course credit, contact us at info@ip.edu.au",
    ],
    trainingInfo: [
      "This course is delivered face-to-face in a classroom-based setting, as well as structured- self-study. ",
      "The timetable for this course will be provided to you on orientation, this is subject to change. ",
      "Class sessions include a mix of theory and practical activities with a focus on creating a real-life workplace. ",
      "For the self-study, you will be provided with a self-study guide which includes activities which you must complete and hand into your trainer and assessor each week. ",
      "In addition to classroom-based learning and structured self-study, you will also need to complete approximately 5 hours of additional, unsupervised study per week including general reading and research for assessments.",
      "You will also need to complete assessments for this course which may include:",
    ],
    assessmentMethods: [
      "Written questions",
      "Projects",
      "Presentations",
      "Reports",
      "Role plays/observations",
      "Portfolios/journals",
    ],
    assessmentOutro: [
      "At the beginning of each unit, your trainer and assessor will outline the assessment tasks that must be completed.",
    ],
    resourceRequirements:
      "You are required to bring your own laptop with Office 365 or similar program to all classes.",
  },
];

export function getCourseBySlug(slug: string): CourseDetail | undefined {
  return courses.find((course) => course.slug === slug);
}
