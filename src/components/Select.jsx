import React, { useEffect, useState } from "react";

export default function Select() {
  const option = {
    type: [
      {
        id: 1,
        name: "Villa",
      },
      {
        id: 2,
        name: "Resort",
      },
    ],

  };
  const [duration, setDuration] = useState(option.duration);

  return (
    <>
      <div className="discover_option_filter flex gap-4">
        <div className="discover_type flex gap-1 flex-col">
          <label htmlFor="" className="type_label  font-bold">
            Type
          </label>
          <select
            name=""
            id=""
            className={` select_type flex gap-1 bg-transparent outline-none`}
          >
            {option.type.map(({ id, name }) => {
              return (
                <option
                  key={id}
                  value={name}
                  className={`option_type text-black`}
                >
                  {name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}
