"use client";

// import "globals.css"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Icons } from "./Icons/Icons";
import Link from "next/link";

const Featured = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const [data, setData] = useState([]);
  // const [slider, setSlider] = useState(0);
  const getData = () => {
    fetch("https://products-api-flame.vercel.app/links/")
    // fetch("links.json")
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
          <div className="flex justify-between items-center gap-5">
            <h1 className="text-2xl lg:text-4xl font-semibold ">
              Browse by categories
            </h1>
            <div className="flex justify-center items-center">
              <button
                className="border-[1px] text-MyGray border-MyTextLiteGray text-xl md:text-4xl  w-10 md:w-24 h-14 pb-1 flex items-center justify-center rounded-s-xl hover:text-primary hover:bg-slate-50 active:bg-MyTextLiteGray"
                onMouseDown={() => (ref.current.scrollLeft -= 210)}
              >
                {`<`}
              </button>
              <button
                className="border-[1px] text-MyGray border-MyTextLiteGray text-xl md:text-4xl  w-10 md:w-24 h-14 pb-1 flex items-center justify-center rounded-e-xl hover:text-primary hover:bg-slate-50 active:bg-MyTextLiteGray"
                onMouseDown={() => (ref.current.scrollLeft += 210)}
              >
                {`>`}
              </button>
            </div>
          </div>
        </div>
        <div
          className="hide-scroll overflow-x-scroll scroll-smooth transition duration-150 ease-in-out"
          ref={ref}
        >
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
                        class: categ.class.toLowerCase(),
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
