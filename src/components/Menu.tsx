"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/About" },
  { id: 3, title: "Our Brands", url: "/" },
  { id: 4, title: "Accessories", url: "/" },
  { id: 5, title: "Audio", url: "/" },
  { id: 6, title: "Networks", url: "/" },
  { id: 7, title: "Devices", url: "/" },
  { id: 8, title: "Repair Equibments", url: "/" },
  { id: 9, title: "Protections", url: "/" },
];

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const refMenu = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let handle = (e: any) => {
      if (!refMenu.current?.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });
  return (
    <div className="select-none w-full" ref={refMenu}>
      {!openMenu ? (
        <div
          className="flex items-center justify-center gap-3 px-5 py-1 bg-primary text-myWhite rounded-t-lg cursor-pointer h-10 text-xs md:text-base text-nowrap"
          onClick={() => setOpenMenu(true)}
        >
          <Image src="/menu-white.svg" alt="" width={20} height={20} />
          <div>Menu</div>
        </div>
      ) : (
        <div
          className="flex items-center justify-center gap-3 px-5 py-1 bg-myWhite text-myBlack rounded-t-lg cursor-pointer shadow-lg h-10 text-xs md:text-base text-nowrap border-2 border-b-0 border-slate-100"
          onClick={() => setOpenMenu(false)}
        >
          <Image src="/close-black.svg" alt="" width={20} height={20} />
          <div>Menu</div>
        </div>
      )}
      {openMenu && (
        <div className="pt-6 text-xl w-full md:max-w-80 lg:max-w-60 xl:max-w-80  bg-myWhite text-myBlack flex flex-col justify-start items-center absolute left-0  top-54  md:top-auto md:left-auto h-[calc(100vh-218px)] md:h-auto shadow-lg z-10 rounded-b-md">
          {links.map((link) => (
            <div
              key={link.id}
              className="w-full px-1 md:px-1 hover:bg-slate-200"
            >
              <Link
                className="p-3 w-full flex  justify-end"
                href={link.url}
                onClick={() => setOpenMenu(false)}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
