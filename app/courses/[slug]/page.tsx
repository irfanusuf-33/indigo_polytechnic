import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdmissionBanner from "@/components/layout/AdmissionBanner";
import { courses, getCourseBySlug, type Unit } from "@/data/courses";

type PageProps = {
  params: Promise<{ slug: string }>;
};

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
            {course.overviewSkills && course.overviewSkills.length > 0 && (
              <>
                {course.overviewSkillsIntro && (
                  <p className="mt-3 max-w-[800px] text-[16px] leading-7 text-[#8A8A8A]">
                    {course.overviewSkillsIntro}
                  </p>
                )}

                <ul className="mt-3 max-w-[800px] list-disc space-y-2 pl-5 text-[16px] leading-7 text-[#8A8A8A]">
                  {course.overviewSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div
            className="relative h-[350px] w-full overflow-hidden rounded-[8px] lg:w-[500px]"
            style={{ height: course.overviewImageHeight ?? 330 }}
          >
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
            {course.outcomesIntro}
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
          <div className="mt-6 space-y-3 text-[17px] leading-7 text-[#8A8A8A]">
            {course.outcomesOutro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
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

          <div className="mt-6 grid items-start gap-10 lg:grid-cols-2">
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

          <ul className="mt-3 list-disc space-y-1 pl-6 leading-7 text-[#8A8A8A]">
            {course.assessmentMethods.map((method) => (
              <li key={method}>{method}</li>
            ))}
          </ul>

          <div className="mt-5 space-y-3 leading-7 text-[#8A8A8A]">
            {course.assessmentOutro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
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
