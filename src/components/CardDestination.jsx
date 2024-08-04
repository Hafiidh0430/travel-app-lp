import React from "react";

export default function CardDestination({title, visitors}) {
  return (
    <>
      <div className="card-container flex flex-col gap-3">
        <div className="card-image w-full rounded-xl h-24 bg-slate-200">
          {/* <img className="img-destination w-full rounded-xl h-full bg-slate-200" src="" alt="" /> */}
        </div>

        <div className="card-details flex flex-col text-slate-700">
          <h3 className="title-destination font-bold text-lg">{title}</h3>
          <h4 className="visitors-destination text-[14px]">{visitors} visitors</h4>
        </div>
      </div>
    </>
  );
}
