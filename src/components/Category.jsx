import React, { memo } from "react";

export default function Category({ category, setCategory }) {
  const categories = [
    "Recomended",
    "Bali",
    "Bogor",
    "Bandung",
  ];

  return (
    <>
      <div className="category-btn overflow-x-auto max-md:overflow max-md:w-[76%] max flex gap-2">
        {categories.map((data) => {
          return (
            <button
              key={data}
              onClick={() => memo(setCategory(data), [])}
              className={`max-md:text-sm sm:py-1 ${
                data === category
                  ? "bg-slate-200 category-villa rounded-full px-4 py-1"
                  : "category-villa hover:bg-slate-200 border border-slate-600  hover:border-none rounded-full px-4 py-1"
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
