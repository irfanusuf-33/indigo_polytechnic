"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeDot, setActiveDot] = useState(0);
  const programs = [
    {
      label: "Civil Engineering",
      image: "/images/cival.png",
    },
    {
      label: "Information Technology",
      image: "/images/tech.png",
    },
    {
      label: "Business and Management",
      image: "/images/business.png",
    },
  ];

  const courses = [
    {
      tag: "CIVIL ENGINEERING",
      title: "RII60520 | Advance Diploma of Cival Construction Design",
      image: "/images/civalDesign.png",
      rating: 4.5,
      reviews: 137,
      duration: "104 weeks",
    },
    {
      tag: "PROJECT MANAGEMENT COURSES",
      title: "BSB60720 | Advanced Diploma of Program Management",
      image: "/images/Programe.png",
      rating: 4.0,
      reviews: 237,
      duration: "52 weeks",
    },
  ];
  const steps = [
    {
      number: "1",
      title: "Choose Your Course",
      description:
        "Browse our programs and select the course that matches your goals.",
    },
    {
      number: "2",
      title: "Apply & Enroll",
      description:
        "Submit your application and begin your learning journey with us.",
    },
  ];
  const topRow = [
    {
      src: "/images/study-group.png",
      alt: "Students studying together",
      flex: "flex-[0.9]",
    },
    {
      src: "/images/campus-building.png",
      alt: "Campus building exterior",
      flex: "flex-[0.9]",
    },
    {
      src: "/images/meeting-room.png",
      alt: "Students in a meeting room",
      flex: "flex-[1.2]",
    },
  ];

  const bottomRow = [
    {
      src: "/images/soccer.png",
      alt: "Student playing soccer",
      flex: "flex-[0.75]",
    },
    {
      src: "/images/career-symposium.png",
      alt: "College career symposium",
      flex: "flex-[0.95]",
    },
    {
      src: "/images/lecture-hall.png",
      alt: "Student studying in lecture hall",
      flex: "flex-[1.15]",
    },
  ];

  return (
    <main className="font-pop">
      <section className="flex flex-col items-center justify-center overflow-hidden bg-[#F2F3F4] px-6 pb-0 pt-8 sm:pt-12 lg:pt-16">
        <div className="mb-10 flex w-full max-w-lg items-center rounded-full border border-zinc-200 bg-white px-2 py-2 shadow-sm">
          <svg
            className="ml-2 mr-2 h-5 w-5 shrink-0 text-[#0C06DA]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search Courses"
            className="flex-1 bg-transparent text-sm text-zinc-700 outline-none placeholder:text-zinc-400"
          />

          <button className="rounded-full bg-[#0C06DA] px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-800">
            Search
          </button>
        </div>

        <h1 className="text-center text-4xl font-bold text-[#000000] sm:text-5xl lg:text-5xl">
          Welcome to <span className="text-[#0C06DA]">Indigo Polytechnic</span>
        </h1>

        <p className="mt-4 max-w-md text-center text-zinc-500">
          Browse professional courses, experienced faculty, and flexible
          learning opportunities.
        </p>

        <button className="mt-8 flex items-center gap-4 rounded-full bg-[#0C06DA] py-2 pl-4 pr-4 font-medium text-white transition hover:bg-[#0a05b8]">
          Apply Now
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

        <div className="relative mt-10 h-[250px] w-full max-w-6xl overflow-hidden sm:h-[350px] lg:aspect-[21/9] lg:h-auto">
          <Image
            src="/images/graduates.png"
            alt="Indigo Polytechnic graduates"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col items-center px-6 py-20 text-center">
        
        <span className="mb-6 flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-xs font-semibold uppercase font-pop italic tracking-wide text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-white " />
          Explore Programs
        </span>

        <h2 className="text-4xl font-pop font-bold text-[#000000] sm:text-4xl ">
          Courses <span className="text-[#0C06DA]">Designed</span> for Your
          Future
        </h2>

        <p className="mt-4 max-w-2xl text-[#8A8A8A] font-pop ">
          Explore a diverse range of industry-relevant courses tailored to help
          you succeed in today&apos;s competitive world.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {programs.map((program) => (
            <div
              key={program.label}
              className="flex items-center gap-3 rounded-full border border-[#8F8CEE] bg-[#F2F3F4] px-4 py-3 shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0C06DA] shadow">
                <Image
                  src={program.image}
                  alt={program.label}
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
              </span>

              <span className="font-medium text-zinc-900">{program.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#EEF0FC] px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-xs font-pop font-semibold italic tracking-wide text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Featured Courses
            </span>

            <h2 className="text-3xl font-pop font-bold leading-normal text-[#000000] sm:text-4xl">
              Find the Right <span className="text-[#0C06DA]">Course</span>
              <span className="block">for You</span>
            </h2>

            <p className="mt-4 max-w-md text-[#8A8A8A]">
              Discover our most popular programs designed to equip you with the
              skills, knowledge, and confidence needed to build a successful
              future.
            </p>

            <button className="mt-8 flex items-center gap-2 rounded-lg bg-[#0C06DA] px-5 py-3 text-md font-pop font-normal text-white transition hover:bg-[#0a05b8]">
              Browse All Courses
              <Image
                src="/images/uparrow.png"
                alt="Arrow"
                width={14}
                height={14}
                className="h-3 w-3 object-contain"
              />
            </button>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <div className="relative mx-auto mt-3 h-40 w-[90%] overflow-hidden rounded-xl">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="mb-3 w-fit rounded-lg bg-[#5C58E6] px-3 py-1 text-[10px] font-normal italic uppercase text-[#ffffff]">
                      {course.tag}
                    </span>

                    <h3 className="mb-3 text-[16px] font-semibold leading-snug text-[#000000]">
                      {course.title}
                    </h3>

                    <div className="mb-5 flex items-center gap-4 text-xs font-medium text-[#8A8A8A]">
                      <span className="flex items-center gap-1">
                        <svg
                          className="h-3.5 w-3.5 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.957z" />
                        </svg>
                        {course.rating} ({course.reviews})
                      </span>

                      <span className="flex items-center gap-1">
                        <svg
                          className="h-3.5 w-3.5 text-[#0C06DA]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path strokeLinecap="round" d="M12 7v5l3 3" />
                        </svg>
                        {course.duration}
                      </span>
                    </div>

                    <button className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-[#0C06DA] py-2.5 text-sm font-normal text-white transition hover:bg-[#0a05b8]">
                      Explore
                      <Image
                        src="/images/uparrow.png"
                        alt="Arrow"
                        width={14}
                        height={14}
                        className="h-3.5 w-3.5 object-contain rotate-30"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveDot(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    activeDot === i ? "w-6 bg-[#0C06DA]" : "w-2 bg-zinc-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center px-6 py-20 text-center">
        <span className="mb-6 flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-xs font-semibold uppercase italic tracking-wide text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          How It Works
        </span>

        <h2 className="text-4xl font-bold text-[#000000] sm:text-4xl font-pop">
          Start Your <span className="text-[#0C06DA]">Career</span> With Us
        </h2>

        <p className="mt-4 max-w-xl text-[#8A8A8A] font-pop">
          From registration to enrollment, we&apos;ve made the admission process
          simple, quick, and hassle-free.
        </p>

        <div className="relative mt-6 lg:mt-10 flex flex-col items-center justify-center gap-15 lg:flex-row lg:items-start lg:gap-40">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start">
              {/* Step */}
              <div className="flex w-full flex-row items-center gap-4 lg:w-60 lg:flex-col lg:gap-0">
                <div className="flex h-12 w-16 items-center justify-center rounded-2xl bg-[#0C06DA] text-xl font-bold text-white lg:h-16 lg:w-16 lg:text-2xl">
                  {step.number}
                </div>
                <div className="flex flex-col items-start text-left lg:items-center lg:text-center">
                  <h3 className="mt-2 font-pop text-lg font-semibold text-[#000000] lg:mt-4">
                    {step.title}
                  </h3>

                  <p className="mt-1 lg:mt-4 font-pop text-sm font-normal text-[#8A8A8A]">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="my-2 absolute top-15 left-5 flex h-20 flex-col items-center lg:hidden">
                  <span className="h-2 w-2 rounded-full bg-[#BABABA]" />

                  <span className="h-full border-l-2 border-dashed border-[#BABABA]" />

                  <span className="h-2 w-2 rounded-full bg-[#BABABA]" />
                </div>
              )}

              {index === 0 && (
                <div className="absolute left-80 top-7  w-75 -translate-x-1/2 items-center lg:flex">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#BABABA]" />

                  <span className="flex-1 border-t-2 border-dashed border-[#BABABA]" />

                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#BABABA]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="absolute left-1/2 h-0.5 w-[80%] lg:w-[70%] -translate-x-1/2 bg-[#EAEAEA]" />

      <section className="flex flex-col items-center px-6 pb-20 pt-20 text-center">
        <span className="mb-6 flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-xs font-semibold uppercase italic tracking-wide text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          Campus Gallery
        </span>

        <h2 className="font-pop text-3xl font-bold text-[#000000] sm:text-4xl">
          Experience Life at{" "}
          <span className="text-[#0C06DA]">Indigo Polytechnic</span>
        </h2>

        <p className="mt-4 max-w-3xl font-pop text-[#8A8A8A]">
          Explore our vibrant campus, modern learning spaces, collaborative
          classrooms, and student experiences that make learning practical,
          engaging, and career-focused.
        </p>

        <div className="mt-12 flex w-full max-w-6xl flex-col gap-3">
          <div className="flex gap-3">
            {topRow.map((img) => (
              <div
                key={img.src}
                className={`relative h-56 overflow-hidden  ${img.flex}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            {bottomRow.map((img) => (
              <div
                key={img.src}
                className={`relative h-56 overflow-hidden ${img.flex}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 pt-15">
        <div className="relative mx-auto flex max-w-4xl flex-col overflow-hidden rounded-3xl bg-[#09049B] px-6 py-8 sm:px-12 sm:py-10 lg:flex-row lg:items-center lg:gap-8">
          {/* Left Content */}
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
              <button className="flex items-center gap-2 rounded-lg bg-white px-5 py-2 font-pop text-sm font-normal text-[#0C06DA] transition hover:bg-white/90">
                Apply Now
                <Image
                  src="/images/Union.png"
                  alt="Arrow"
                  width={14}
                  height={14}
                  className="h-3.5 w-3.5 object-contain"
                />
              </button>

              <button className="rounded-lg border border-white/40 px-5 py-2 font-pop text-sm font-normal text-white transition hover:bg-white/10">
                Contact Us
              </button>
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
    </main>
  );
}
