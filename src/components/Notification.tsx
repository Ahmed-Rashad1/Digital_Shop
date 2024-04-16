import Link from "next/link";
import React from "react";

const Notification = () => {
  return (
    <div className="  bg-primary">
      <div className="container mx-auto px-5 h-12 text-slate-100 flex justify-between items-center gap-2 cursor-pointer">
        <div>Our Policy</div>
        <div className="flex gap-3 items-center">
          <p className="hidden text-xs text-center lg:text-base md:block ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link
            href={{
              pathname: "/products",
              query: {
                class: "All",
              },
            }}
            className="underline"
          >
            ShopNow &gt;{" "}
          </Link>
        </div>
        <div className="border">English</div>
      </div>
    </div>
  );
};

export default Notification;
