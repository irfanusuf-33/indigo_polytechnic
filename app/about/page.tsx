"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="font-pop">
      <section className="relative min-h-screen flex h-[420px] w-full items-start justify-center overflow-hidden sm:h-[480px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/aboutbg.png')" }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center mt-48">
          <span className="mb-5 flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-xs font-semibold uppercase italic tracking-wide text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            About Us
          </span>

          <h1 className="text-3xl font-bold text-white sm:text-5xl">
            Empowering <span className="text-[#3B82F6]">Future</span>{" "}
            Professionals
          </h1>

          <p className="mt-4 max-w-xl text-sm text-white/90 sm:text-base">
            Partnering with colleges to deliver industry-focused vocational
            courses that equip students with practical skills and recognised
            qualifications.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-10 lg:grid-cols-[0.9fr_0.9fr_1fr]">
          <div className="flex flex-col gap-3">
            <div className="rounded-xl bg-[#09049B] px-5 py-4 text-center text-sm font-medium uppercase text-white">
              Students Equipped with
              <br />
              Career-Ready Skills
            </div>

            <div className="relative h-full min-h-[350px] w-full flex-1 overflow-hidden rounded-lg">
              <Image
                src="/images/aboutpic1.png"
                alt="Student working on a laptop"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative h-full min-h-[350px] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/aboutpic2.png"
              alt="Students studying together"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="mb-5 flex w-fit items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-xs font-semibold uppercase italic tracking-wide text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Who We Are
            </span>

            <h2 className="text-2xl font-bold leading-tight text-[#000000] sm:text-3xl">
              Creating Career Pathways Through{" "}
              <span className="text-[#0C06DA]">Industry-Aligned</span> Learning
            </h2>

            <p className="mt-4 text-sm text-[#8A8A8A]">
              Partnering with colleges to deliver industry-focused vocational
              courses that equip students with practical skills and recognised
              qualifications.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              <li className="flex items-center gap-2 whitespace-nowrap text-sm text-[#333333]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#333333]" />
                Career-Focused Curriculum
              </li>

              <li className="flex items-center gap-2 whitespace-nowrap text-sm text-[#333333]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#333333]" />
                Recognised Qualifications
              </li>

              <li className="flex items-center gap-2 whitespace-nowrap text-sm text-[#333333]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#333333]" />
                Practical Skills Training
              </li>

              <li className="flex items-center gap-2 whitespace-nowrap text-sm text-[#333333]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#333333]" />
                Career Pathway Support
              </li>
            </ul>

            <button className="mt-8 flex items-center gap-5 rounded-full bg-[#0C06DA] py-1.5 pl-4 pr-4 text-[16px] font-normal text-white transition hover:bg-[#0a05b8]">
              Get Started
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <Image
                  src="/images/arrow.png"
                  alt="Arrow"
                  width={14}
                  height={14}
                  className="object-contain"
                />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF0FC] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-xs font-semibold uppercase italic tracking-wide text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Our Offerings
          </span>

          <h2 className="text-4xl font-bold text-[#000000] sm:text-4xl leading-snug">
            Everything You Need for
            <br />
            <span className="text-[#0C06DA]">Career-Focused</span> Learning
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#8A8A8A]">
            From industry-aligned courses to practical training and recognised
            qualifications, we help institutions deliver meaningful learning
            experiences that prepare students for successful careers.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0C06DA] p-2">
              <Image
                src="/images/Abouticon(industry).png"
                alt="Industry-Aligned Courses"
                fill
                className="object-contain p-2"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#000000]">
                Industry-Aligned Courses
              </h3>

              <p className="mt-1 text-sm text-[#8A8A8A]">
                Curriculum designed to match current industry needs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0C06DA] p-2">
              <Image
                src="/images/Abouticon(learning).png"
                alt="Practical Learning"
                fill
                className="object-contain p-2"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#000000]">
                Practical Learning
              </h3>

              <p className="mt-1 text-sm text-[#8A8A8A]">
                Hands-on training that builds real-world skills.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0C06DA] p-2">
              <Image
                src="/images/Abouticon(qualification).png"
                alt="Recognised Qualifications"
                fill
                className="object-contain p-2"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#000000]">
                Recognised Qualifications
              </h3>

              <p className="mt-1 text-sm text-[#8A8A8A]">
                Recognised certifications that boost employability.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0C06DA] p-2">
              <Image
                src="/images/Abouticon(engagment).png"
                alt="Industry Engagement"
                fill
                className="object-contain p-2"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#000000]">
                Industry Engagement
              </h3>

              <p className="mt-1 text-sm text-[#8A8A8A]">
                Access valuable industry networks and collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center px-6 py-20 text-center">
        <span className="uppercase mb-6 flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-xs font-semibold italic tracking-wide text-white">
          <span className=" font-pop h-1.5 w-1.5 rounded-full bg-white uppercase" />
          Our Teaching Method
        </span>

        <h2 className="text-4xl font-pop font-bold text-[#000000] sm:text-4xl ">
          Learning <span className=" font-pop text-[#0C06DA]">Beyond</span> the
          Classroom
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[#8A8A8A] font-pop">
          Every student follows a structured learning pathway that combines
          theoretical knowledge, practical training, and real industry
          experience to build confidence and career-ready skills.
        </p>
        <div className="mt-10 flex w-full max-w-5xl items-start justify-center">
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#0C06DA] text-xl font-bold text-[#000000]">
              1
            </div>

            <h3 className="mt-6 text-center font-semibold text-[#000000]">
              Enroll
            </h3>

            <p className="mt-2 h-10 w-[180px] text-center text-xs leading-4 text-[#8A8A8A]">
              Begin your learning journey with easy enrollment and guidance.
            </p>
          </div>

          <div className="-mx-2 mt-8 flex-1 border-t-2 border-dotted border-[#0C06DA]" />

          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#0C06DA] text-xl font-bold text-[#000000]">
              2
            </div>

            <h3 className="mt-6 text-center font-semibold text-[#000000]">
              Learn
            </h3>

            <p className="mt-2 h-10 w-[180px] text-center text-xs leading-4 text-[#8A8A8A]">
              Build strong foundations through interactive classes.
            </p>
          </div>

          <div className="-mx-2 mt-8 flex-1 border-t-2 border-dotted border-[#0C06DA]" />

          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#0C06DA] text-xl font-bold text-[#000000]">
              3
            </div>

            <h3 className="mt-6 text-center font-semibold text-[#000000]">
              Practice
            </h3>

            <p className="mt-2 h-10 w-[180px] text-center text-xs leading-4 text-[#8A8A8A]">
              Apply your knowledge in hands-on labs and workshops.
            </p>
          </div>

          <div className="-mx-2 mt-8 flex-1 border-t-2 border-dotted border-[#0C06DA]" />

          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#0C06DA] text-xl font-bold text-[#000000]">
              4
            </div>

            <h3 className="mt-6 h-6 w-[180px] text-center font-semibold text-[#000000]">
              Industry Projects
            </h3>

            <p className="mt-2 h-10 w-[180px] text-center text-xs leading-4 text-[#8A8A8A]">
              Work on real-world projects, internships and industry cases.
            </p>
          </div>

          <div className="-mx-2 mt-8 flex-1 border-t-2 border-dotted border-[#0C06DA]" />

          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#0C06DA] text-xl font-bold text-[#000000]">
              5
            </div>

            <h3 className="mt-6 text-center font-semibold text-[#000000]">
              Graduate
            </h3>

            <p className="mt-2 h-10 w-[180px] text-center text-xs leading-4 text-[#8A8A8A]">
              Earn a nationally recognised qualification.
            </p>
          </div>
        </div>

        <div className="mt-10 w-full max-w-5xl overflow-hidden rounded-2xl">
          <img
            src="/images/aboutpic.png"
            alt="Students learning through practical training"
            className="h-[300px] w-full object-cover sm:h-[400px]"
          />
        </div>
      </section>

      <section className="flex flex-col items-center px-6 pt-5 pb-20 text-center">
        <span className=" font-pop mb-6 flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-xs font-semibold uppercase italic tracking-wide text-white">
          <span className="font-pop h-1.5 w-1.5 rounded-full bg-white uppercase" />
          Why Choose Us
        </span>

        <h2 className="text-4xl font-pop font-bold text-[#000000] sm:text-4xl ">
          Built for <span className="text-[#0C06DA]">Institutions</span>.
          <br />
          Focused on <span className="text-[#0C06DA]">Student Success</span>.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[#8A8A8A] font-pop">
          Our collaborative approach, reliable support, and commitment to
          educational excellence make us the preferred vocational education
          partner.
        </p>

        <div className="mt-14 grid w-full max-w-5xl grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-3">
          <div className="relative">
            <div className="absolute right-[3px] -top-[3px] h-[105px] w-[88px] rounded-tr-[24px] border-r-[4px] border-t-[4px] border-[#09049B]" />

            <div className="absolute bottom-[3px] -left-[3px] h-[105px] w-[88px] rounded-bl-[24px] border-b-[4px] border-l-[4px] border-[#09049B]" />

            <div className="relative min-h-[270px] rounded-[24px] border border-[#E5E5E5] bg-white px-7 pb-6 pt-7 shadow-[0_2px_8px_rgba(0,0,0,0.08)] ">
              {/* Icon */}
              <div className="flex h-[57px] w-[57px] items-center justify-center rounded-[12px] bg-[#09049B]">
                <img
                  src="/images/approach.png"
                  alt="Customised Approach"
                  className="h-7 w-7 object-contain"
                />
              </div>

              <h3 className="mt-7 text-[16px] font-semibold leading-5 text-[#000000]">
                Customised Approach
              </h3>

              <p className="mt-2 max-w-[300px] text-[13px] font-normal leading-[17px] text-[#8A8A8A]">
                Every institution has unique goals. We tailor our learning
                solutions to align with your curriculum, student needs, and
                educational objectives for maximum impact.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-[3px] -top-[3px] h-[105px] w-[88px] rounded-tr-[24px] border-r-[4px] border-t-[4px] border-[#09049B]" />

            <div className="absolute bottom-[3px] -left-[3px] h-[105px] w-[88px] rounded-bl-[24px] border-b-[4px] border-l-[4px] border-[#09049B]" />

            <div className="relative min-h-[270px] rounded-[24px] border border-[#E5E5E5] bg-white px-7 pb-6 pt-7 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <div className="flex h-[57px] w-[57px] items-center justify-center rounded-[12px] bg-[#09049B]">
                <img
                  src="/images/support.png"
                  alt="Reliable Support"
                  className="h-7 w-7 object-contain"
                />
              </div>

              <h3 className="mt-7 text-[16px] font-semibold leading-5 text-[#000000]">
                Reliable Support
              </h3>

              <p className="mt-2 max-w-[300px] text-[13px] font-normal leading-[17px] text-[#8A8A8A]">
                From onboarding and implementation to ongoing course delivery,
                our dedicated team provides continuous guidance to ensure a
                smooth and successful learning experience.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-[3px] -top-[3px] h-[105px] w-[88px] rounded-tr-[24px] border-r-[4px] border-t-[4px] border-[#09049B]" />

            <div className="absolute bottom-[3px] -left-[3px] h-[105px] w-[88px] rounded-bl-[24px] border-b-[4px] border-l-[4px] border-[#09049B]" />

            <div className="relative min-h-[270px] rounded-[24px] border border-[#E5E5E5] bg-white px-7 pb-6 pt-7 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <div className="flex h-[57px] w-[57px] items-center justify-center rounded-[12px] bg-[#09049B]">
                <img
                  src="/images/proven.png"
                  alt="Proven Excellence"
                  className="h-7 w-7 object-contain"
                />
              </div>

              <h3 className="mt-7 text-[16px] font-semibold leading-5 text-[#000000]">
                Proven Excellence
              </h3>

              <p className="mt-2 max-w-[300px] text-[13px] font-normal leading-[17px] text-[#8A8A8A]">
                With a strong commitment to quality, innovation, and industry
                best practices, we help institutions deliver impactful
                vocational education and achieve better student outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
