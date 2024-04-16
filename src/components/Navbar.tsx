"use client";

import React, { useState } from "react";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import Categories from "./Categories";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { Icons } from "./Icons/Icons";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (url: any) => {
    return pathname === url;
  };
  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About", url: "/about" },
    { id: 3, title: "Our Brands", url: "/ourBrands" },
    { id: 4, title: "Accessories", url: "/products?class=Accessories" },
    { id: 5, title: "Audio", url: "/products?class=Audio" },
    { id: 6, title: "Networks", url: "/products?class=Networks" },
    { id: 7, title: "Devices", url: "/products?class=Devices" },
    { id: 8, title: "Repair Equibments", url: "/repairEquibments" },
    { id: 9, title: "Protections", url: "/protections" },
  ];

  return (
    <div
      className="flex
    flex-col justify-center items-center"
    >
      {/*  main nav */}
      {/* logo */}
      <div className="w-full border-b-2 border-b-blue-50">
        <div className="container mx-auto px-5 h-28 flex justify-between items-center  ">
          <Link href="/">
            <Image src="/logo.png" alt="" width={100} height={100} />
          </Link>
          <div className="relative w-1/2 ">
            <input
              type="search"
              id="default-search"
              className="w-full p-4 ps-5 text-sm text-gray-900 rounded-2xl bg-blue-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search product, brands, etc.."
              required
            />
            <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-1 text-myBlack ">
              <div className="w-8 h-8">
                <Icons name="profile" />
              </div>
              <h2 className="hidden md:block">Login</h2>
            </Link>
            <Link
              href="/"
              className="px-3 border-x-slate-500 border-x-2 flex items-center gap-1 text-myBlack "
            >
              <div className="w-8 h-8">
                <Icons name="heart" />
              </div>
              <h2 className="hidden md:block">Wishlist</h2>
            </Link>
            <Link href="/" className="flex items-center gap-1 text-myBlack">
              <div className="flex-1 w-8 h-8">
                <Icons name="buy" />
              </div>
              <h2 className="hidden md:block">Cart</h2>
            </Link>
          </div>
        </div>
      </div>
      {/* second nav */}
      {/* moble menu */}
      <div className="container gap-10 mx-auto px-5 flex w-full justify-between items-end h-14 relative">
        <div className="max-w-80 lg:max-w-60 xl:max-w-80 w-1/2 ">
          <Categories />
        </div>
        <div className="hidden lg:flex text-sm xl:text-base justify-between flex-1">
          {links.map((item) => {
            return (
              <Link href={item.url} key={item.id} className="pb-1">
                <div
                  className={`p-1 pb-2 ${
                    isActive(item.url)
                      ? "border-b-2 border-b-primary text-primary"
                      : ""
                  }`}
                >
                  {item.title}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="max-w-80 w-1/2 lg:hidden">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
