"use client";

import Image from "next/image";
import Link from "next/link";

export default function ApplicationfromPage() {
  return (
    <main className="font-pop">
      <section className="relative flex h-[480px] w-full items-center justify-center overflow-hidden sm:h-[480px] lg:min-h-screen lg:h-auto lg:items-start">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/applicationbg.png')" }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center lg:mt-48">
          <span className="text-pop mb-5 flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-xs font-semibold uppercase italic tracking-wide text-white">
            <span className="font-pop h-1.5 w-1.5 rounded-full bg-white" />
            application form
          </span>

          <h1 className="font-pop text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
            Start Your{" "}
            <span className="font-pop text-[#3B82F6]">Application</span> Journey
          </h1>

          <p className="font-pop mt-4 max-w-xl text-sm text-white/90 sm:text-base">
            Fill in all required details and upload the necessary supporting
            documents to complete your application.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div
          className="mx-auto flex max-w-3xl flex-col items-center rounded-2xl bg-cover bg-center px-6 py-14 text-center"
          style={{
            backgroundImage: "url('/images/formbg.png')",
          }}
        >
          <h1 className="font-pop text-3xl font-bold text-[#09049B] sm:text-4xl">
            Ready to apply?
          </h1>

          <p className="font-pop mt-4 max-w-2xl text-sm text-[#8A8A8A]">
            Complete your student application in one guided form. Have your
            documents, English proficiency results, and USI ready before you
            begin.
          </p>

          <Link
            href="/studentregistrationform"
            className="font-pop mt-8 flex items-center gap-2 rounded-lg bg-[#0C06DA] px-6 py-3 text-sm font-normal text-white transition hover:bg-[#0a05b8]"
          >
            Start Application Form
            <Image
              src="/images/uparrow.png"
              alt="Arrow"
              width={12}
              height={12}
              className="object-contain rotate-30"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
