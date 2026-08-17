"use client";

import Image from "next/image";
import Link from "next/link";

export default function ApplicationfromPage() {
  return (
    <main className="font-pop">
      {/* Hero Section */}
      <section className="relative flex h-[380px] w-full items-center justify-center overflow-hidden sm:h-[420px] lg:h-[550px] lg:items-start">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/applicationbg.png')",
          }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center lg:mt-48">
          <span className="text-pop mb-5 flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-[12px] font-semibold uppercase italic tracking-wide text-white">
            <span className="font-pop h-1.5 w-1.5 rounded-full bg-white" />
            agent resgistration
          </span>

          <h1 className="font-pop text-[36px] font-bold text-white sm:text-[48px] lg:text-[60px]">
            Partner with <span className="font-pop text-[#09049B]">Indigo</span>
          </h1>

          <p className="font-pop mt-4 max-w-xl text-[16px] text-white/90 sm:text-[18px] md:text-[20px] lg:text-[22px]">
            Join our partner network and help students take the next step toward
            their careers.
          </p>
        </div>
      </section>

      {/* Application CTA Section */}
      <section className="px-6 py-20">
        <div
          className="mx-auto flex max-w-3xl flex-col items-center rounded-2xl bg-cover bg-center px-6 py-14 text-center"
          style={{
            backgroundImage: "url('/images/formbg.png')",
          }}
        >
          <h1 className="font-pop text-[28px] font-bold text-[#09049B] sm:text-[32px] md:text-[36px] lg:text-[40px]">
            Ready to Become an Indigo Partner?
          </h1>

          <p className="font-pop mt-4 max-w-xl text-[14px] leading-6 text-[#8A8A8A] sm:text-[16px] md:text-[17px] lg:text-[18px]">
            Complete the agent registration form to begin your partnership with
            Indigo. Provide your organisation and contact details to start the
            registration process.
          </p>

          <Link
            href="/agentregistrationform"
            className="font-pop mt-8 flex items-center gap-2 rounded-lg bg-[#0C06DA] px-6 py-3 text-[14px] font-normal text-white transition hover:bg-[#0a05b8]"
          >
            Start Application Form
            <Image
              src="/images/uparrow.png"
              alt="Arrow"
              width={12}
              height={12}
              className="rotate-30 object-contain"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
