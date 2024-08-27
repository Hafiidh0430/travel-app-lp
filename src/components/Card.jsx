import React from "react";

export default function Card({name, price, location, rating, visitors}) {
  return (
    <>
      <a href="" className="card-container mt-8 w-full flex flex-col gap-3">
        <div className="bg-card aspect-[1/1] rounded-xl bg-slate-300 relative">
          <h3 className="price max-md:text-[.7rem] max-md:px-3 max-md:py-1 text-sm absolute bottom-0 right-0 max-md:mb-2 max-md:mr-2 mb-3 mr-3 px-4 py-2 rounded-lg bg-slate-200">
            Rp. {price}
          </h3>
          {/* <img src="" alt="" className="img-card w-full h-full rounded-xl bg-slate-100" /> */}
        </div>
        <div className="card-details flex flex-col gap-1">
          <h4 className="title  max-md:text-[1rem] font-bold">{name}</h4>
          <div className="card-location inline-flex items-center gap-2">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-white"
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
                d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
              />
            </svg>
            <h3 className="text-slate-700 max-md:text-sm">{location}</h3>
          </div>
          <div className="card-rating flex items-center gap-3">
            <div className="ratings inline-flex gap-[6px] items-center">
              <h4 className="text-[1rem] font-bold">{rating}/<span className="text-[.8rem]">5</span></h4>
              <svg
                class="w-4 h-4 text-yellow-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
            </div>
            <h5 className="visitors-count text-sm">{visitors} visitors</h5>
          </div>
        </div>
      </a>
    </>
  );
}


