"use client";

// import "globals.css"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Icons } from "./Icons/Icons";
import Link from "next/link";

const Featured = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("https://products-api-flame.vercel.app/links/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full">
      {/* CONTAINER */}
      <div className="container mx-auto p-5 w-full ">
        {/* TITLE */}
        <div className="m-4 py-8">
          <div className="mb-10 flex items-center gap-5">
            <div className="w-5 h-10 bg-[#79D70A] rounded-md"></div>
            <h1 className="text-lg text-primary font-semibold">categories</h1>
          </div>
          <h1 className="text-4xl font-semibold">Browse by categories</h1>
        </div>
        <div className="hide-scroll overflow-x-scroll">
          {/* WRAPPER */}
          <div className="flex gap-4 md:gap-8 w-max">
            {/* SINGLE ITEM */}
            {data
              ?.filter((ItemId: any) => ItemId.id <= 4)
              .map((item: any) =>
                item.properties?.map((categ: any) => (
                  <Link
                    href={{
                      pathname: "/products",
                      query: {
                        class: categ.class,
                      },
                    }}
                    key={categ.id}
                    className="w-[180px] h-[150px] border-2 border-slate-300 rounded-lg text-myBlack hover:text-myWhite hover:bg-primary flex flex-col items-center p-2 transition-all duration-300 cursor-pointer shadow-xl"
                  >
                    {/* IMAGE CONTAINER */}
                    <div className="flex-1 flex items-center w-10 h-10">
                      <Icons name={categ.icon} />
                    </div>
                    {/* TEXT CONTAINER */}
                    <div className="flex-2">
                      <h1 className="text-center mb-3">{categ.nickname}</h1>
                    </div>
                  </Link>
                ))
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
