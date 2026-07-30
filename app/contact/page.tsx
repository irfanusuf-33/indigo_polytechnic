"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="font-pop">
      <section className="relative min-h-screen fle x h-[420px] w-full items-start justify-center overflow-hidden sm:h-[480px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/contactbg.png')" }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center mt-48">
          <span className="mb-5 flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-xs font-semibold uppercase italic tracking-wide text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Contact Us
          </span>

          <h1 className="text-3xl font-bold text-white sm:text-5xl">
            Let's <span className="text-[#3B82F6]">Talk</span> About Your Future
          </h1>

          <p className="mt-4 max-w-xl text-sm text-white/90 sm:text-base">
            Whether you have questions about our programs, admissions, or
            student support, our team is ready to provide the guidance you need.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl border-8 border-[#E7E6FB] bg-white p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Column */}
            <div>
              {/* Label */}
              <span className="mb-5 flex w-fit items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 font-pop text-xs font-semibold uppercase italic tracking-wide text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Get in Touch
              </span>

              {/* Heading */}
              <h2 className="font-pop text-2xl font-bold leading-tight text-[#000000] sm:text-3xl">
                Let&apos;s{" "}
                <span className="font-pop text-[#0C06DA]">Start</span> the
                Conversation
              </h2>

              {/* Description */}
              <p className="mt-4 max-w-md font-pop text-sm text-[#8A8A8A]">
                From choosing the right program to understanding the application
                process, we&apos;re here to support you every step of the way.
              </p>

              {/* Contact Information */}
              <div className="mt-8 flex flex-col gap-4">
                {/* Visit Campus */}
                <div className="flex w-[350px] items-center gap-4 rounded-xl bg-[#EEF0FC] px-5 py-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0C06DA]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 22s7-6.1 7-12a7 7 0 10-14 0c0 5.9 7 12 7 12z"
                      />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold text-[#000000]">
                      Visit Campus
                    </h3>
                    <p className="text-sm text-[#8A8A8A]">Hobart</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex w-[350px] items-center gap-4 rounded-xl bg-[#EEF0FC] px-5 py-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0C06DA]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7l9 6 9-6"
                      />
                    </svg>
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold text-[#000000]">
                      Email Us
                    </h3>
                    <p className="text-sm text-[#8A8A8A]">
                      contact@indigopoly.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex w-[350px] items-center gap-4 rounded-xl bg-[#EEF0FC] px-5 py-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0C06DA]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 5c0 8.5 6.5 15 15 15l3-3-5-4-2 2c-2.5-1.3-4.7-3.5-6-6l2-2-4-5z"
                      />
                    </svg>
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold text-[#000000]">
                      Call Us
                    </h3>
                    <p className="text-sm text-[#8A8A8A]">
                      +91 2436373635636636
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column — Form */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-[#09049B] font-pop">
                Drop us a message
              </h3>

              <form className="flex flex-col gap-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#000000] font-pop ">
                      Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-xs text-[#000000] outline-none placeholder:text-[#8A8A8A] focus:border-[#0C06DA] font-pop "
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#000000] font-pop ">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-xs text-[#000000] outline-none placeholder:text-[#8A8A8A] focus:border-[#0C06DA] font-pop  "
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#000000] font-pop ">
                    Phone
                  </label>

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-xs text-[#000000] outline-none placeholder:text-[#8A8A8A] focus:border-[#0C06DA] font-pop "
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#000000] font-pop ">
                    Message
                  </label>

                  <textarea
                    placeholder="Enter Your Message Here"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-zinc-200 px-3 pt-2.5 pb-7 text-xs text-[#000000] outline-none placeholder:text-[#8A8A8A] focus:border-[#0C06DA] font-pop "
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-fit rounded-lg bg-[#0C06DA] px-6 py-3 text-sm font-normal text-white transition hover:bg-[#0a05b8]font-pop "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
