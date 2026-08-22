"use client";

import { FormEvent, useState } from "react";
import { apiUrl } from "@/utils/api";

const CONTACT_US_API_URL = apiUrl("/help-and-support/contact-us");

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(CONTACT_US_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Failed to send your message.");
      }

      setStatus({
        type: "success",
        message: result.message || "Message sent successfully.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="font-pop">
      <section className="relative flex h-[480px] w-full items-center justify-center overflow-hidden sm:h-[480px] lg:min-h-screen lg:h-auto lg:items-start">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/contactbg.png')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center px-6 text-center lg:mt-48">
          <span className="mb-5 flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-xs font-semibold uppercase italic tracking-wide text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Contact Us
          </span>
          <h1 className="text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
            Lets <span className="text-[#3B82F6]">Talk</span> About Your Future
          </h1>
          <p className="mt-4 max-w-xl text-sm text-white/90 sm:text-base">
            Whether you have questions about our programs, admissions, or
            student support, our team is ready to provide the guidance you need.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl border-4 border-[#E7E6FB] bg-white p-5 sm:border-8 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <span className="mb-5 flex w-fit items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 font-pop text-xs font-semibold uppercase italic tracking-wide text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Get in Touch
              </span>

              <h2 className="font-pop text-xl font-bold leading-tight text-[#000000] sm:text-2xl lg:text-3xl">
                Let&apos;s{" "}
                <span className="font-pop text-[#0C06DA]">Start</span> the
                Conversation
              </h2>

              <p className="mt-4 max-w-md font-pop text-sm text-[#8A8A8A]">
                From choosing the right program to understanding the application
                process, we&apos;re here to support you every step of the way.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex w-full items-center gap-4 rounded-xl bg-[#EEF0FC] px-5 py-4 sm:max-w-[350px]">
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
                    <p className="text-sm text-[#8A8A8A]">Hobart Campus</p>
                  </div>
                </div>

                <div className="flex w-full items-center gap-4 rounded-xl bg-[#EEF0FC] px-5 py-4 sm:max-w-[350px]">
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
                    <p className="break-all text-sm text-[#8A8A8A]">
                      info@ip.edu.au
                    </p>
                  </div>
                </div>

                <div className="flex w-full items-center gap-4 rounded-xl bg-[#EEF0FC] px-5 py-4 sm:max-w-[350px]">
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
                    <p className="text-sm text-[#8A8A8A]">03 6159 6209</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 font-pop text-base font-semibold text-[#09049B] sm:text-lg">
                Drop us a message
              </h3>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                {status && (
                  <div
                    className={`rounded-lg border px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "border-green-200 bg-green-50 text-green-700"
                        : "border-red-200 bg-red-50 text-red-700"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-pop text-sm font-medium text-[#000000]">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 font-pop text-sm text-[#000000] outline-none placeholder:text-[#8A8A8A] focus:border-[#0C06DA]"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block font-pop text-sm font-medium text-[#000000]">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 font-pop text-sm text-[#000000] outline-none placeholder:text-[#8A8A8A] focus:border-[#0C06DA]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block font-pop text-sm font-medium text-[#000000]">
                    Phone
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    required
                    className="w-full rounded-lg border border-zinc-200 px-3 py-2.5 font-pop text-sm text-[#000000] outline-none placeholder:text-[#8A8A8A] focus:border-[#0C06DA]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block font-pop text-sm font-medium text-[#000000]">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Your Message Here"
                    rows={4}
                    required
                    className="w-full resize-none rounded-lg border border-zinc-200 px-3 pb-7 pt-2.5 font-pop text-sm text-[#000000] outline-none placeholder:text-[#8A8A8A] focus:border-[#0C06DA]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-[#0C06DA] px-6 py-3 font-pop text-sm font-normal text-white transition hover:bg-[#0a05b8] disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
