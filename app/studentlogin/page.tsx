"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative flex h-[calc(100vh-5rem)] overflow-hidden font-pop">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 lg:hidden"
        style={{ backgroundImage: "url('/images/loginBg.png')" }}
      />

      <div className="relative hidden w-1/2 lg:block">
        <div
          className="absolute inset-0  bg-cover bg-center"
          style={{ backgroundImage: "url('/images/loginBg.png')" }}
        />
      </div>

      <div className="relative flex flex-1 items-start justify-center overflow-y-auto px-6 py-8  w-1/2">
        <div className="w-full max-w-sm mt-20">
          <h1 className="text-center text-3xl font-bold text-[#000000] font-pop">
            Welcome <span className="text-[#0C06DA]">Back!</span>
          </h1>
          <p className="mx-auto mt-2  text-center text-sm text-[#545454] font-pop ">
            Log in to continue your journey with Indigo Polytechnic
          </p>

          <form className="mt-8 flex flex-col gap-5">
            <div className="flex items-center gap-3 border-b border-zinc-[#5A5A5A] pb-3 focus-within:border-[#0C06DA] lg:border-zinc-200">
              <Image
                src="/images/email.png"
                alt="Student ID"
                width={20}
                height={20}
                className="shrink-0 object-contain"
              />
              <input
                type="text"
                placeholder="Student ID"
                className="w-full bg-transparent lg:text-[13px] text-[16px]  text-[#000000] outline-none placeholder:text-[#545454] lg:placeholder:text-[#8A8A8A] font-pop "
              />
            </div>

            <div className="mt-3 flex items-center gap-3 border-b border-zinc-[#5A5A5A] pb-3 focus-within:border-[#0C06DA] lg:border-zinc-200">
              <Image
                src="/images/password.png"
                alt="Student ID"
                width={20}
                height={20}
                className="shrink-0 object-contain"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-transparent lg:text-[13px] text-[16px]  text-[#000000] outline-none  placeholder:text-[#545454] lg:placeholder:text-[#8A8A8A] font-pop"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="shrink-0 text-[#0C06DA]"
              >
                {showPassword ? (
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
                      d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
                    />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
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
                      d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
                    />
                    <circle cx="12" cy="12" r="3" />
                    <path strokeLinecap="round" d="M4 4l16 16" />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm mt-3">
              <label className="flex items-center gap-2 lg:text-[#8A8A8A] text-sm font-pop lg:text-xs">
                <input
                  type="checkbox"
                  className="h-6 w-6 rounded border-zinc-300 accent-[#0C06DA] lg:h-4 lg:w-4"
                />
                Remember me
              </label>
              <a
                href="#"
                className="text-[#0C06DA] font-semibold text-sm lg:text-xs transition hover:text-[#0C06DA] font-pop"
              >
                Forgot Password?
              </a>
            </div>

            <Link
              href="/"
              className="font-pop mt-4 w-full rounded-lg bg-[#0C06DA] py-3 text-center text-sm font-normal text-white transition hover:bg-[#0a05b8]"
            >
              Log In
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}
