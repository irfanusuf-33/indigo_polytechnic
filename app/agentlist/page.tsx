"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";

type EducationAgent = {
  id: string;
  name: string;
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-[14px] font-bold uppercase italic tracking-wide text-white">
      <span className="h-2.5 w-2.5 rounded-full bg-white" />
      {children}
    </span>
  );
}

const educationAgents: EducationAgent[] = [
  { id: "agent-01", name: "Global Education Partners" },
  { id: "agent-02", name: "Future Pathways Education" },
  { id: "agent-03", name: "International Student Connect" },
  { id: "agent-04", name: "Career Bridge Education" },
  { id: "agent-05", name: "Global Study Network" },
  { id: "agent-06", name: "Global Education Partners" },
  { id: "agent-07", name: "Global Education Partners" },
  { id: "agent-08", name: "Global Education Partners" },
  { id: "agent-09", name: "Global Education Partners" },
  { id: "agent-10", name: "Global Education Partners" },
];

const AGENTS_PER_PAGE = 10;
const TOTAL_PAGES = 5;

export default function EducationAgentsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Placeholder pagination over the static array above — swap for
  // a real fetch keyed on currentPage once the backend is wired up.
  const startIndex = (currentPage - 1) * AGENTS_PER_PAGE;
  const visibleAgents = educationAgents.slice(
    startIndex,
    startIndex + AGENTS_PER_PAGE,
  );

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), TOTAL_PAGES));
  };

  return (
    <main className="overflow-x-hidden font-pop">
      {/* Hero */}
      <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden px-6 py-20 text-center">
        <Image
          src="/images/agentlist-bg.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/" />

        <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center">
          <SectionLabel>Education Partners</SectionLabel>

          <h1 className="mt-4 text-[42px] font-bold leading-tight text-white sm:text-[52px] lg:text-[58px]">
            Our Education <span className="text-[#0C06DA]">Agents</span>
          </h1>

          <p className="mt-4 max-w-[740px] text-[16px] leading-7 text-white/90 sm:text-[20px]">
            Explore our network of education agents who connect prospective
            students with Indigo Polytechnic.
          </p>
        </div>
      </section>

      {/* Agents list */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <h2 className="text-center text-[28px] font-bold leading-tight text-[#171717] sm:text-[38px]">
            Our <span className="text-[#0C06DA]">Partner</span> Education
            Agencies
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-20 gap-y-11 md:grid-cols-2">
            {visibleAgents.map((agent, index) => (
              <div
                key={agent.id}
                className="flex items-center gap-5 rounded-lg border border-[#C3C7CC] px-6 py-7"
              >
                <span className="text-[18px] font-bold text-[#0C06DA]">
                  {String(startIndex + index + 1).padStart(2, "0")}
                </span>
                <span className="h-8 w-px bg-[#C3C7CC]" />
                <span className="text-[18px] font-bold text-[#171717]">
                  {agent.name}
                </span>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav
            aria-label="Agents pagination"
            className="mt-16 flex items-center justify-center gap-2"
          >
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1.5 px-2 text-[15px] font-semibold text-[#0C06DA] transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M19 12H5m0 0 6-6m-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Previous
            </button>

            {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  aria-current={currentPage === page ? "page" : undefined}
                  className={`flex h-9 w-9 items-center justify-center rounded-md text-[15px] font-semibold transition ${
                    currentPage === page
                      ? "bg-[#0C06DA] text-white"
                      : "text-[#171717] hover:bg-[#F5F5F5]"
                  }`}
                >
                  {page}
                </button>
              ),
            )}

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === TOTAL_PAGES}
              className="inline-flex items-center gap-1.5 px-2 text-[15px] font-semibold text-[#171717] transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M5 12h14m0 0-6-6m6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </nav>
        </div>
      </section>
    </main>
  );
}
