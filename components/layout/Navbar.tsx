"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../public/images/logo.png";

const Navbar = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<
    "company" | "courses" | "users" | null
  >(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown: "company" | "courses" | "users") => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const activeLink =
    "text-[#0C06DA] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-[#0C06DA]";

  const inactiveLink = "text-[#545454] hover:text-[#0C06DA]";

  return (
    <nav className="relative z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-[96%] items-center px-2.5 lg:max-w-[92%] lg:px-6">
        <div className="flex w-full items-center justify-between lg:hidden">
          <Link href="/" onClick={closeMenu}>
            <Image
              src={logo}
              alt="Indigo Polytechnic Logo"
              width={100}
              height={100}
              priority
              className="h-10 w-auto"
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAEAEA] text-[#0C06DA] transition-colors hover:bg-[#E5F2F0]"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden flex-1 items-center lg:flex">
          <Link href="/">
            <Image
              src={logo}
              alt="Indigo Polytechnic Logo"
              width={100}
              height={100}
              priority
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <div className="hidden items-center gap-10 font-pop opacity-85 lg:flex">
          <Link
            href="/"
            className={`relative text-sm font-medium transition-colors ${
              pathname === "/" ? activeLink : inactiveLink
            }`}
          >
            Home
          </Link>

          <div className="group relative">
            <button
              type="button"
              className={`relative flex items-center gap-2 text-sm font-medium transition-colors ${
                pathname.startsWith("/about") || pathname.startsWith("/company")
                  ? activeLink
                  : inactiveLink
              }`}
            >
              Company
              <span className="mt-[1px] h-1.5 w-1.5 rotate-45 border-b border-r border-current transition-transform duration-200 group-hover:-rotate-[135deg]" />
            </button>

            <div className="invisible absolute right-0 top-full z-50 mt-6 w-56 translate-y-2 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/about"
                className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
              >
                About Us
              </Link>

              <Link
                href="/whyindigo"
                className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
              >
                Why Indigo Polytechnic
              </Link>

              <Link
                href="/esos"
                className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
              >
                ESOS Compliance
              </Link>

              <Link
                href="/tasmania"
                className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
              >
                Tasmania Life
              </Link>
            </div>
          </div>

          <div className="group relative">
            <Link
              href="/courses"
              className={`relative flex items-center gap-2 text-sm font-medium transition-colors ${
                pathname.startsWith("/courses") ? activeLink : inactiveLink
              }`}
            >
              Courses
              <span className="mt-[1px] h-1.5 w-1.5 rotate-45 border-b border-r border-current transition-transform duration-200 group-hover:-rotate-[135deg]" />
            </Link>

            <div className="invisible absolute left-1/2 top-full z-50 mt-6 w-56 -translate-x-1/2 translate-y-2 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/courses/vocational"
                className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
              >
                Business and Management
              </Link>

              <Link
                href="/courses/information-technology"
                className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
              >
                Information Technology
              </Link>

              <Link
                href="/courses/civil-engineering"
                className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
              >
                Civil Engineering
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              className={`relative flex items-center gap-2 text-sm font-medium transition-colors ${
                pathname.startsWith("/applicationform") ||
                pathname.startsWith("/studentprospectus") ||
                pathname.startsWith("/admissions")
                  ? activeLink
                  : inactiveLink
              }`}
            >
              For Users
              <span className="mt-[1px] h-1.5 w-1.5 rotate-45 border-b border-r border-current transition-transform duration-200 group-hover:-rotate-[135deg]" />
            </button>

            <div className="invisible absolute left-0 top-full z-50 mt-6 w-[410px] translate-y-2 rounded-xl border border-gray-100 bg-white p-6 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-x-10 gap-y-2">
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-[#000000]">
                    Students
                  </h3>

                  <div className="flex flex-col gap-1">
                    <Link
                      href="/applicationform"
                      className="rounded-lg py-2 text-sm text-[#545454] transition hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
                    >
                      Student Application Form
                    </Link>

                    <Link
                      href="/studentprospectus"
                      className="rounded-lg py-2 text-sm text-[#545454] transition hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
                    >
                      Student Prospectus
                    </Link>

                    <Link
                      href="/studentprospectus"
                      className="rounded-lg py-2 text-sm text-[#545454] transition hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
                    >
                      Fees and Intakes
                    </Link>

                    <Link
                      href="/admissions/student-support"
                      className="rounded-lg py-2 text-sm text-[#545454] transition hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
                    >
                      Student Support
                    </Link>

                    <Link
                      href="/generalforms"
                      className="rounded-lg py-2 text-sm text-[#545454] transition hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
                    >
                      Forms
                    </Link>

                    <Link
                      href="/USI"
                      className="rounded-lg py-2 text-sm text-[#545454] transition hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
                    >
                      USI
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold text-[#000000]">
                    Agents
                  </h3>

                  <div className="flex flex-col gap-1">
                    <Link
                      href="/admissions/agent-application"
                      className="rounded-lg py-2 text-sm text-[#545454] transition hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
                    >
                      Agent Application Form
                    </Link>

                    <Link
                      href="/admissions/agent-list"
                      className="rounded-lg py-2 text-sm text-[#545454] transition hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
                    >
                      Agent List
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className={`relative text-sm font-medium transition-colors ${
              pathname === "/contact" ? activeLink : inactiveLink
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="hidden flex-1 items-center justify-end lg:flex">
          {pathname === "/studentlogin" ? (
            <Link
              href="/contact"
              className="font-pop text-sm font-medium text-[#0C06DA] underline"
            >
              Need Help?
            </Link>
          ) : (
            <Link
              href="/studentlogin"
              className="rounded-lg bg-[#0C06DA] px-8 py-2 font-pop text-sm font-medium text-white transition-colors hover:bg-[#0A05B8]"
            >
              Student Login
            </Link>
          )}
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-gray-100 bg-white shadow-lg transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[1500px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-4">
          <div className="flex flex-col font-pop">
            <Link
              href="/"
              onClick={closeMenu}
              className={`border-b border-gray-100 py-4 text-sm font-medium ${
                pathname === "/" ? "text-[#0C06DA]" : "text-[#545454]"
              }`}
            >
              Home
            </Link>

            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => toggleDropdown("company")}
                className={`flex w-full items-center justify-between py-4 text-left text-sm font-medium ${
                  pathname.startsWith("/about") ||
                  pathname.startsWith("/company") ||
                  pathname.startsWith("/admissions/requirements")
                    ? "text-[#0C06DA]"
                    : "text-[#545454]"
                }`}
              >
                <span>Company</span>

                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openDropdown === "company" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openDropdown === "company"
                    ? "grid-rows-[1fr] pb-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-1 rounded-lg bg-[#F8FAFA] p-2">
                    <Link
                      href="/about"
                      onClick={closeMenu}
                      className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                    >
                      About Us
                    </Link>

                    <Link
                      href="/about"
                      onClick={closeMenu}
                      className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                    >
                      Why Indigo Polytechnic
                    </Link>

                    <Link
                      href="/admissions/requirements"
                      onClick={closeMenu}
                      className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                    >
                      ESOS Compliance
                    </Link>

                    <Link
                      href="/admissions/requirements"
                      onClick={closeMenu}
                      className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                    >
                      Tasmania Life
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => toggleDropdown("courses")}
                className={`flex w-full items-center justify-between py-4 text-left text-sm font-medium ${
                  pathname.startsWith("/courses")
                    ? "text-[#0C06DA]"
                    : "text-[#545454]"
                }`}
              >
                <span>Courses</span>

                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openDropdown === "courses" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openDropdown === "courses"
                    ? "grid-rows-[1fr] pb-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-1 rounded-lg bg-[#F8FAFA] p-2">
                    <Link
                      href="/courses/vocational"
                      onClick={closeMenu}
                      className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                    >
                      Business and Management
                    </Link>

                    <Link
                      href="/courses/information-technology"
                      onClick={closeMenu}
                      className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                    >
                      Information Technology
                    </Link>

                    <Link
                      href="/courses/civil-engineering"
                      onClick={closeMenu}
                      className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                    >
                      Civil Engineering
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => toggleDropdown("users")}
                className={`flex w-full items-center justify-between py-4 text-left text-sm font-medium ${
                  pathname.startsWith("/applicationform") ||
                  pathname.startsWith("/studentprospectus") ||
                  pathname.startsWith("/admissions") ||
                  pathname.startsWith("/generalforms")
                    ? "text-[#0C06DA]"
                    : "text-[#545454]"
                }`}
              >
                <span>For Users</span>

                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openDropdown === "users" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openDropdown === "users"
                    ? "grid-rows-[1fr] pb-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="rounded-lg bg-[#F8FAFA] p-3">
                    <div className="grid grid-cols-1 gap-5">
                      <div>
                        <h3 className="mb-2 px-2 text-sm font-semibold text-[#000000]">
                          Students
                        </h3>

                        <div className="space-y-1">
                          <Link
                            href="/applicationform"
                            onClick={closeMenu}
                            className="block rounded-lg px-2 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                          >
                            Student Application Form
                          </Link>

                          <Link
                            href="/studentprospectus"
                            onClick={closeMenu}
                            className="block rounded-lg px-2 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                          >
                            Student Prospectus
                          </Link>

                          <Link
                            href="/studentprospectus"
                            onClick={closeMenu}
                            className="block rounded-lg px-2 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                          >
                            Fees and Intakes
                          </Link>

                          <Link
                            href="/admissions/student-support"
                            onClick={closeMenu}
                            className="block rounded-lg px-2 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                          >
                            Student Support
                          </Link>

                          <Link
                            href="/generalforms"
                            onClick={closeMenu}
                            className="block rounded-lg px-2 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                          >
                            Forms
                          </Link>

                          <Link
                            href="/admissions/usi"
                            onClick={closeMenu}
                            className="block rounded-lg px-2 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                          >
                            USI
                          </Link>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <h3 className="mb-2 px-2 text-sm font-semibold text-[#000000]">
                          Agents
                        </h3>

                        <div className="space-y-1">
                          <Link
                            href="/admissions/agent-application"
                            onClick={closeMenu}
                            className="block rounded-lg px-2 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                          >
                            Agent Application Form
                          </Link>

                          <Link
                            href="/admissions/agent-list"
                            onClick={closeMenu}
                            className="block rounded-lg px-2 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                          >
                            Agent List
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={closeMenu}
              className={`border-b border-gray-100 py-4 text-sm font-medium ${
                pathname === "/contact" ? "text-[#0C06DA]" : "text-[#545454]"
              }`}
            >
              Contact
            </Link>

            <Link
              href="/studentlogin"
              onClick={closeMenu}
              className="mt-5 rounded-lg bg-[#0C06DA] px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#0A05B8]"
            >
              Student Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
