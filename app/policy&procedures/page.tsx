"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";

type PolicyDocument = {
  id: string;
  title: string;
  description: string;
  downloadUrl: string;
  previewUrl: string;
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#09049B] px-3 py-1.5 text-[14px] font-bold uppercase italic tracking-wide text-white">
      <span className="h-2 w-2 rounded-full bg-white" />
      {children}
    </span>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M21 21l-4.35-4.35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const policyDocuments: PolicyDocument[] = [
  {
    id: "academic-misconduct",
    title: "Academic Misconduct Policy and Procedure",
    description:
      "Guidelines defining academic integrity, preventing cheating and plagiarism, and managing formal academic misconduct proceedings.",
    downloadUrl: "#",
    previewUrl: "#",
  },
  {
    id: "access-and-equity",
    title: "Access and Equity Policy and Procedure",
    description:
      "Ensures equal educational access, non-discrimination, fairness, and support for all prospective and enrolled students.",
    downloadUrl: "#",
    previewUrl: "#",
  },
  {
    id: "accommodation-assistance",
    title: "Accommodation Assistance Policy and Procedure",
    description:
      "Assistance and housing support guidelines for international students adjusting to life and study in Australia.",
    downloadUrl: "#",
    previewUrl: "#",
  },
  {
    id: "agent-appointment",
    title: "Agent Appointment, Monitoring & Management Policy",
    description:
      "Standards for selection, formal appointment, ethical performance monitoring, and management of education agents.",
    downloadUrl: "#",
    previewUrl: "#",
  },
  {
    id: "english-language-proficiency",
    title: "Assessing English Language Proficiency Policy and Procedure",
    description:
      "Requirements and assessment criteria for international student English language proficiency prior to enrolment.",
    downloadUrl: "#",
    previewUrl: "#",
  },
  {
    id: "communication-policy",
    title: "Communication Policy and Procedure",
    description:
      "Institutional communication standards, official channels, email protocols, and student notice distribution.",
    downloadUrl: "#",
    previewUrl: "#",
  },
  {
    id: "copyright-policy",
    title: "Copyright Policy and Procedure",
    description:
      "Guidelines on fair dealing, intellectual property, and copyright law compliance for teaching and learning materials.",
    downloadUrl: "#",
    previewUrl: "#",
  },
  {
    id: "critical-incidents",
    title: "Critical Incidents Policy and Procedure",
    description:
      "Emergency management framework for responding to critical safety, trauma, or emergency situations affecting students.",
    downloadUrl: "#",
    previewUrl: "#",
  },
  {
    id: "student-handbook",
    title: "Student Handbook",
    description:
      "The Student Handbook contains essential information about your academic journey at Indigo Polytechnic College. Download your copy to access essential policies, procedures, and resources.",
    downloadUrl: "#",
    previewUrl: "#",
  },
];

export default function PolicyAndProceduresPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDocuments = policyDocuments.filter((doc) =>
    `${doc.title} ${doc.description}`
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase()),
  );

  return (
    <main className="overflow-x-hidden font-pop">
      <section className="relative flex min-h-[651px] items-center justify-center overflow-hidden px-6 py-20 text-center">
        <Image
          src="/images/p&p-bg.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/" />

        <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#09049B] px-3 py-1.5 text-[14px] font-bold italic tracking-wide text-white">
            <span className="h-2 w-2 rounded-full bg-white" />
            Policy and Procedures
          </span>

          <h1 className="mt-1 text-[42px] font-bold leading-tight text-white sm:text-[52px] lg:text-[58px]">
            Access <span className="text-[#0C06DA]">Official</span>{" "}
            Institutional Documents
          </h1>

          <p className="mt-6 max-w-[720px] text-[16px] leading-7 text-white/90 sm:text-[20px]">
            Browse and download the latest policies, procedures, and governance
            documents that support a transparent, compliant, and high-quality
            learning environment.
          </p>

          <form
            role="search"
            onSubmit={(event) => event.preventDefault()}
            className="mt-8 flex w-full max-w-[634px] items-center gap-2 rounded-lg border border-white/20 bg-white p-1.5"
          >
            <label htmlFor="policy-search" className="sr-only">
              Search by policy name, code or topic
            </label>
            <input
              id="policy-search"
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by policy name, code or topic"
              className="flex-1 bg-transparent px-4 py-2.5 text-[15px] text-[#171717] outline-none placeholder:text-[#8A8A8A]"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#0C06DA] text-white transition hover:bg-[#0B05C6]"
            >
              <SearchIcon />
            </button>
          </form>
        </div>
      </section>

      {/* Policy documents grid */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-8">
          <SectionLabel>Available Policies & Documents</SectionLabel>

          <h2 className="text-[32px] font-bold leading-tight text-[#171717] sm:text-[38px]">
            Explore Our{" "}
            <span className="text-[#0C06DA]">Policies & Procedures</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-6 text-[#8A8A8A]">
            Find essential policy documents and guidelines that support
            transparency, compliance, and a better student experience.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-x-[80px] gap-y-[80px] text-left sm:grid-cols-2 xl:grid-cols-3">
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="flex h-[280px] w-full flex-col rounded-[14px] bg-white px-[15px] py-[22px] shadow-[0_2px_16px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-[22px] font-bold leading-[29px] text-[#252525]">
                  {doc.title}
                </h3>

                <p className="mt-[14px] flex-1 text-[16px] leading-[29px] text-[#666666]">
                  {doc.description}
                </p>

                <div className="mt-[16px] flex items-center gap-[31px]">
                  <a
                    href={doc.downloadUrl}
                    download
                    className="inline-flex h-[42px] w-[180px] items-center justify-center gap-[10px] rounded-[8px] bg-[#1717B8] text-[17px] font-medium text-white transition hover:bg-[#0B05C6]"
                  >
                    Download
                    <DownloadIcon />
                  </a>

                  <a
                    href={doc.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[42px] w-[150px] items-center justify-center gap-[10px] rounded-[8px] border border-[#1717B8] text-[17px] font-medium text-[#1717B8] transition hover:bg-[#0C06DA]/5"
                  >
                    <EyeIcon />
                    Preview
                  </a>
                </div>
              </div>
            ))}

            {filteredDocuments.length === 0 && (
              <p className="col-span-full text-[15px] text-[#8A8A8A]">
                No policies match your search.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Need Assistance CTA */}
      <section id="contact-support" className="mb-16 px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[33px] px-6 py-16 text-center sm:px-10">
          <Image
            src="/images/blue-bg.svg"
            alt=""
            fill
            className="object-cover"
          />

          <div className="relative z-10 mx-auto flex max-w-[640px] flex-col items-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#E7E6FB] px-4 py-1.5 text-[14px] font-bold uppercase italic tracking-wide text-[#09049B]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#09049B]" />
              Need Assistance
            </span>

            <h2 className="text-[28px] font-bold leading-tight text-white sm:text-[38px]">
              Questions About Our Policies?
            </h2>

            <p className="mt-4 text-[15px] leading-6 text-white/80 sm:text-[18px]">
              Our Student Services and Compliance team is here to help you
              understand institutional policies, student rights, and
              administrative procedures..
            </p>

            <button className="mt-8 rounded-lg bg-white px-6 py-3 text-[16px] font-semibold text-[#171717] transition hover:bg-white/90">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
