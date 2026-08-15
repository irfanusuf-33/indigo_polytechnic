"use client";

import Image from "next/image";
import Link from "next/link";

export default function AdmissionBanner() {
  return (
    <section className="px-6 pb-20 pt-15">
      <div className="relative mx-auto flex max-w-4xl flex-col overflow-hidden rounded-3xl bg-[#09049B] px-6 py-8 sm:px-12 sm:py-10 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex flex-1 flex-col text-white">
          <span className="order-1 mb-5 flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 font-pop text-xs font-semibold uppercase italic tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-[#09049B]" />

            <p className="text-xs font-semibold uppercase italic tracking-wide text-[#09049B]">
              Admissions Open
            </p>
          </span>
          <h2 className="order-2 font-pop text-3xl font-semibold leading-tight sm:text-4xl">
            Ready to Start Your Future?
          </h2>

          <p className="order-3 mt-4 max-w-md font-pop text-sm text-white/80">
            Join Indigo Polytechnic and gain the skills, knowledge, and
            confidence to build a successful career. Applications are now open
            for upcoming intakes.
          </p>

          <div className="order-4 relative mt-8 h-64 w-full overflow-hidden rounded-2xl bg-white lg:hidden">
            <Image
              src="/images/admissions-panel.png"
              alt="Student using phone with feature highlights"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="order-5 mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/applicationform"
              className="flex items-center gap-2 rounded-lg bg-white px-5 py-2 font-pop text-sm font-normal text-[#0C06DA] transition hover:bg-white/90"
            >
              Apply Now
              <Image
                src="/images/Union.png"
                alt="Arrow"
                width={14}
                height={14}
                className="h-3.5 w-3.5 object-contain"
              />
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-white/40 px-5 py-2 font-pop text-sm font-normal text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="relative hidden h-72 w-full max-w-sm flex-1 overflow-hidden rounded-2xl bg-white lg:block">
          <Image
            src="/images/admissions-panel.png"
            alt="Student using phone with feature highlights"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
