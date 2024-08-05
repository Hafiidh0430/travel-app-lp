import React from "react";
import Layout from "../Layout";
import Navigation from "./Navigation";

export default function Hero() {
  return (
    <>
      <div className="hero w-full h-full absolute top-0 left-0 -z-10"></div>
      <div className="welcome h-dvh ">
        <Navigation />
        <div className="hero-slogan flex justify-start items-start mt-[16vh]">
          <div className="main-slogan flex w-full flex-col gap-3">
            <p className="text-slate-100 items-center gap-2 inline-flex">
              <span className="w-14 h-[1px] rounded-full bg-slate-100"></span>
              Discover Your Personal Paradise.
            </p>
            <h1 className="slogan text-slate-100 text-[4rem] leading-tight">
              Finding Homestay?
              <br />
              StayInAja Here.
            </h1>
            <div className="second-slogan relative flex justify-between">
              <div className="hero-cta-btn flex gap-4">
                <a
                  className="inline-flex items-center text-sm gap-2 pl-4 pr-1 py-1 bg-slate-100 rounded-full"
                  href=""
                >
                  Explore resources
                  <svg
                    class="w-7 h-7 rounded-full text-slate-100 p-1 bg-gray-950 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  className="inline-flex bg-slate-50 text-slate-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 items-center text-sm  pl-4 pr-1 py-1 rounded-full"
                  href=""
                >
                  See us
                  <svg
                    class="w-7 h-7 rounded-full text-slate-100 p-1 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              <div className="second-slogan right-0 top-4 absolute text-lg text-slate-100">
                More than <span className="font-bold">842K</span> visitors -
                <br />
                Experience Our Trusted Excellence!
                <div className="visitors flex items-center mt-2 ml-8">
                  <div className="visitor-member flex p-[6px] rounded-full bg-slate-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
                    <img
                      className="w-9 h-9 bg-slate-100 rounded-full"
                      src=""
                      alt=""
                    />
                    <img
                      className="w-9 h-9 ml-[-8px] bg-slate-100 rounded-full"
                      src=""
                      alt=""
                    />
                    <img
                      className="w-9 h-9 ml-[-8px] bg-slate-100 rounded-full"
                      src=""
                      alt=""
                    />
                    <img
                      className="w-9 h-9 ml-[-8px] bg-slate-100 rounded-full"
                      src=""
                      alt=""
                    />
                    <a
                      href=""
                      className="more-visitor-btn w-9 text-[9px] text=cent h-9 ml-[-8px] inline-flex items-center justify-center border border-slate-100 rounded-full"
                    >
                      More
                    </a>
                  </div>

                  <div className="visitor-sign ml-2 inline-flex items-center gap-2">
                    <svg
                      class="w-8 h-8 text-slate-200 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M5 12h14M5 12l4-4m-4 4 4 4"
                      />
                    </svg>

                    <h3 className="text-[16px]">Visitors</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="width w-full h-24 bg-white absolute left-0 bottom-[-2.5rem] rounded-t-[4rem]"></div>
      </div>
    </>
  );
}
