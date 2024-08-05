import React from "react";

export default function Navigation() {
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

  return (
    <>
      <div className="flex items-center text-slate-100 justify-between ">
        <h1 className="logo font-bold text-2xl">StayInAja.</h1>
        <nav className="flex gap-4 text-sm bg-slate-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 px-5 py-2 rounded-full">
          {_utils.map((data) => {
            return <a key={data.Address} href={data.PATH}>{data.Address}</a>;
          })}
        </nav>
        <div className="auth text-sm flex gap-2 items-center">
            <a className=" bg-slate-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 px-5 py-2 rounded-full" href="">Sign In</a>
            <a className="border rounded-full px-5 py-2" href="">Register</a>
        </div>
      </div>
    </>
  );
}
