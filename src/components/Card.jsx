import React from "react";

export function Card({ data, setCategory, category }) {
  const handleCategory = (e) => {
    if (category.length == 0) {
      return setCategory((prev) => [...prev, e]);
    }

    const repeated = category.filter((item) => item == e);

    if (repeated.length == 0) {
      setCategory((prev) => [...prev, e]);
    }
  };

  return (
    <div className="relative w-full border-l-4 border-gray-400 rounded-lg bg-gray-300 shadow-lg my-8 p-4 pt-8 lg:flex lg:justify-between lg:items-center">
      <div className="border-b-[1px] border-gray-400 lg:border-none lg:flex  lg:items-center">
        <img
          className="absolute top-[-24px] w-12 lg:relative lg:w-[80px] lg:top-0"
          src={`${data.logo}`}
          alt="company logo"
        />
        <div className="lg:pl-4">
          <div className="flex items-center pb-2 gap-5">
            <p>{data.company}</p>
            <span className="flex gap-2 text-white">
              {data.new && (
                <span className="bg-gray-400 rounded-xl px-2 font-bold">
                  NEW!
                </span>
              )}
              {data.featured && (
                <span className="bg-gray-500 rounded-xl px-2 font-bold">
                  FEATURED
                </span>
              )}
            </span>
          </div>
          <p className="font-bold text-gray-500">{data.position}</p>
          <div className="flex items-center gap-2 py-2 pb-3">
            <span>{data.postedAt}</span>
            <span>• {data.contract}</span>
            <span>• {data.location}</span>
          </div>
        </div>
      </div>
      <div className="inline-flex pt-3 gap-2">
        {data?.languages?.map((lang, index) => {
          return (
            <button
              key={index}
              onClick={(e) => handleCategory(e.target.innerHTML)}
              className="bg-gray-300 shadow-md px-2"
            >
              {lang}
            </button>
          );
        })}
        {data?.tools?.map((tool, index) => {
          return (
            <button
              key={index}
              onClick={(e) => handleCategory(e.target.innerHTML)}
              className="bg-gray-300 shadow-md px-2"
            >
              {tool}
            </button>
          );
        })}
        {data.role && (
          <button
            onClick={() => handleCategory(data.role)}
            className="bg-gray-300 shadow-md px-2"
          >
            {data.role}
          </button>
        )}
        {data.level && (
          <button
            onClick={() => handleCategory(data.level)}
            className="bg-gray-300 shadow-md px-2"
          >
            {data.level}
          </button>
        )}
      </div>
    </div>
  );
}
