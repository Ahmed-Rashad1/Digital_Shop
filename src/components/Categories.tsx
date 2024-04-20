"use client";

import Image from "next/image";
// import Link from "next/prop";
import { useEffect, useState, useRef } from "react";
import { Icons } from "./Icons/Icons.jsx";
import { usePathname } from "next/navigation.js";

const Categories = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [openCat, setOpenCat] = useState(false);
  const [perantId, setPerantId] = useState(null);
  const refCat = useRef<HTMLDivElement | null>(null);
  const refLink = useRef<HTMLDivElement | null>(null);

  const openCatHandler = () => {
    setOpenCat(true);
    setId(null);
    setPerantId(null);
  };

  const openLink = function (child: any, perant: any) {
    if (id === child && perantId === perant) {
      setId(null);
      setPerantId(null);
    } else {
      setId(child);
      setPerantId(perant);
    }
  };
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
  useEffect(() => {
    let handle = (e: any) => {
      if (!refCat.current?.contains(e.target)) {
        setOpenCat(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });
  return (
    <div className="w-full select-none" ref={refCat}>
      {!openCat ? (
        <div
          className="flex items-center justify-center gap-3 px-5 py-1  bg-secondary text-myBlack  rounded-t-lg cursor-pointer h-10 text-xs md:text-base text-nowrap"
          onClick={() => openCatHandler()}
        >
          <Image src="/menu_black.svg" alt="" width={20} height={20} />
          <div>All Categories</div>
        </div>
      ) : (
        <div
          className="flex items-center justify-center gap-3 px-5 py-1 bg-myWhite text-myBlack rounded-t-lg cursor-pointer shadow-lg h-10 text-xs md:text-base text-nowrap border-2 border-b-0 border-slate-100"
          onClick={() => setOpenCat(false)}
        >
          <Image src="/close-black.svg" alt="" width={20} height={20} />
          <div>All Categories</div>
        </div>
      )}
      {openCat && (
        <div className="pt-6 text-xl w-full md:max-w-80 lg:max-w-60 xl:max-w-80  bg-myWhite text-myBlack flex flex-col sm:gap-1 md:gap-3 justify-start items-start absolute left-0  top-54  md:top-auto md:left-auto h-auto shadow-lg z-10 rounded-b-md">
          {data.map((prop: any) => (
            <div key={prop.id} className="w-full px-1 md:px-1">
              <h1 className="px-8 md:px-5 py-3 font-bold text-myBlack">
                {prop.title}
              </h1>
              <div className="w-full">
                {prop.properties.map((link: any) => (
                  <div
                    className={`relative hover:bg-slate-200 px-8 md:px-5 ${
                      link.id === id && prop.id === perantId
                        ? "text-primary"
                        : "text-MyTextGray"
                    }`}
                    key={link.id}
                    onClick={() => {
                      openLink(link.id, prop.id);
                    }}
                  >
                    <div className="flex justify-between items-center py-4 w-full ">
                      <div className="flex gap-2 ">
                        <div
                          className={` ${
                            link.id === id && prop.id === perantId
                              ? "text-primary"
                              : "text-MyTextGray"
                          }`}
                        >
                          {" "}
                          <div className="w-6 h-6">
                            <Icons name={link.icon} />
                          </div>
                        </div>
                        <h3 className="text-base "> {link.title}</h3>
                      </div>
                      <div
                        className={`${
                          link.id === id && prop.id === perantId
                            ? "text-primary"
                            : "text-MyTextGray"
                        }`}
                      >
                        <div className="w-6 h-6">
                          <Icons name="arrow" />
                        </div>
                      </div>
                    </div>
                    {link.id === id && prop.id === perantId && (
                      <div
                        className="absolute left-0 sm:left-80 top-12  md:top-2 p-5 text-xl bg-myWhite text-myBlack flex flex-col gap-3 justify-start items-start  shadow-lg rounded-lg border-2 border-slate-200 w-full md:w-fit sm:text-nowrap z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <h1 className="font-bold text-myBlack">{link.title}</h1>
                        <div className="flex flex-col">
                          {link.chideren.map((child: any) => (
                            <h3
                              key={child.id}
                              className="text-base text-slate-600 "
                            >
                              {" "}
                              {child.title}
                            </h3>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
