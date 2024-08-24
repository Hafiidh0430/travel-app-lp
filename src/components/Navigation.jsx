import React, { useEffect, useRef, useState } from "react";

export default function Navigation() {
  const [isSubNav, setIsSubNav] = useState(false);
  const [isNavScroll, setIsNavScroll] = useState(false);
  const _utils = [
    {
      PATH: "/",
      Address: "Welcome",
    },
    {
      PATH: "/dicover",
      Address: "Discover",
    },
    {
      PATH: "/support",
      Address: "Support",
    },
    {
      PATH: "/contact",
      Address: "Contact",
    },
  ];

  useEffect(() => {
    const scrollActive = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;
      const halfScreenHeight = screenHeight / 2 + screenHeight - 405;

      if (scrollY > halfScreenHeight) {
        setIsNavScroll(scrollY > halfScreenHeight)
      } else {
        setIsNavScroll(false);
      }
    };
    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, [window.scroll]);

  return (
    <>
      <div 
        className={`fixed md:hidden ${isNavScroll ? 'text-black' : 'text-slate-100'} py-8 lg:hidden top-0 w-full z-50 ${
          isSubNav && "bg-slate-50 h-dvh"
        } bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 px-5 `}
      >
        <div
          
          className="container_nav flex flex-col w-full items-start justify-between "
        >
          <div className="flex items-center w-full justify-between">
            <h1 className="logo font-bold text-xl">StayInAja.</h1>
            <div className="left-side flex items-center gap-4">
              <div className="auth text-sm flex items-center">
                <a
                  className="max-md:text-sm bg-slate-50 bg-transparent underline px-5 py-2 rounded-full"
                  href=""
                >
                  Sign In
                </a>
                <a
                  className={`${isNavScroll && 'border-black'} max-md:text-sm border rounded-full px-4 py-[.4rem]`}
                  href=""
                >
                  Register
                </a>
              </div>
              <div
                onClick={() => setIsSubNav((prev) => !prev)}
                className={`hamburger_menu cursor-pointer relative ${isSubNav && "active"}`}
              >
                <span className={`w-8 h-[1px] ${isNavScroll && 'bg-black'} block bg-slate-100`}></span>
                <span className={`w-8 h-[1px] ${isNavScroll && 'bg-black'} block mt-3 bg-slate-100`}></span>
              </div>
            </div>
          </div>
          {isSubNav && (
            <div className="sub_nav flex flex-col w-full">
              <span className={`mt-4 ${isNavScroll && 'bg-black'} bg-slate-100 rounded-full w-ful h-[1px]`}></span>
              <nav className="flex gap-3 flex-col mt-2 text-sm py-2">
                {_utils.map((data) => {
                  return (
                    <a
                      className="max-md:text-lg text-sm"
                      key={data.Address}
                      href={data.PATH}
                    >
                      {data.Address}
                    </a>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </div>

      <div className="flex max-md:hidden max-sm:hidden w-full items-center text-slate-100 justify-between ">
        <h1 className="logo font-bold text-2xl">StayInAja.</h1>
        <nav className="flex gap-4 text-sm bg-slate-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 px-5 py-2 rounded-full">
          {_utils.map((data) => {
            return (
              <a key={data.Address} href={data.PATH}>
                {data.Address}
              </a>
            );
          })}
        </nav>
        <div className="auth text-sm flex gap-2 items-center">
          <a
            className=" bg-slate-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 px-5 py-2 rounded-full"
            href=""
          >
            Sign In
          </a>
          <a className="border rounded-full px-5 py-2" href="">
            Register
          </a>
        </div>
      </div>
    </>
  );
}
