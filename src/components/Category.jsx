import React, { memo } from "react";

export default function Category({ category, setCategory }) {
  const categories = [
    "Recomended",
    "Bali",
    "Bogor",
    "Bandung",
    "Malang",
    "Yogyakarta",
  ];

  return (
    <>
      <div className="category-btn overflow-x-auto max-md:overflow max-md:w-[76%] max flex gap-2">
        {categories.map((data) => {
          return (
            <button
              key={data}
              onClick={() => memo(setCategory(data), [])}
              className={`categories max-md:text-sm  px-4 ${
                data === category
                  ? "bg-slate-200 category-villa rounded-full"
                  : "category-villa hover:bg-slate-200 border border-slate-600  hover:border-none rounded-full"
              }`}
            >
              {data}
            </button>
          );
        })}
      </div>
    </>
  );
}
