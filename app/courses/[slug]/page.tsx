import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdmissionBanner from "@/components/layout/AdmissionBanner";

type Unit = {
  code: string;
  title: string;
};

type CourseDetail = {
  slug: string;
  category: string;
  code: string;
  title: string;
  cricosCode: string;
  heroImage: string;
  overviewImage: string;
  details: {
    label: string;
    value: string;
    description?: string;
    href?: string;
  }[];
  overview: string[];
  outcomes: string[];
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
  resourceRequirements: string;
};

const courses: CourseDetail[] = [
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
    outcomes: [
      "Individuals in leadership or management positions: if you are already in a leadership or management role within an organisation, this course can enhance your skills, knowledge, and capabilities, allowing you to excel in your current position.",
      "Aspiring leaders and managers: if you have ambitions to progress into leadership or management roles in the future, this course equips you with necessary competencies and insights to pursue such career pathways.",
      "Entrepreneurs and business owners: if you are an entrepreneur or business owner, this course provides valuable knowledge and skills in leadership and management, which are essential for effectively running your own business and leading a team.",
      "Those seeking a pathway to higher-level qualifications: This qualification serves as a steppingstone for those who wish to further their education and pursue higher-level qualifications, such as the Advanced Diploma of Leadership and Management or other relevant higher education programs.",
    ],
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
      "Resource Requirements Detailed information regarding this process can be found in our International Student Handbook, which is accessible at            www.indigo polytechnic.edu.au.",
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
    resourceRequirements:
      "You are required to bring your own laptop with Office 365 (or similar program) to all classes.",
  },
  {
    slug: "bsb80120-graduate-diploma-of-management-learning",
    category: "Business & Management",
    code: "BSB80120",
    title: "Graduate Diploma of Management (Learning)",
    cricosCode: "118204H",
    heroImage: "/images/Frame 1000005069.svg",
    overviewImage: "/images/Image 2.svg",
    details: [
      {
        label: "Delivery Mode",
        value: "Classroom and structured self-study.",
      },
      {
        label: "Duration",
        value: "52 weeks",
      },
      {
        label: "Study Load",
        value: "20 hours per week",
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
      "This qualification supports advanced management and learning capability for professionals who lead workplace learning, capability development, and organisational improvement.",
    ],
    outcomes: [
      "Apply strategic leadership to complex learning and development contexts.",
      "Support organisational capability through learning systems and improvement practices.",
    ],
    entryRequirements: [
      {
        bold: "Be at least 18 years of age.",
        rest: "",
      },
      {
        bold: "Participate in a course entry interview",
        rest: "to determine suitability.",
      },
      {
        bold: "Meet the English language requirements",
        rest: "listed below.",
      },
    ],
    englishRequirements: [
      "IELTS 6.0 or equivalent.",
      "Successful completion of an English Placement Test.",
    ],
    coreUnits: [],
    electiveUnits: [],
    courseCredit: [
      "Students may apply for credit transfer or recognition of prior learning where eligible.",
    ],
    trainingInfo: [
      "Training is delivered through classroom sessions, practical activities, and structured self-study.",
    ],
    assessmentMethods: ["Projects", "Presentations", "Reports"],
    resourceRequirements:
      "You are required to bring your own laptop with Office 365 (or similar program) to all classes.",
  },
  {
    slug: "ict60220-advanced-diploma-of-information-technology",
    category: "Information Technology",
    code: "ICT60220",
    title: "Advanced Diploma of Information Technology",
    cricosCode: "118205G",
    heroImage: "/images/Frame 1000005069.svg",
    overviewImage: "/images/Image 3.svg",
    details: [
      {
        label: "Delivery Mode",
        value: "Classroom and structured self-study.",
      },
      {
        label: "Duration",
        value: "104 weeks",
      },
      {
        label: "Study Load",
        value: "20 hours per week",
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
      "This qualification develops advanced technical skills for students preparing for information technology roles across systems, networks, software, and workplace technology contexts.",
    ],
    outcomes: [
      "Build advanced technical confidence across information technology environments.",
      "Prepare for employment or further study in technology-focused pathways.",
    ],
    entryRequirements: [
      {
        bold: "Be at least 18 years of age.",
        rest: "",
      },
      {
        bold: "Participate in a course entry interview",
        rest: "to determine suitability.",
      },
      {
        bold: "Meet the English language requirements",
        rest: "listed below.",
      },
    ],
    englishRequirements: [
      "IELTS 6.0 or equivalent.",
      "Successful completion of an English Placement Test.",
    ],
    coreUnits: [],
    electiveUnits: [],
    courseCredit: [
      "Students may apply for credit transfer or recognition of prior learning where eligible.",
    ],
    trainingInfo: [
      "Training is delivered through classroom sessions, practical activities, and structured self-study.",
    ],
    assessmentMethods: ["Written questions", "Projects", "Reports"],
    resourceRequirements:
      "You are required to bring your own laptop with Office 365 or similar program to all classes.",
  },
  {
    slug: "rii60520-advanced-diploma-of-civil-construction-design",
    category: "Civil Engineering",
    code: "RII60520",
    title: "Advanced Diploma of Civil Construction Design",
    cricosCode: "118206F",
    heroImage: "/images/Frame 1000005069.svg",
    overviewImage: "/images/Image 4.svg",
    details: [
      {
        label: "Delivery Mode",
        value: "Classroom and structured self-study.",
      },
      {
        label: "Duration",
        value: "104 weeks",
      },
      {
        label: "Study Load",
        value: "20 hours per week",
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
      "This qualification develops practical civil construction design skills through industry-focused learning, technical practice, and applied project work.",
    ],
    outcomes: [
      "Develop civil construction design and documentation skills.",
      "Prepare for technical roles or further study in civil engineering pathways.",
    ],
    entryRequirements: [
      {
        bold: "Be at least 18 years of age.",
        rest: "",
      },
      {
        bold: "Participate in a course entry interview",
        rest: "to determine suitability.",
      },
      {
        bold: "Meet the English language requirements",
        rest: "listed below.",
      },
    ],
    englishRequirements: [
      "IELTS 6.0 or equivalent.",
      "Successful completion of an English Placement Test.",
    ],
    coreUnits: [],
    electiveUnits: [],
    courseCredit: [
      "Students may apply for credit transfer or recognition of prior learning where eligible.",
    ],
    trainingInfo: [
      "Training is delivered through classroom sessions, practical activities, and structured self-study.",
    ],
    assessmentMethods: ["Projects", "Reports", "Role plays/observations"],
    resourceRequirements:
      "You are required to bring your own laptop with Office 365 or similar program to all classes.",
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getCourseBySlug(slug: string): CourseDetail | undefined {
  return courses.find((course) => course.slug === slug);
}

export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Details | Indigo Polytechnic",
    };
  }

  return {
    title: `${course.code} | ${course.title} | Indigo Polytechnic`,
    description: course.overview[0],
  };
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-[13px] font-bold uppercase italic tracking-wide text-white">
      <span className="h-1.5 w-1.5 rounded-full bg-white" />
      {children}
    </span>
  );
}

function UnitTable({
  title,
  units,
  variant = "blue",
}: {
  title: string;
  units: Unit[];
  variant?: "blue" | "gray";
}) {
  const isGray = variant === "gray";

  return (
    <div className="overflow-hidden rounded-[8px] border border-[#D9D9D9] bg-white">
      <div
        className={`flex items-center justify-between px-4 py-3 text-[20px] font-bold text-white ${
          isGray ? "bg-[#777D85]" : "bg-[#0C06DA]"
        }`}
      >
        <span>{title}</span>
        <span>-</span>
      </div>

      {units.length > 0 ? (
        <div className="divide-y divide-[#E7E7E7]">
          {units.map((unit) => (
            <div
              key={`${unit.code}-${unit.title}`}
              className="grid grid-cols-[140px_1fr] text-[15px] text-[#8A8A8A]"
            >
              <span className="border-r border-[#E7E7E7] px-4 py-3 font-bold text-[#737373]">
                {unit.code}
              </span>

              <span className="px-4 py-3">{unit.title}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="px-4 py-5 text-[12px] leading-5 text-[#8A8A8A]">
          Unit details will be available soon.
        </div>
      )}

      {isGray && (
        <Link
          href="/courses"
          className="block border-t border-[#E7E7E7] px-4 py-3 text-[12px] font-bold text-[#0C06DA]"
        >
          + View All Elective Units
        </Link>
      )}
    </div>
  );
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden font-pop">
      <section className="relative flex min-h-[430px] items-center justify-center overflow-hidden px-6 py-20 text-center sm:min-h-[480px]">
        <Image
          src={course.heroImage}
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/15" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
          <SectionLabel>{course.category}</SectionLabel>

          <p className="text-[36px] font-bold leading-tight text-white sm:text-[46px] lg:text-[62px]">
            {course.code}
          </p>

          <h1 className="mt-4 max-w-4xl text-[40px] font-bold leading-tight text-[#0C06DA] sm:text-[58px] lg:text-[64px]">
            {course.title}
          </h1>
        </div>
      </section>

      <section className="px-6 pb-14 pt-16 lg:px-8">
        <div className="mx-auto min-h-[350px] max-w-[1370px] overflow-hidden rounded-[6px] border border-[#D9D9D9] bg-white">
          <div className="grid bg-[#0C06DA] text-white lg:grid-cols-[1fr_210px]">
            <h2 className="px-8 py-7 text-[28px] font-bold sm:px-8">
              Course Details
            </h2>

            <div className="border-t border-white/30 px-6 py-4 lg:border-l lg:border-t-0">
              <p className="text-[20px] font-bold uppercase">CRICOS Code</p>
              <p className="text-[20px] font-bold">{course.cricosCode}</p>
            </div>
          </div>

          <div className="grid gap-x-12 gap-y-8 px-6 py-8 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
            {course.details.map((detail) => (
              <div key={detail.label} className="flex items-start gap-3">
                <span className="mt-[7px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#0C06DA]" />

                <div>
                  <h3 className="text-[17px] font-bold uppercase text-[#171717]">
                    {detail.label}
                  </h3>

                  {detail.href ? (
                    <Link
                      href={detail.href}
                      className="mt-2 inline-flex text-[14px] font-semibold text-[#0C06DA]"
                    >
                      {detail.value}
                    </Link>
                  ) : (
                    <p className="mt-2 text-[15px] leading-5 text-[#8A8A8A]">
                      {detail.description ?? detail.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-8">
        <div className="mx-auto grid max-w-[1370px] gap-6 lg:grid-cols-[1fr_500px] lg:items-start">
          <div>
            <h2 className="text-[30px] font-bold text-[#171717]">
              Course Overview
            </h2>

            <div className="mt-6 max-w-[800px] space-y-3 text-[16px] leading-7 text-[#8A8A8A]">
              {course.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="relative h-[350px] w-full overflow-hidden rounded-[8px] lg:h-[330px] lg:w-[500px]">
            <Image
              src={course.overviewImage}
              alt={`${course.title} classroom session`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-[1370px]">
          <h2 className="text-[30px] font-bold text-[#171717]">Outcomes</h2>

          <p className="mt-6 text-[17px] leading-8 text-[#8A8A8A]">
            This course is specifically designed for international students who
            fall into the following categories:
          </p>

          <div className="mt-6 grid gap-x-16 gap-y-4 md:grid-cols-2">
            {course.outcomes.map((outcome) => (
              <div key={outcome} className="flex items-start gap-3">
                <Image
                  src="/images/tick.svg"
                  alt="Tick"
                  width={20}
                  height={20}
                  className="mt-[4px] shrink-0"
                />

                <p className="text-[17px] leading-7 text-[#8A8A8A]">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-[1370px]">
          <h2 className="text-[30px] font-bold text-[#171717]">
            Entry Requirements
          </h2>

          <p className="mt-5 text-[#8A8A8A]">
            Indigo Polytechnic College has the following entry requirements
          </p>

          <ul className="mt-4 space-y-3">
            {course.entryRequirements.map((requirement) => (
              <li key={requirement.bold} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0C06DA]" />

                <span className="leading-7">
                  <span className="font-semibold text-[#171717]">
                    {requirement.bold}
                  </span>{" "}
                  <span className="text-[#8A8A8A]">{requirement.rest}</span>
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 leading-7 text-[#8A8A8A]">
            English language competence can also be demonstrated through
            documented evidence of any of the following:
          </p>

          <ul className="mt-3 space-y-2">
            {course.englishRequirements.map((requirement) => (
              <li key={requirement} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8A8A8A]" />

                <span className="leading-7 text-[#8A8A8A]">{requirement}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 italic leading-6 text-[#171717]">
            Note that other English language tests such as PTE and TOEFL can be
            accepted. You are required to provide your results so that we can
            confirm they are equivalent to IELTS 6.0.
          </p>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-[1370px]">
          <h2 className="text-[30px] font-bold text-[#171717]">Units</h2>

          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <UnitTable title="CORE UNITS" units={course.coreUnits} />

            <UnitTable
              title="ELECTIVE UNITS"
              units={course.electiveUnits}
              variant="gray"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-[1370px]">
          <h2 className="text-[30px] font-bold text-[#171717]">
            Course credit
          </h2>

          <div className="mt-5 space-y-4 leading-7 text-[#8A8A8A]">
            {course.courseCredit.map((paragraph) => (
              <p key={paragraph}>
                {paragraph.includes("info@ip.edu.au") ? (
                  <>
                    {paragraph.replace("info@ip.edu.au", "")}
                    <a
                      href="mailto:info@ip.edu.au"
                      className="text-[#0C06DA] underline"
                    >
                      info@ip.edu.au
                    </a>
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-[1370px]">
          <h2 className="text-[30px] font-bold text-[#171717]">
            Training and assessment information
          </h2>

          <div className="mt-5 space-y-4 leading-7 text-[#8A8A8A]">
            {course.trainingInfo.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-5 text-[16px] leading-7 text-[#8A8A8A]">
            Assessments are an integral part of this course and may encompass a
            variety of formats, such as:
          </p>

          <ul className="mt-3 list-disc space-y-1 pl-6 leading-7 text-[#8A8A8A]">
            {course.assessmentMethods.map((method) => (
              <li key={method}>{method}</li>
            ))}
          </ul>

          <p className="mt-5 leading-7 text-[#8A8A8A]">
            At the commencement of each unit, your trainer and assessor will
            outline the specific assessment tasks that you are required to
            complete.
          </p>
        </div>
      </section>

      <section className="px-6 pb-8 pt-8 lg:px-8">
        <div className="mx-auto max-w-[1370px]">
          <h2 className="text-[30px] font-bold text-[#171717]">
            Resource Requirements
          </h2>

          <p className="mt-5 leading-7 text-[#8A8A8A]">
            {course.resourceRequirements}
          </p>
        </div>
      </section>

      <AdmissionBanner />
    </main>
  );
}
