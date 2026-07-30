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
    "courses" | "resources" | null
  >(null);

  // Toggle hamburger menu
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // Toggle dropdown
  const toggleDropdown = (dropdown: "courses" | "resources") => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const activeLink =
    "text-[#0C06DA] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-[#0C06DA]";

  const inactiveLink = "text-[#545454] hover:text-[#0C06DA]";

  return (
    <nav className="relative z-50 bg-white shadow-sm">
      {/* ================================================= */}
      {/* MAIN NAVBAR */}
      {/* ================================================= */}

      <div className="mx-auto flex h-20 max-w-[96%] items-center px-2.5 lg:max-w-[92%] lg:px-6">
        {/* ================================================= */}
        {/* MOBILE HEADER */}
        {/* ================================================= */}

        <div className="flex w-full items-center justify-between px-0 lg:hidden">
          {/* LOGO */}

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

          {/* HAMBURGER BUTTON */}

          <button
            type="button"
            onClick={handleMenuToggle}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAEAEA] text-[#0C06DA] transition-colors hover:bg-[#E5F2F0]"
          >
            {isMenuOpen ? (
              /* CLOSE ICON */
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
              /* HAMBURGER ICON */
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

        {/* ================================================= */}
        {/* DESKTOP LOGO */}
        {/* ================================================= */}

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

        {/* ================================================= */}
        {/* DESKTOP NAVIGATION */}
        {/* ================================================= */}

        <div className="hidden items-center gap-10 font-pop opacity-85 lg:flex">
          {/* HOME */}

          <Link
            href="/"
            className={`relative text-sm font-medium transition-colors ${
              pathname === "/" ? activeLink : inactiveLink
            }`}
          >
            Home
          </Link>

          {/* ABOUT */}

          <Link
            href="/about"
            className={`relative text-sm font-medium transition-colors ${
              pathname === "/about" ? activeLink : inactiveLink
            }`}
          >
            About
          </Link>

          {/* COURSES */}

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

            {/* COURSES DROPDOWN */}

            <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-56 -translate-x-1/2 translate-y-2 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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

          {/* STUDENT RESOURCES */}

          <div className="group relative">
            <Link
              href="/admissions"
              className={`relative flex items-center gap-2 text-sm font-medium transition-colors ${
                pathname.startsWith("/admissions") ? activeLink : inactiveLink
              }`}
            >
              Student Resources
              <span className="mt-[1px] h-1.5 w-1.5 rotate-45 border-b border-r border-current transition-transform duration-200 group-hover:-rotate-[135deg]" />
            </Link>

            {/* STUDENT RESOURCES DROPDOWN */}

            <div className="invisible absolute right-0 top-full z-50 mt-4 w-56 translate-y-2 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                href="/admissions/apply"
                className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
              >
                Apply Now
              </Link>

              <Link
                href="/admissions/requirements"
                className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#F1F8F7] hover:text-[#0C06DA]"
              >
                Admission Requirements
              </Link>
            </div>
          </div>

          {/* CONTACT */}

          <Link
            href="/contact"
            className={`relative text-sm font-medium transition-colors ${
              pathname === "/contact" ? activeLink : inactiveLink
            }`}
          >
            Contact
          </Link>
        </div>

        {/* ================================================= */}
        {/* DESKTOP LOGIN */}
        {/* ================================================= */}

        <div className="hidden flex-1 items-center justify-end lg:flex">
          <Link
            href="/login"
            className="rounded-lg bg-[#0C06DA] px-8 py-2 font-pop text-sm font-medium text-white transition-colors hover:bg-[#0A05B8]"
          >
            Login
          </Link>
        </div>
      </div>

      {/* ================================================= */}
      {/* MOBILE MENU */}
      {/* ================================================= */}

      <div
        className={`lg:hidden overflow-hidden border-t border-gray-100 bg-white shadow-lg transition-all duration-300 ${
          isMenuOpen
            ? "max-h-[1000px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-4">
          <div className="flex flex-col font-pop">
            {/* HOME */}

            <Link
              href="/"
              onClick={closeMenu}
              className={`border-b border-gray-100 py-4 text-sm font-medium ${
                pathname === "/" ? "text-[#0C06DA]" : "text-[#545454]"
              }`}
            >
              Home
            </Link>

            {/* ABOUT */}

            <Link
              href="/about"
              onClick={closeMenu}
              className={`border-b border-gray-100 py-4 text-sm font-medium ${
                pathname === "/about" ? "text-[#0C06DA]" : "text-[#545454]"
              }`}
            >
              About
            </Link>

            {/* ================================================= */}
            {/* MOBILE COURSES DROPDOWN */}
            {/* ================================================= */}

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

              {/* COURSES SUBMENU */}

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

            {/* ================================================= */}
            {/* MOBILE STUDENT RESOURCES DROPDOWN */}
            {/* ================================================= */}

            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => toggleDropdown("resources")}
                className={`flex w-full items-center justify-between py-4 text-left text-sm font-medium ${
                  pathname.startsWith("/admissions")
                    ? "text-[#0C06DA]"
                    : "text-[#545454]"
                }`}
              >
                <span>Student Resources</span>

                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openDropdown === "resources" ? "rotate-180" : ""
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

              {/* STUDENT RESOURCES SUBMENU */}

              <div
                className={`grid transition-all duration-300 ${
                  openDropdown === "resources"
                    ? "grid-rows-[1fr] pb-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-1 rounded-lg bg-[#F8FAFA] p-2">
                    <Link
                      href="/admissions/apply"
                      onClick={closeMenu}
                      className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                    >
                      Apply Now
                    </Link>

                    <Link
                      href="/admissions/requirements"
                      onClick={closeMenu}
                      className="block rounded-lg px-4 py-3 text-sm text-[#545454] hover:bg-[#E5F2F0] hover:text-[#0C06DA]"
                    >
                      Admission Requirements
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT */}

            <Link
              href="/contact"
              onClick={closeMenu}
              className={`border-b border-gray-100 py-4 text-sm font-medium ${
                pathname === "/contact" ? "text-[#0C06DA]" : "text-[#545454]"
              }`}
            >
              Contact
            </Link>

            {/* LOGIN */}

            <Link
              href="/login"
              onClick={closeMenu}
              className="mt-5 rounded-lg bg-[#0C06DA] px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#0A05B8]"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
