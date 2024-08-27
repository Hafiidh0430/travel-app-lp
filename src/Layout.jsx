import React from "react";
import Navigation from "./components/Navigation";

export default function layout({ children, is_mt }) {
  return (
    <>
      <div className={`layout ${is_mt && "mt-52" } `}>
        <div className="wrapper-layout mx-[4rem] max-md:mx-[2rem] lg:mx-[6rem]">
          {children}
        </div>
      </div>
    </>
  );
}
