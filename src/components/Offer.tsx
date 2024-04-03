import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icons } from "./Icons/Icons";

const Offer = () => {
  return (
    <div className="bg-black  ">
      <div className="container mx-auto px-5 flex flex-col md:flex-row h-[525px]">
        <div className="flex-1 text-myWhite flex flex-col justify-center  items-center lg:items-start text-center gap-8 py-6">
          <div className="flex flex-row items-center gap-5">
            <Image src="/apple_gray.png" alt="" width={30} height={30}></Image>
            <p>iPhone 14 Series</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl  xl:text-6xl md:text-start">Up to 10%</h1>
            <h1 className="text-5xl xl:text-6xl ">off Voucher</h1>
          </div>
          <Link href="/" className="flex flex-row items-center gap-2">
            <p className="border-b-2 border-myWhite">Shop Now</p>
            <div className="w-6 h-6">
            <Icons name="arrow" />
            </div>
          </Link>
        </div>
        <div className="flex-1 w-full relative ">
          <Image
            src="/hero_phones.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
