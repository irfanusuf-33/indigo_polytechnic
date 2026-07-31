"use client";

import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex h-[calc(100vh-5rem)] overflow-hidden font-pop">
      <div className="relative hidden w-1/2 lg:block">
        <div
          className="absolute inset-0  bg-cover bg-center"
          style={{ backgroundImage: "url('/images/loginBg.png')" }}
        />
      </div>

      <div className="flex w-full items-start justify-center overflow-y-auto px-6 py-8 lg:w-1/2 ">
        <div className="w-full max-w-sm mt-20">
          <h1 className="text-center text-3xl font-bold text-[#000000] font-pop">
            Welcome back!
          </h1>
          <p className="mt-2 text-center text-sm text-[#8A8A8A] font-pop">
            Log in to continue your journey with Indigo Polytechnic
          </p>

          <form className="mt-8 flex flex-col gap-5">
            <div className="flex items-center gap-3 border-b border-zinc-200 pb-3 focus-within:border-[#0C06DA]">
              <svg
                className="h-5 w-5 shrink-0 text-[#0C06DA]"
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
              <input
                type="text"
                placeholder="Student ID"
                className="w-full bg-transparent text-[13px] text-[#000000] outline-none placeholder:text-[#8A8A8A]"
              />
            </div>

            <div className=" mt-3 flex items-center gap-3 border-b border-zinc-200 pb-3 focus-within:border-[#0C06DA]">
              <svg
                className="h-5 w-5 shrink-0 text-[#0C06DA]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <rect x="5" y="10" width="14" height="10" rx="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10V7a4 4 0 118 0v3"
                />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-transparent text-[13px]  text-[#000000] outline-none placeholder:text-[#8A8A8A] font-pop"
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
              <label className="flex items-center gap-2 text-[#8A8A8A] text-xs font-pop">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-xs rounded border-zinc-300 accent-[#0C06DA] font-pop"
                />
                Remember me
              </label>
              <a
                href="#"
                className="text-[#8A8A8A] text-xs transition hover:text-[#0C06DA] font-pop"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className=" font-pop mt-4 w-full rounded-lg bg-[#0C06DA] py-3 text-sm font-normal text-white transition hover:bg-[#0a05b8]"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
