import type { ReactNode } from "react";
import Image from "next/image";
import AdmissionBanner from "@/components/layout/AdmissionBanner";

type Stat = {
  title: string;
  label: string;
};

type KeyInfoItem = {
  term: string;
  description: string;
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-[13px] font-bold uppercase italic tracking-wide text-white">
      <span className="h-1.5 w-1.5 rounded-full bg-white" />
      {children}
    </span>
  );
}

const heroStats: Stat[] = [
  { title: "Protected", label: "Student Rights" },
  { title: "Compliant", label: "Standards" },
  { title: "Quality", label: "Education" },
];

const keyInformation: KeyInfoItem[] = [
  {
    term: "ESOS Framework:",
    description:
      "Provides standards and protections for international students studying in Australia.",
  },
  {
    term: "National Code 2018:",
    description:
      "Establishes standards that education providers and education agents must follow.",
  },
  {
    term: "Student Rights & Responsibilities:",
    description:
      "International students should understand their rights, visa obligations, and responsibilities while studying.",
  },
  {
    term: "Education Agents:",
    description:
      "Agents must follow the National Code and ethical recruitment practices and must not provide unauthorised migration advice.",
  },
  {
    term: "Student Visa Scope:",
    description:
      "The ESOS framework applies to students enrolled in onshore programs while holding an Australian Student Visa.",
  },
  {
    term: "Tuition Protection Service (TPS):",
    description:
      "Provides protection if a registered provider is unable to deliver a paid course and cannot provide an acceptable alternative or refund eligible unspent tuition fees.",
  },
  {
    term: "Student Protection:",
    description:
      "The framework supports access to an alternative course or refund through TPS where applicable.",
  },
  {
    term: "Further Information:",
    description:
      "Students can refer to the ESOS Framework Student Fact Sheet and TPS resources for detailed information.",
  },
];

export default function EsosCompliancePage() {
  return (
    <main className="overflow-x-hidden font-pop">
      <section className="relative flex min-h-[662px] items-center justify-center overflow-hidden px-6 py-20 text-center">
        <Image
          src="/images/esos-bg.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center">
          <SectionLabel>ESOS Compliance</SectionLabel>

          <h1 className="text-[58px] font-bold leading-tight text-white">
            Education Services for{" "}
            <span className="text-[#0C06DA]">Overseas</span> Students
          </h1>

          <p className="mt-4 text-[20px] italic text-white/90">
            Your Rights and Responsibilities
          </p>

          <div className="mt-10 h-[2px] w-full bg-white/100" />

          <div className="mt-10 grid w-full grid-cols-3 divide-x divide-white/100">
            {heroStats.map((stat) => (
              <div key={stat.title} className="px-2 sm:px-4">
                <p className="text-[16px] font-bold leading-tight text-white sm:text-[22px] md:text-[26px] lg:text-[32px]">
                  {stat.title}
                </p>
                <p className="mt-1 text-[11px] text-white/80 sm:text-[13px] lg:text-[16px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 h-[2px] w-full bg-white/100" />
        </div>
      </section>

      <section className="bg-[#EEECFB] px-6 py-16 mt-30">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[38px] font-bold text-[#171717]">
            ESOS Compliance
          </h2>

          <p className="mt-5 text-[16px] leading-7 text-[#8A8A8A]">
            The Australian Government wants overseas students in Australia to
            have a safe, enjoyable and rewarding time while they study.
            Australia&apos;s laws promote quality education and consumer
            protection for overseas students. These laws are known as the ESOS
            framework and they include the{" "}
            <strong className="text-[#8A8A8A]">
              Education Services for Overseas Students (ESOS) Act 2000
            </strong>{" "}
            and the{" "}
            <strong className="text-[#8A8A8A]">National Code 2018.</strong>
          </p>
        </div>
      </section>

      <section className="px-6 py-16 mt-10">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="text-center text-[38px] font-bold leading-tight text-[#171717]">
            Education <span className="text-[#0C06DA]">Services</span> for
            Overseas Students Legislative Framework (ESOS)
          </h2>

          <p className="mt-10 text-[16px] leading-7 text-[#8A8A8A]">
            International students studying in Australia on a Student Visa are
            protected under the{" "}
            <strong className="text-[#8A8A8A]">
              Education Services for Overseas Students (ESOS) Act 2000
            </strong>
            , which establishes a legal framework for quality education and
            student protection. The ESOS framework includes the{" "}
            <strong className="text-[#8A8A8A]">ESOS Act 2000</strong>,{" "}
            <strong className="text-[#8A8A8A]">National Code 2018</strong>, and{" "}
            <strong className="text-[#8A8A8A]">
              Tuition Protection Service (TPS)
            </strong>
            , supporting quality education, financial protection, and clear
            rights and responsibilities for international students.
          </p>

          <h3 className="mt-10 text-[24px] font-bold text-[#171717]">
            Key Information
          </h3>

          <ul className="mt-4 space-y-3">
            {keyInformation.map((item) => (
              <li key={item.term} className="text-[16px] leading-7">
                <strong className="text-[#171717]">{item.term}</strong>{" "}
                <span className="text-[#8A8A8A]">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AdmissionBanner />
    </main>
  );
}
