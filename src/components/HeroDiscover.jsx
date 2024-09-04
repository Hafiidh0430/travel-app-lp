import React from "react";
import Select from "./Select";

export default function HeroDiscover({searchInput, setSearchInput}) {
  return (
    <>
      <div className="container_hero_discover relative w-full pt-[10rem] px-[4rem] max-md:px-[2rem] lg:px-[6rem]">
        <div className="wrapper_hero_discover gap-5 h-full flex flex-col items-center justify-center w-full">
          <h1 className="discover_hero_slogan leading-[4rem] text-center  text-black text-[4rem]">
            Type, find, and choose <br /> your styles.
          </h1>

          <div className="input_search_discover flex flex-col gap-5 w-full ">
            <div className="input w-full flex items-center gap-3">
              <input onChange={(e)=> setSearchInput(e.target.value)}
                placeholder="Best villa in bandung"
                className="w-full bg-transparent border-slate-300 px-4 py-2 outline-none border rounded-full"
                type="text"
              />
              <button className="button text-white bg-slate-950 p-3 rounded-full">
                <svg
                  class="w-6 h-6 text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
            <Select />
          </div>
        </div>
        {/* <div className="shape w-full h-12 bg-white absolute left-0 bottom-[-1rem] rounded-t-[2rem]"></div> */}
      </div>
    </>
  );
}
