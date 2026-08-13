import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white px-6 py-14 font-pop shadow-[inset_0_4px_12px_rgba(0,0,0,0.08)]">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src={logo}
                alt="Indigo Polytechnic Logo"
                width={100}
                height={100}
                priority
                className="h-12 w-auto"
              />
            </Link>

            <p className="mt-0 max-w-md text-sm leading-6 text-[#8A8A8A]">
              Industry-focused education that prepares students for successful
              careers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0C06DA] text-white transition hover:bg-[#0a05b8]"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0C06DA] text-white transition hover:bg-[#0a05b8]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0C06DA] text-white transition hover:bg-[#0a05b8]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8c0-.87.24-1.46 1.5-1.46H16.7V3.9C16.4 3.86 15.4 3.77 14.2 3.77c-2.5 0-4.2 1.53-4.2 4.33V10H7.3v3h2.7v8z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-100" />

        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:flex lg:items-start lg:justify-between">
          <div className="lg:w-[22%]">
            <h3 className="mb-4 text-[16px] font-semibold text-[#000000]">
              Address
            </h3>

            <div className="flex items-start gap-2 text-sm text-[#8A8A8A]">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-[#0C06DA]"
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

              <div>
                <p className="font-semibold text-[#0C06DA]">Hobart Campus</p>

                <p className="mt-1">212A Liverpool Street, Hobart TAS 7000</p>
              </div>
            </div>
          </div>

          <div className="lg:w-[18%]">
            <h3 className="mb-4 text-[16px] font-semibold text-[#000000]">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/studentprospectus"
                  className="text-sm text-[#8A8A8A] transition hover:text-[#0C06DA]"
                >
                  Student Prospectus
                </Link>
              </li>

              <li>
                <Link
                  href="/applicationform"
                  className="text-sm text-[#8A8A8A] transition hover:text-[#0C06DA]"
                >
                  Application Form
                </Link>
              </li>

              <li>
                <Link
                  href="/studentprospectus"
                  className="text-sm text-[#8A8A8A] transition hover:text-[#0C06DA]"
                >
                  Fees & Intake
                </Link>
              </li>

              <li>
                <Link
                  href="/forms"
                  className="text-sm text-[#8A8A8A] transition hover:text-[#0C06DA]"
                >
                  Forms
                </Link>
              </li>

              <li>
                <Link
                  href="/policies"
                  className="text-sm text-[#8A8A8A] transition hover:text-[#0C06DA]"
                >
                  Policy & Procedures
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:w-[32%]">
            <h3 className="mb-4 text-[16px] font-semibold text-[#000000]">
              Our Courses
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/courses/business-management"
                  className="text-sm text-[#8A8A8A] transition hover:text-[#0C06DA]"
                >
                  BSB50420 Diploma of Leadership and Management
                </Link>
              </li>

              <li>
                <Link
                  href="/courses/graduate-diploma-management"
                  className="text-sm text-[#8A8A8A] transition hover:text-[#0C06DA]"
                >
                  BSB80120 Graduate Diploma of Management (Learning)
                </Link>
              </li>

              <li>
                <Link
                  href="/courses/information-technology"
                  className="text-sm text-[#8A8A8A] transition hover:text-[#0C06DA]"
                >
                  ICT50220 Advanced Diploma of Information Technology
                </Link>
              </li>

              <li>
                <Link
                  href="/courses/civil-engineering"
                  className="text-sm text-[#8A8A8A] transition hover:text-[#0C06DA]"
                >
                  RII60520 Advanced Diploma of Civil Construction Design
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:w-[18%]">
            <h3 className="mb-4 text-[16px] font-semibold text-[#000000]">
              Contact Us
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[#8A8A8A]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0C06DA]/10">
                  <svg
                    className="h-4 w-4 text-[#0C06DA]"
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

                <a
                  href="mailto:info@ip.edu.au"
                  className="pt-1 transition hover:text-[#0C06DA]"
                >
                  info@ip.edu.au
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm text-[#8A8A8A]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0C06DA]/10">
                  <svg
                    className="h-4 w-4 text-[#0C06DA]"
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

                <a
                  href="tel:+61000000000"
                  className="pt-1 transition hover:text-[#0C06DA]"
                >
                  +61 XXX XXX XXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 rounded-2xl bg-[#E7E6FB] px-6 py-5 text-xs text-[#8A8A8A] sm:flex-row">
          <div className="flex items-center gap-2">
            <Link
              href="/terms"
              className="font-normal text-[#000000] opacity-80 transition hover:text-[#0C06DA]"
            >
              Terms & Conditions
            </Link>

            <span>|</span>

            <Link
              href="/privacy"
              className="font-normal text-[#000000] opacity-80 transition hover:text-[#0C06DA]"
            >
              Privacy Policy
            </Link>
          </div>

          <p className="font-normal text-[#000000] opacity-80">
            © 2026 Indigo Polytechnic. All Rights Reserved.
          </p>

          <p className="font-semibold text-[#0C06DA]">
            46428 RTO Code | 04374D CRICOS Code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
