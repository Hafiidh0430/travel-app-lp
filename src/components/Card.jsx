import React from "react";

export default function Card() {
  return (
    <>
      <div className="card-container mt-8">
        <div className="bg-card w-[16rem] h-[16rem] rounded-xl bg-slate-300 relative">
          <h3 className="price absolute bottom-0 right-0 mb-3 mr-3 px-4 py-2 rounded-lg bg-slate-200">
            Rp. 2.100.000
          </h3>
          {/* <img src="" alt="" className="img-card w-full h-full rounded-xl bg-slate-100" /> */}
        </div>
        <div className="card-details">
            <h4 className="title"></h4>
            <div className="card-location">

            </div>
            <div className="card-rating">
                <div className="ratings"></div>
                <h5 className="visitors-count"></h5>
            </div>
        </div>
      </div>
    </>
  );
}
