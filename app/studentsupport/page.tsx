import type { ReactNode } from "react";
import Image from "next/image";

type JourneyCard = {
  title: string;
  description: string;
};

type SupportService = {
  icon: string;
  title: string;
  description: string;
  items: string[];
};

type CrisisContact = {
  name: string;
  description?: string;
  phone: string;
  link?: string;
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-[13px] font-bold uppercase italic tracking-wide text-white">
      <span className="h-1.5 w-1.5 rounded-full bg-white" />
      {children}
    </span>
  );
}

function CheckIcon() {
  return <Image src="/images/tick.svg" alt="" width={22} height={22} />;
}

function WarningIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-9 w-9 shrink-0 text-[#EF4444]"
    >
      <path
        d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-9 w-9 shrink-0 text-[#EF4444]"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 8v5m0 3h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const journeyCards: JourneyCard[] = [
  {
    title: "Welcome & Orientation",
    description:
      "Join our orientation sessions to learn about campus facilities, student services, academic expectations, and life in Australia.",
  },
  {
    title: "Campus Tour",
    description:
      "Explore the campus, classrooms, student facilities, and key support services before your classes begin.",
  },
  {
    title: "Student Handbook",
    description:
      "Access important policies, procedures, campus information, and academic guidelines in one place.",
  },
  {
    title: "Essential Checklists",
    description:
      "Prepare for your first day with helpful enrolment, accommodation, banking, transport, and study checklists.",
  },
];

const supportServices: SupportService[] = [
  {
    icon: "/images/career-dev-logo.svg",
    title: "Career Development",
    description:
      "Build career-ready skills with resume support, interview preparation, and employability workshops.",
    items: [
      "Resume & Interview Support",
      "Career Guidance",
      "Industry Workshops",
      "Employment Resources",
    ],
  },
  {
    icon: "/images/student-wellbeing-logo.svg",
    title: "Student Wellbeing",
    description:
      "Supporting students' study-life balance with wellbeing information, guidance, and essential support services.",
    items: [
      "Mental Wellbeing",
      "Health Services",
      "Counselling Support",
      "Accessibility Support",
    ],
  },
  {
    icon: "/images/language&learning-logo.svg",
    title: "Language & Learning",
    description:
      "Access learning resources, academic guidance, and study support to achieve your goals.",
    items: [
      "Academic Skill Support",
      "Language Assistance",
      "Study Resources",
      "Library",
    ],
  },
];

const crisisContacts: CrisisContact[] = [
  {
    name: "Student Women's Health Centre",
    phone: "(03) 6231 3488",
  },
  {
    name: "Hobart Women's Health Centre",
    phone: "1800 675 028",
    link: "https://www.hwhealth.org.au/",
  },
  {
    name: "Lifeline",
    description: "Telephone support and suicide prevention",
    phone: "13 11 14",
  },
  {
    name: "Mental Health Helpline",
    description: "Mental health information and assessments",
    phone: "1800 332 388 (available 24/7)",
  },
  {
    name: "Kids Helpline",
    description:
      "Up to 25 years old. Aimed for aged 5-25 years old provide support counselling and information.",
    phone: "1800 55 1800",
  },
];

const emergencyReasons: string[] = [
  "Contact emergency services in need of ambulance",
  "Need urgent medical or ambulance assistance.",
  "You have self-witnessed a serious accident",
  "Have witnessed or experienced a crime requiring immediate police assistance",
  "Need urgent assistance from fire and rescue services.",
  "Are concerned about someone's immediate safety or wellbeing.",
];

export default function StudentSupportPage() {
  return (
    <main className="overflow-x-hidden font-pop">
      {/* Hero */}
      <section className="relative flex min-h-[658px] items-center justify-center overflow-hidden px-6 py-20 text-center">
        <Image
          src="/images/studentsupport-bg.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/" />

        <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center">
          <SectionLabel>Student Support</SectionLabel>

          <h1 className=" text-[36px] font-bold leading-tight text-white sm:text-[46px] lg:text-[58px]">
            Supporting You Every <span className="text-[#0C06DA]">Step</span> of
            Your <span className="text-[#0C06DA]">Journey</span>
          </h1>

          <p className="mt-6 max-w-[720px] text-[16px] leading-7 text-white/90 sm:text-[20px]">
            From your first day on campus to graduation, our dedicated support
            services are here to help you settle in, succeed academically, and
            make the most of your student experience.
          </p>

          <a
            href="#contact-support"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0C06DA] py-3 pl-6 pr-2 text-[20px] font-semibold text-white transition hover:bg-[#0B05C6]"
          >
            Contact Support
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0C06DA]">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M5 12h14m0 0-6-6m6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* Everything You Need to Begin Your Journey */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1263px] px-6 lg:px-8">
          <h2 className="text-[28px] font-bold leading-tight text-[#171717] sm:text-[38px]">
            Everything <span className="text-[#0C06DA]">You Need</span> to Begin
            Your Journey
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {journeyCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[22px] border border-[#EDF0F5] p-6"
              >
                <h3 className="text-[18px] font-bold text-[#171717]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-[#8A8A8A]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Our Support Services */}
          <div className="mt-30 flex items-center justify-center gap-6">
            <span className="h-px flex-1 max-w-[433px] bg-[#BABABA]/30" />
            <h2 className="shrink-0 text-[28px] font-bold leading-tight text-[#171717] sm:text-[38px]">
              Our <span className="text-[#0C06DA]">Support</span> Services
            </h2>
            <span className="h-px flex-1 max-w-[433px] bg-[#BABABA]/30" />
          </div>

          <div className="mt-20 grid grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-3">
            {supportServices.map((service) => (
              <div
                key={service.title}
                className="h-[420px] w-full rounded-xl border border-[#E7E6FB]/60 bg-[#E7E6FB]/50 p-7 shadow-[0_4px_20px_rgba(9,4,155,0.06)]"
              >
                <Image src={service.icon} alt="" width={44} height={44} />

                <h3 className="mt-4 text-[20px] font-bold text-[#171717]">
                  {service.title}
                </h3>

                <p className="mt-3 text-[15px] leading-6 text-[#545454]">
                  {service.description}
                </p>

                <ul className="mt-7 space-y-6">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-[15px] text-[#171717]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Crisis & Emergency Services */}
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_0.85fr]">
            {/* Crisis & Support Services */}

            <div className="flex h-[600px] w-full max-w-[580px] flex-col rounded-lg bg-white p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3">
                <WarningIcon />
                <h3 className="text-[32px] font-bold text-[#171717]">
                  Crisis & Support Services
                </h3>
              </div>

              <div className="mt-6 flex flex-1 flex-col justify-between">
                {crisisContacts.map((contact) => (
                  <div
                    key={contact.name}
                    className="rounded-xl border border-[#EDF0F5] px-5 py-2"
                  >
                    <p className="text-[16px] font-bold text-[#171717]">
                      {contact.name}
                    </p>

                    {contact.description && (
                      <p className="mt-1 text-[14px] text-[#8A8A8A]">
                        {contact.description}
                      </p>
                    )}

                    <p className="mt-1 text-[13px] font-semibold text-[#545454]">
                      {contact.phone}
                    </p>

                    {contact.link && (
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-[13px] text-[#0C06DA] underline"
                      >
                        {contact.link}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Services */}
            <div className="flex h-[600px] flex-col rounded-lg bg-white p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3">
                <AlertIcon />
                <h3 className="text-[32px] font-bold text-[#171717]">
                  Emergency Services
                </h3>
              </div>

              <div className="mt-5 flex flex-1 flex-col justify-between">
                <p className="text-[16px] leading-7 text-[#545454]">
                  In Australia Emergency services can be contacted by dialing{" "}
                  <strong className="text-[#171717]">000</strong> from any phone
                  in Australia depending on the emergency.
                </p>

                <ul className="space-y-3">
                  {emergencyReasons.map((reason) => (
                    <li
                      key={reason}
                      className="flex gap-3 text-[16px] leading-6 text-[#545454]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#545454]" />
                      {reason}
                    </li>
                  ))}
                </ul>

                <p className="text-[16px] leading-7 text-[#545454]">
                  If you are unsure whether you need to call the number of your
                  local police force or emergency services, call 000 anyway. The
                  operator will direct your call to the appropriate service.
                </p>
              </div>
            </div>
          </div>

          {/* Tasmanian Interpreting Service */}
          <div className="mt-20 rounded-3xl border-l-5 border-[#0C06DA] bg-white p-7 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
            <h3 className="text-[19px] font-bold text-[#24893E]">
              Tasmanian Interpreting Service
            </h3>
            <p className="mt-2 text-[16px] leading-7 text-[#545454]">
              Professional language interpretation support for international
              students who need assistance communicating in English across
              healthcare, education, government, and essential community
              services.{" "}
              <strong className="text-[#171717]">Call 1800 652 144</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Need Assistance CTA */}
      <section id="contact-support" className="px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[33px] px-6 py-16 text-center sm:px-10">
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
              We&apos;re Here to Help
            </h2>

            <p className="mt-4 text-[15px] leading-6 text-white/80 sm:text-[18px]">
              Whether you have a question about your studies, campus life, or
              student services, our support team is ready to provide guidance
              whenever you need it.
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
