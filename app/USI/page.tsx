import type { ReactNode } from "react";
import Image from "next/image";

type FeatureCard = {
  title: string;
  description: string;
  icon: string;
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-[13px] font-bold uppercase italic tracking-wide text-white">
      <span className="h-2 w-2 rounded-full bg-white" />
      {children}
    </span>
  );
}

const featureCards: FeatureCard[] = [
  {
    title: "Secure Student Record",
    description:
      "Your USI creates a secure online record of your training history, qualifications, and achievements throughout your education journey.",
    icon: "/images/secure-student-record.svg",
  },
  {
    title: "Recognised Qualifications",
    description:
      "A valid USI ensures your completed nationally recognised training can be officially recorded and your qualification can be issued.",
    icon: "/images/recognised-qualification.svg",
  },
  {
    title: "Required for Training",
    description:
      "Students enrolling in recognised Australian training courses must provide a valid USI to meet government requirements.",
    icon: "/images/required-for-training.svg",
  },
  {
    title: "Connected Learning History",
    description:
      "Your USI links your training achievements across different registered training organisations throughout Australia.",
    icon: "/images/connected-learning-history.svg",
  },
];

export default function UsiPage() {
  return (
    <main className="overflow-x-hidden font-pop">
      <section className="relative flex min-h-[658px] items-center justify-center overflow-hidden px-6 py-20 text-center">
        <Image
          src="/images/usi-bg.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/" />

        <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center">
          <SectionLabel>Unique Student Identifier</SectionLabel>

          <h1 className=" text-[42px] font-bold leading-tight text-white sm:text-[52px] lg:text-[58px]">
            Your <span className="text-[#0C06DA]">USI</span>, Your Learning
            Record
          </h1>

          <p className="mt-6 max-w-[720px] text-[16px] leading-7 text-white/90 sm:text-[20px]">
            A Unique Student Identifier (USI) creates a secure online record of
            your Australian training and qualifications. Get your USI ready to
            access your recognised certificates and academic achievements.
          </p>
        </div>
      </section>

      <section className="bg-[#E7E6FB] mt-25 px-6 py-16 sm:px-10 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-[32px] font-bold leading-tight text-[#171717] sm:text-[38px]">
            Everything You Need to Know About Your USI
          </h2>

          <div className="mt-6 space-y-5 text-[16px] leading-7 text-[#545454]">
            <p>
              A Unique Student Identifier (USI) is a personal reference number
              that creates an online record of your Australian training,
              qualifications, and achievements. It helps you track your
              nationally recognised learning history throughout your education
              journey. A valid USI is essential, as students cannot receive
              their official qualification or statement of attainment without
              one. Under the Unique Student Identifiers Act 2014, all Registered
              Training Organisations (RTOs) must collect and verify a valid USI
              for students enrolling in nationally recognised training, unless
              an approved exemption has been granted by the USI Registrar.
            </p>
            <p>
              To create or manage your USI, visit the official USI website at{" "}
              <a
                href="https://www.usi.gov.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0C06DA] underline"
              >
                https://www.usi.gov.au/
              </a>
              . If you need assistance creating your USI, our team will support
              you during your orientation session.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-8">
          <SectionLabel>Understanding Your USI</SectionLabel>

          <h2 className="text-[32px] mt-5 font-bold leading-tight text-[#171717] sm:text-[38px]">
            A <span className="text-[#0C06DA]">Digital Record</span> of Your
            Learning Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-6 text-[#8A8A8A]">
            A Unique Student Identifier (USI) creates a secure online record of
            your Australian training, qualifications, and achievements.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 text-left lg:grid-cols-[357px_1fr]">
            <div>
              <div className="flex h-[91px] w-[357px] items-center justify-center rounded-lg bg-[#09049B] px-6 text-center">
                <p className="text-[14px] font-bold leading-6 text-white">
                  Your USI. Your
                  <br />
                  Achievements. Your Future.
                </p>
              </div>

              <div className="relative mt-5 aspect-[357/420] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/usi-image.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-10">
              {featureCards.map((card) => (
                <div
                  key={card.title}
                  className="flex items-center gap-5 rounded-[22px] border-2 border-[#EDF0F5] px-6 py-5"
                >
                  <Image src={card.icon} alt="" width={60} height={60} />

                  <div>
                    <h3 className="text-[17px] font-bold text-[#171717]">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-6 text-[#8A8A8A]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
