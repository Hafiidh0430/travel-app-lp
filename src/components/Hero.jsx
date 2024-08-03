import React from "react";
import Layout from "../Layout";
import Navigation from "./Navigation";

export default function Hero() {
  return (
    <>
      <div className="hero w-full h-full absolute top-0 left-0 -z-10"></div>
      <div className="welcome h-dvh">
        <Navigation />
        <div className="hero-slogan mt-[8rem]">
          <div className="main-slogan flex w-full flex-col gap-3">
            <p className="text-slate-100">Discover Your Personal Paradise.</p>
            <h1 className="slogan text-slate-100 text-[4rem]  leading-tight">
              Finding Homestay?
              <br />
              StayInAja Here.
            </h1>
            <div className="second-slogan relative flex justify-between">
              <div className="hero-cta-btn flex gap-4">
                <a
                  className="inline-flex items-center text-[14px] gap-2 pl-4 pr-1 py-1 bg-slate-100 rounded-full"
                  href=""
                >
                  Explore resources{" "}
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
                  className="inline-flex bg-slate-50 text-slate-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 items-center text-[14px]  pl-4 pr-1 py-1 rounded-full"
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
                <div className="visitors">
                    <div className="visitor-member flex">
                        <img className="w-10 h-10 bg-slate-50 rounded-full" src="" alt="" />
                        <img className="w-10 h-10 bg-slate-50 rounded-full" src="" alt="" />
                        <img className="w-10 h-10 bg-slate-50 rounded-full" src="" alt="" />
                        <img className="w-10 h-10 bg-slate-50 rounded-full" src="" alt="" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
