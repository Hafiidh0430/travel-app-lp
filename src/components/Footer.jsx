import React from "react";
import Star from "../assets/components/Star.png";

export default function Footer() {
  return (
    <>
      <footer className="footer-container text-white p-[4rem] rounded-[4rem] bg-gray-950">
        <header className="footer-header gap-4 relative flex flex-col items-center">
          <h4 className="text-book w-[46rem] text-center text-xl lg:text-2xl">
            Let’s book today and take advantage of our services. We’re always
            waiting your arrival for 24 hours, don’t miss out for all surprise
            of us!
          </h4>
          <div className="cta-btn flex gap-2 items-center">
            <a
              className="bg-white rounded-full px-4 py-2 text-black text-sm"
              href=""
            >
              What a suprise?
            </a>
            <a
              className="border border-white px-4 py-2 text-sm rounded-full"
              href=""
            >
              Book now
            </a>
          </div>
          <span className="line absolute bottom-0  top-[9.5rem] rounded-full w-full h-[1px] bg-white"></span>
        </header>

        <div className="footer-body h-[10rem] mt-16 flex justify-between">
          <div className="left-section-footer flex flex-col justify-between">
            <div className="catalog flex flex-col gap-3">
              <h5 className="text-3xl">Catalog.</h5>
              <div className="sub-catalog text-sm flex flex-wrap w-80">
                <p className="text-slate-400">Villa & Resort</p>
                <span className="px-3 text-slate-500">/</span>
                <p className="text-slate-400">Popular Destinations</p>
                <span className="px-3 text-slate-500">/</span>
                <p className="text-slate-400">About Us</p>
                <span className="px-3 text-slate-500">/</span>
                <p className="text-slate-400">Contact</p>
              </div>
            </div>
            <h5 className="copyright text-xl">@2024 ~ Copyright.</h5>
          </div>
          <div className="right-section-footer w-[22rem] h-fit flex flex-wrap gap-6">
            <div className="contact">
              <h3>Contact.</h3>
              <p className="text-sm text-slate-500">( +62 817-000-3267 )</p>
            </div>
            <div className="email">
              <h3>Email.</h3>
              <p className="text-sm text-slate-500">
                stayinajacontactid@gmail.com
              </p>
            </div>
            <div className="location">
              <h3>Location.</h3>
              <p className="text-sm text-slate-500">
                Alpha Tower, Sudirman Street No. 45, <br /> 18rd Floor, South
                Jakarta - 12930.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="overflow-hidden">
      <div className="running-text font-bold gap-4 text-nowrap inline-flex mt-[2rem] text-[8rem] ">
        <h1>Are You Ready for Feel Free Together?</h1>
        <img className="w-[12rem] h-[12rem]" src={Star} alt="" />
        <h1>Let’s Book Today!</h1>
        <img className="w-[12rem] h-[12rem]" src={Star} alt="" />
      </div>
      </div>
    </>
  );
}
