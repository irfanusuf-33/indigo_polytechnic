"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";

type FormDocument = {
  id: string;
  icon: string;
  title: string;
  description: string;
  downloadUrl: string;
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-[14px] font-bold uppercase italic tracking-wide text-white">
      <span className="h-2.5 w-2.5 rounded-full bg-white" />
      {children}
    </span>
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

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const forms: FormDocument[] = [
  {
    id: "complaint-appeal",
    icon: "/images/complaint.svg",
    title: "Complaint & Appeal Form",
    description: "Raise a concern or request an appeal.",
    downloadUrl: "#",
  },
  {
    id: "change-agent",
    icon: "/images/change-agent-form.svg",
    title: "Change of Agent Form",
    description: "Submit a request to change your education agent.",
    downloadUrl: "#",
  },
  {
    id: "credit-transfer",
    icon: "/images/credit-transfer.svg",
    title: "Credit Transfer Request Form",
    description: "Apply for credit transfer assessment.",
    downloadUrl: "#",
  },
  {
    id: "student-general-request",
    icon: "/images/student-request-form.svg",
    title: "Student General Request Form",
    description: "Submit general requests related to your studies.",
    downloadUrl: "#",
  },
  {
    id: "deferment-cancellation",
    icon: "/images/deferment.svg",
    title: "Deferment & Cancellation",
    description: "Submit an enrolment status change request.",
    downloadUrl: "#",
  },
  {
    id: "student-details",
    icon: "/images/change-student-details.svg",
    title: "Changes to Student Details Form",
    description: "Update your personal or student information.",
    downloadUrl: "#",
  },
];

export default function FormsAndDownloadsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredForms = forms.filter((form) =>
    `${form.title} ${form.description}`
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase()),
  );

  return (
    <main className="overflow-x-hidden font-pop">
      {/* Hero */}
      <section className="relative flex min-h-[651px] items-center justify-center overflow-hidden px-6 py-20 text-center">
        <Image
          src="/images/forms-bg.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/" />

        <div className=" relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center">
          <SectionLabel>Student Resources</SectionLabel>

          <h1 className="mt-10 text-[42px] font-bold leading-tight text-white sm:text-[52px] lg:text-[58px]">
            Official <span className="text-[#0C06DA]">Forms</span> & Downloads
          </h1>

          <p className=" max-w-[720px] text-[16px] leading-7 text-white/90 sm:text-[20px]">
            Access all the official forms you need throughout your academic
            journey.
          </p>

          <form
            role="search"
            onSubmit={(event) => event.preventDefault()}
            className="mt-13 flex w-full max-w-[634px] items-center gap-2 rounded-lg border border-white/20 bg-white p-1.5"
          >
            <label htmlFor="form-search" className="sr-only">
              Search form
            </label>

            <input
              id="form-search"
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search for a form"
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

      {/* Forms & Downloads */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1263px] px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <SectionLabel>Available Documents</SectionLabel>

            <h2 className="mt-5 text-[32px] font-bold leading-tight text-[#171717] sm:text-[38px]">
              Find the <span className="text-[#0C06DA]">Form</span> You Need
            </h2>

            <p className="mt-4 max-w-2xl text-[16px] leading-6 text-[#8A8A8A]">
              Browse all official student forms and download the latest version
              in just one click.
            </p>
          </div>

          {/* Forms Grid */}
          <div className="mt-16 grid grid-cols-1 gap-[50px] sm:grid-cols-2 xl:grid-cols-3">
            {filteredForms.map((form) => (
              <div
                key={form.id}
                className="flex h-[270px] flex-col rounded-[12px] border border-[#E1E5EA] bg-white px-[14px] py-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
              >
                {/* Icon */}
                {/* Icon */}
                <Image
                  src={form.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="h-18 w-18 object-contain"
                />

                {/* Title */}
                <h3 className="mt-3 text-[20px] font-bold leading-5 text-[#171717]">
                  {form.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[15px] leading-[18px] text-[#545454]">
                  {form.description}
                </p>

                {/* Download Button */}
                <a
                  href={form.downloadUrl}
                  download
                  className="mt-auto inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#0C06DA] text-[16px] font-medium text-white transition hover:bg-[#0B05C6]"
                >
                  Download
                  <DownloadIcon />
                </a>
              </div>
            ))}

            {filteredForms.length === 0 && (
              <p className="col-span-full text-center text-[15px] text-[#8A8A8A]">
                No forms match your search.
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
              Can&apos;t Find the Right Form?
            </h2>

            <p className="mt-4 text-[15px] leading-6 text-white/80 sm:text-[18px]">
              Our admissions and student support team is here to help you find
              the correct form, answer your questions, and guide you through the
              process.
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
