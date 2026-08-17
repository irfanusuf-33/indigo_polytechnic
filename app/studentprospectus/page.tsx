"use client";

import Image from "next/image";
import Link from "next/link";

export default function StudentProspectusPage() {
  return (
    <main className="font-pop">
      <section className="relative flex h-[380px] w-full items-center justify-center overflow-hidden sm:h-[420px] lg:h-[500px] lg:items-start">
        <Image
          src="/images/studentessential-bg.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center lg:mt-48">
          <span className="font-pop mb-5 flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-xs font-semibold uppercase italic tracking-wide text-white">
            <span className="text-pop h-1.5 w-1.5 rounded-full bg-white" />
            Student Essentials
          </span>

          <h1 className=" font-pop text-3xl font-bold text-white sm:text-4xl lg:text-6xl">
            Plan Your <span className="text-pop text-[#3B82F6]">Future</span>{" "}
            with Confidence
          </h1>

          <p className=" font-pop mt-4 max-w-xl text-sm text-white/90 sm:text-base">
            Explore key information designed to help you make informed decisions
            about your education and career.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-5">
          <div className="mt-3 flex flex-col items-center justify-between gap-4 rounded-lg border border-zinc-200 bg-white px-6 py-5 shadow-sm sm:flex-row">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0C06DA] text-white">
                <Image
                  src="/images/pdf.png"
                  alt="Document"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </span>

              <div>
                <h3 className="text-sm font-semibold text-[#000000] font-pop">
                  Student Prospectus
                </h3>
                <p className="mt-1 text-sm text-[#8A8A8A] font-pop">
                  Complete guide covering courses, admissions, policies, student
                  support, and campus life.
                </p>
              </div>
            </div>

            <a
              href="/files/student-prospectus.pdf"
              download
              className=" text-pop w-full shrink-0 rounded-lg bg-[#0C06DA] px-8 py-2.5 text-center text-sm font-medium text-white transition hover:bg-[#0a05b8] sm:w-auto"
            >
              Download
            </a>
          </div>

          <div className="mt-3 flex flex-col items-center justify-between gap-4 rounded-lg border border-zinc-200 bg-white px-6 py-5 shadow-sm sm:flex-row">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0C06DA] text-white">
                <Image
                  src="/images/pdf.png"
                  alt="Document"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </span>

              <div>
                <h3 className="text-sm font-semibold text-[#000000] font-pop">
                  Fee & Intake
                </h3>
                <p className="mt-1 text-sm text-[#8A8A8A] font-pop">
                  View tuition fees, material costs, and payment options for all
                  qualifications.
                </p>
              </div>
            </div>
            <a
              href="/files/fee-and-intake.pdf"
              download
              className=" font-pop w-full shrink-0 rounded-lg bg-[#0C06DA] px-8 py-2.5 text-center text-sm font-medium text-white transition hover:bg-[#0a05b8] sm:w-auto"
            >
              Download
            </a>
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
