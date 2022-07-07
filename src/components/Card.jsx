import React from "react";

export function Card({ data }) {
  return (
    <div className="relative w-full border-l-4 border-gray-400 rounded-lg bg-gray-300 shadow-lg my-8 p-4 pt-8">
      <div className="border-b-[1px] border-gray-400">
        <img className="absolute top-[-24px] w-12 " src={`./public/${data.logo}`} alt="" />
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
      <div className="inline-flex pt-3 gap-2">
        {data?.languages?.map((lang) => {
          return <span className="bg-gray-300 shadow-md px-2">{lang}</span>;
        })}
        {data?.tools?.map((tool) => {
          return <span className="bg-gray-300 shadow-md px-2">{tool}</span>;
        })}
      </div>
    </div>
  );
}
