import React from "react";
import Layout from "../Layout";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Card from "../components/Card";

export default function welcome() {
  return (
    <>
      <Layout>
        <Hero />
        <div className="main-content">
          <div className="villa-section">
            <header className="header-villa-section flex flex-col gap-3">
              <h3 className="w-fit category-content text-lg px-4 py-2 rounded-full bg-slate-300">
               Most Visited.
              </h3>
              <h1 className="slogan text-[2.5rem]">
                Experience Luxury at Our Most
                <br /> Popular Villas.
              </h1>
              <div className="category-btn flex gap-2">
                <a href="" className="category-villa bg-slate-300 hover:border-none rounded-full px-4 py-1">Recomended</a>
                <a href="" className="category-villa border border-slate-600 hover:bg-slate-300 hover:border-none rounded-full px-4 py-1">Bali</a>
                <a href="" className="category-villa border border-slate-600 hover:bg-slate-300 hover:border-none rounded-full px-4 py-1">Tangerang</a>
                <a href="" className="category-villa border border-slate-600 hover:bg-slate-300 hover:border-none rounded-full px-4 py-1">Malang</a>
                <a href="" className="category-villa border border-slate-600 hover:bg-slate-300 hover:border-none rounded-full px-4 py-1">Yogyakarta</a>
                <a href="" className="category-villa border border-slate-600 hover:bg-slate-300 hover:border-none rounded-full px-4 py-1">Bogor</a>
                <a href="" className="category-villa border border-slate-600 hover:bg-slate-300 hover:border-none rounded-full px-4 py-1">Bandung</a>
              </div>
            </header>
            <div className="card-villas grid grid-cols-4 gap-4">
            <Card/>
            {/* <Card/>
            <Card/>
            <Card/> */}
              
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
