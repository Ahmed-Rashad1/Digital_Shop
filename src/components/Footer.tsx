import Image from "next/image";
import React from "react";
import { Icons } from "./Icons/Icons.jsx";
import Link from "next/link.js";

const Footer = () => {
  return (
    <div className="w-full bg-MyDarkBlue">
      <div className="container mx-auto px-5 py-6 flex flex-col justify-center text-myWhite items-center">
        <div className="flex justify-between items-start flex-wrap lg:flex-nowrap border-b-2  border-MyGray w-full gap-8 pb-4 text-MyTextLiteGray py-4">
          <div className="flex flex-col max-w-xs gap-3">
            <Image src="/logo.png" alt="" width={103} height={71} />
            <p>
              Touch Tech is your one-stop shop for the latest and coolest
              gadgets. Explore our wide range of high-tech products and enjoy
              the best prices and service.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-myWhite text-xl font-bold">Customer</h1>
            <Link href="/">
              <p className="hover:text-myWhite">Shop</p>
            </Link>
            <Link href="/">
              <p className="hover:text-myWhite">About us</p>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-myWhite text-xl font-bold">Information</h1>
            <Link href="/">
              <p className="hover:text-myWhite">Contact</p>
            </Link>
            <Link href="/">
              <p className="hover:text-myWhite">Policy</p>
            </Link>
          </div>
          <div className="flex flex-col gap-3 max-w-xs">
            <h1 className="text-myWhite text-xl font-bold">Contact Info</h1>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 ">
                <div className=" h-7 w-7 bg-MyGray rounded-full">
                  <div className="h-7 w-7 flex justify-center items-center text-myWhite">
                    {" "}
                    <Icons name="location" />
                  </div>
                </div>
                <Link href="/" className="hover:text-myWhite">
                  Palestine-Nablus - Al-makhfiya main St- opposite Diwan kwny
                </Link>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div className=" h-7 w-7 bg-MyGray rounded-full">
                  <div className="h-7 w-7 flex justify-center items-center text-myWhite">
                    <Icons name="call" />
                  </div>
                </div>
                <Link href="/" className="hover:text-myWhite">
                  009792347767
                </Link>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div className=" h-7 w-7 bg-MyGray rounded-full">
                  <div className="h-7 w-7 flex justify-center items-center text-myWhite">
                    <Icons name="message" />
                  </div>
                </div>
                <Link href="/" className="hover:text-myWhite">
                  info@touchtechco.com
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-myWhite text-xl font-bold">Download App</h1>
            <div className="flex flex-col lg:flex-row gap-4 ">
              <div>
                <Image src="/Qrcode.png" alt="" width={80} height={80} />
              </div>
              <div className="flex flex-col lg:items-center  justify-center gap-2">
                <Link href="/">
                  <Image src="/googlePlay.png" alt="" width={104} height={30} />
                </Link>
                <Link href="/">
                  <Image src="/appstore.png" alt="" width={104} height={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-wrap justify-between py-5 gap-4">
          <div>
            <p>© 2023 DIVANO. All Rights Reserved Ali Atwan</p>
          </div>
          <div className="flex gap-4 text-myWhite w-full md:w-auto">
            <Link href="/">
              <Icons name="facebook" />
            </Link>
            <Link href="/">
              <Icons name="twitter" />
            </Link>
            <Link href="/">
              <Icons name="whatsApp" />
            </Link>
            <Link href="/">
              <Icons name="instagram" />
            </Link>
            <Link href="/">
              <Icons name="linkedIn" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
