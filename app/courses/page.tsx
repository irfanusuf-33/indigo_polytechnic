"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Course = {
  image: string;
  slug: string;
  tag: string;
  title: string;
  duration: string;
};

type CourseGroup = {
  title: string;
  description: string;
  icon: string;
  courses: Course[];
};

type ValueCard = {
  title: string;
  text: string;
  className: string;
  line: string;
  textClass: string;
  extraText?: string;
};

const courseGroups: CourseGroup[] = [
  {
    title: "Business and Management",
    description:
      "Build a strong foundation in business, management, and leadership through practical, industry-focused learning.",
    icon: "/images/business&management-logo.svg",
    courses: [
      {
        image: "/images/Image.svg",
        slug: "bsb50420-diploma-of-leadership-and-management",
        tag: "Business and Management",
        title: "BSB50420 | Diploma of Leadership and Management",
        duration: "52 weeks",
      },
      {
        image: "/images/Image 2.svg",
        slug: "",
        tag: "Business and Management",
        title: "BSB80120 | Graduate Diploma of Management (Learning)",
        duration: "52 weeks",
      },
    ],
  },
  {
    title: "Information Technology",
    description:
      "Develop advanced technical knowledge in engineering design, problem-solving, and industry practices.",
    icon: "/images/IT-logo.svg",
    courses: [
      {
        image: "/images/Image 3.svg",
        slug: "",
        tag: "INFORMATION Technology",
        title: "ICT60220 | Advance Diploma of Information Technology",
        duration: "104 weeks",
      },
    ],
  },
  {
    title: "Civil Engineering",
    description:
      "Build practical engineering skills through hands-on learning, real-world projects, and industry-focused training.",
    icon: "/images/civil-logo.svg",
    courses: [
      {
        image: "/images/Image 4.svg",
        slug: "",
        tag: "Civil Engineering",
        title: "RII60520 | Advance Diploma of Civil Construction Design",
        duration: "104 weeks",
      },
    ],
  },
];

const valueCards: ValueCard[] = [
  {
    title: "Practical Learning",
    text: "Hands-on workshops and real-world training.",
    className: "bg-[#F2F3F4] text-[#0C06DA]",
    line: "bg-[#0C06DA]",
    textClass: "text-[#625DF0]",
  },
  {
    title: "Expert Trainers",
    text: "Learn from experienced industry professionals.",
    className: "bg-[#5D58EA] text-white",
    line: "bg-white",
    textClass: "text-white/90",
  },
  {
    title: "24/7",
    text: "Student Support",
    className: "bg-[#0C06DA] text-white",
    line: "bg-white",
    textClass: "text-white/90",
  },
  {
    title: "Industry-Ready",
    text: "Courses designed to meet current workplace standards and employer expectations.",
    className: "bg-[#F2F3F4] text-[#0C06DA]",
    line: "bg-[#0C06DA]",
    textClass: "text-[#625DF0]",
    extraText: "Career-Guidance",
  },
  {
    title: "Career Pathways",
    text: "Prepare for future career opportunities.",
    className: "bg-[#09049B] text-white",
    line: "bg-white",
    textClass: "text-white/90",
  },
];

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="w-full max-w-[342px] overflow-hidden rounded-[8px] border border-[#D9D9D9] bg-white p-3 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
      <div className="relative h-[170px] w-full overflow-hidden rounded-[7px] bg-[#F2F3F4]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="px-1 pb-1 pt-5">
        <span className="inline-flex rounded-[5px] bg-[#625DF0] px-3 py-1.5 text-[12px] font-semibold italic text-white">
          {course.tag}
        </span>

        <h3 className="mt-5 min-h-[54px] text-[18px] font-bold leading-[1.55] text-[#171717]">
          {course.title}
        </h3>

        <div className="mt-5 flex items-center gap-8 text-[16px] text-[#6F6F6F]">
          <span className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4 text-[#FFB526]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m10 1.7 2.45 5.13 5.62.75-4.12 3.9 1.03 5.58L10 14.35l-4.98 2.71 1.03-5.58-4.12-3.9 5.62-.75L10 1.7Z" />
            </svg>
            4.5 (137)
          </span>

          <span className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4 text-[#0C06DA]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="8.5" strokeWidth={1.8} />
              <path
                strokeLinecap="round"
                strokeWidth={1.8}
                d="M12 7.5V12l3 2"
              />
            </svg>
            {course.duration}
          </span>
        </div>

        <Link
          href={`/courses/${course.slug}`}
          className="mt-5 flex h-11 items-center justify-center gap-2 rounded-[6px] bg-[#0C06DA] text-[18px] font-small text-white transition hover:bg-[#0A05B8]"
        >
          Explore
          <Image
            src="/images/explore-arrow.svg"
            alt=""
            width={18}
            height={18}
            className="h-[18px] w-[18px]"
          />
        </Link>
      </div>
    </article>
  );
}

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleCourseGroups =
    activeFilter === "All"
      ? courseGroups
      : courseGroups.filter((group) => group.title === activeFilter);

  return (
    <main className="overflow-x-hidden font-pop">
      <section className="relative flex min-h-[678px] items-center justify-center overflow-hidden px-6 py-20 text-center">
        <Image
          src="/images/Frame 1000005069.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/15" />

        <div className="relative z-10 mt-2 flex w-full max-w-7xl flex-col items-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-[15px] font-bold uppercase italic tracking-wide text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Our Courses
          </span>

          <h1 className="max-w-[342px] break-words text-[42px] font-bold leading-tight text-white sm:max-w-none sm:text-[58px] lg:text-[64px]">
            Build Skills for a{" "}
            <span className="text-[#0C06DA]">Successful</span> Career
          </h1>

          <p className="mt-4 max-w-3xl text-[16px] leading-7 text-white/90 sm:text-[20px]">
            Explore industry-recognized vocational programs designed to equip
            you with practical skills, hands-on experience, and career-ready
            qualifications.
          </p>

          <form className="mt-8 flex h-[68px] w-full max-w-[720px] items-center rounded-[6px] bg-white p-2 shadow-sm">
            <input
              type="search"
              placeholder="Search Courses"
              aria-label="Search Courses"
              className="h-full flex-1 bg-transparent px-4 text-lg text-[#545454] outline-none placeholder:text-[#A5A5A5]"
            />

            <button
              type="submit"
              aria-label="Search"
              className="flex h-12 w-12 items-center justify-center rounded-[5px] bg-[#0C06DA] text-white transition hover:bg-[#0A05B8]"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m21 21-4.3-4.3M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z"
                />
              </svg>
            </button>
          </form>
        </div>
      </section>

      <section className="px-15 pb-36 pt-20">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="text-[38px] font-bold leading-tight text-[#0C06DA] sm:text-[50px]">
            Courses We Provide
          </h2>

          <div className="mt-7 h-[3px] w-full bg-[#D9D9D9]" />

          <div className="mt-10 flex flex-col gap-14">
            {visibleCourseGroups.map((group) => (
              <section key={group.title}>
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#0C06DA] p-2">
                    <Image
                      src={group.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="h-9 w-9 object-contain"
                    />
                  </span>

                  <h3 className="text-[28px] font-bold text-[#171717] sm:text-[32px]">
                    {group.title}
                  </h3>
                </div>

                <p className="mt-5 max-w-4xl text-[18px] leading-6 text-[#8A8A8A]">
                  {group.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-8">
                  {group.courses.map((course) => (
                    <CourseCard key={course.title} course={course} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="px-15 pb-28">
        <div className="mx-auto max-w-[1500px]">
          <span className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#09049B] px-4 py-1.5 text-[11px] font-bold uppercase italic tracking-wide text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Why Choose Our Courses
          </span>

          <h2 className="text-[32px] font-bold leading-tight text-[#171717] sm:text-[38px]">
            Build Skills That <span className="text-[#0C06DA]">Employers</span>{" "}
            Value
          </h2>

          <p className="mt-4 text-[18px] leading-6 text-[#8A8A8A]">
            Practical training, expert instructors, and career-focused education
            designed to help you succeed.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_385px]">
            <div className="grid auto-rows-[1fr] grid-cols-1 gap-10 sm:grid-cols-6">
              {valueCards.map((card, index) => (
                <article
                  key={card.title}
                  className={`flex min-h-[180px] flex-col justify-between p-8 ${
                    index < 2 ? "sm:col-span-3" : "sm:col-span-2"
                  } ${card.className}`}
                >
                  <h3
                    className={`font-semibold leading-tight ${
                      card.title === "24/7"
                        ? "text-[30px] sm:text-[34px]"
                        : "text-[24px] sm:text-[28px]"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <div>
                    {card.extraText && (
                      <p
                        className={`mb-15 text-[16px] leading-5 ${card.textClass}`}
                      >
                        {card.text}
                      </p>
                    )}

                    <div className={`mb-4 h-0.5  w-[95%] ${card.line}`} />

                    <p className={`text-[16px] leading-5 ${card.textClass}`}>
                      {card.extraText ?? card.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="relative w-full aspect-[2/3] overflow-hidden">
              <Image
                src="/images/Frame 1000004946.svg"
                alt="Students walking in a library"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
