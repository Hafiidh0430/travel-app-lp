import React from "react";

export default function CardTestimonal({ user, profesion, message }) {
  return (
    <>
      <div className="card-testimonial-container rounded-2xl bg-slate-200 px-6 py-4 ">
        <div className="card-header flex items-center gap-3">
          <img src="" alt="" className="photo-profile w-10 h-10 rounded-full bg-slate-400" />
          <div className="user-profile">
            <h3 className="name text-lg font-bold">{user}</h3>
            <p className="profesion text-sm">{profesion}</p>
          </div>
        </div>
        <div className="card-body mt-3">
          <p className="message text-justify">{message}</p>
        </div>
      </div>
    </>
  );
}
