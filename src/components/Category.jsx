import React from "react";

export default function Category({ category, setCategory }) {
  const categories = [
    "Recomended",
    "Bali",
    "Malang",
    "Bogor",
    "Bandung",
    "Yogyakarta",
    "Papua",
  ];
  return (
    <>
      <div className="category-btn flex gap-2">
        {categories.map((data) => {
          return (
            <button
              key={data}
              onClick={() => setCategory(data)}
              className={
                data === category
                  ? "bg-slate-200 category-villa rounded-full px-4 py-1"
                  : "category-villa hover:bg-slate-200 border border-slate-600  hover:border-none rounded-full px-4 py-1"
              }
            >
              {data}
            </button>
          );
        })}
      </div>
    </>
  );
}
