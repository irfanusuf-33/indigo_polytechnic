import type { ReactNode } from "react";
import Image from "next/image";
import AdmissionBanner from "@/components/layout/AdmissionBanner";

type Feature = {
  title: string;
  description: string;
  icon: string;
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-[13px] font-bold uppercase italic tracking-wide text-white">
      <span className="h-2 w-2 rounded-full bg-white" />
      {children}
    </span>
  );
}

const features: Feature[] = [
  {
    title: "Industry-Aligned Learning",
    description:
      "Our courses are designed around current industry practices and workplace expectations, helping students develop skills that are relevant and valuable in today's job market.",
    icon: "/images/industry-aligned-learning.svg",
  },
  {
    title: "Practical Learning",
    description:
      "Go beyond theory with hands-on training, practical activities, and simulated environments that allow students to apply their knowledge with confidence.",
    icon: "/images/practical-learning.svg",
  },
  {
    title: "Experienced Trainers",
    description:
      "Learn from trainers with practical industry knowledge who bring real-world experience, insights, and professional standards into the learning environment.",
    icon: "/images/experienced-trainers.svg",
  },
  {
    title: "Industry Engagement",
    description:
      "Build connections with civil companies, construction organisations, and industry professionals to gain valuable exposure, networks, and insights into the workplace.",
    icon: "/images/industry-engagement.svg",
  },
  {
    title: "Student-Focused Support",
    description:
      "From enrolment to course completion, our team provides guidance and assistance to help students stay on track and make the most of their learning journey.",
    icon: "/images/student-support.svg",
  },
  {
    title: "Career-Ready Skills",
    description:
      "Develop technical abilities, workplace confidence, and professional skills that help prepare you for employment and support your long-term career growth.",
    icon: "/images/career-ready.svg",
  },
];

export default function WhyIndigoPage() {
  return (
    <main className="overflow-x-hidden font-pop">
      <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden px-6 py-20 text-center">
        <Image
          src="/images/whyindigo.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center">
          <SectionLabel>Why Indigo</SectionLabel>

          <h1 className="mt-4 text-[42px] font-bold leading-tight text-white sm:text-[58px] lg:whitespace-nowrap lg:text-[64px]">
            Building <span className="text-[#0C06DA]">Skills</span>. Creating{" "}
            <span className="text-[#0C06DA]">Opportunities</span>.
          </h1>

          <p className="mt-6 max-w-[760px] text-[18px] leading-7 text-white sm:text-[20px] lg:text-[22px]">
            At Indigo, we combine practical learning, industry experience, and
            student-focused support to help learners develop the skills and
            confidence needed for successful careers.
          </p>
        </div>
      </section>

      <section className="pb-16 pt-16 lg:pt-24">
        <div className="mx-auto max-w-[1270px] px-6 text-center lg:px-8">
          <SectionLabel>The Indigo Difference</SectionLabel>

          <h2 className="text-[32px] mt-5 font-bold leading-tight text-[#171717] sm:text-[38px]">
            Where Learning Meets{" "}
            <span className="text-[#0C06DA]">Opportunity</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-6 text-[#8A8A8A]">
            At Indigo, we bring together practical education, industry
            engagement, experienced trainers, and dedicated student support to
            create a learning experience focused on real career outcomes.
          </p>
        </div>

        <div className="relative mt-15 w-full overflow-hidden bg-[#F8FAFA] xl:bg-transparent">
          <div
            className="hidden xl:absolute xl:inset-0 xl:block xl:bg-[url('/images/grey-background.svg')] xl:bg-cover xl:bg-center"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 divide-y divide-[#E7E7E7] sm:grid-cols-2 xl:grid-cols-3 sm:divide-x">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-center gap-4 px-8 py-8"
              >
                <span className="-mt-15 flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                  <Image src={feature.icon} alt="" width={26} height={26} />
                </span>

                <div>
                  <h3 className="text-[18px] font-bold leading-5 text-[#171717]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-6 text-[#555555]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AdmissionBanner />
    </main>
  );
}
