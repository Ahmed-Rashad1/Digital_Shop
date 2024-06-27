"use client";
import React, { useState } from "react";
import { Icons } from "./Icons/Icons";
import Link from "next/link";

type Props = {
  price: number;
  id: number;
};

const Price = ({ price, id }: Props) => {


  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  const [cartArray, setCartArray] = useState([]);


  const cartHandler = () => {
    }

  return (
    <div>
      <h2 className="text-primary text-xl lg:text-4xl font-bold tracking-wider">
        ${total}.00 USD
      </h2>
      <div className="flex flex-col lg:flex-row lg:py-7 gap-4 ">
        <div className="w-full lg:w-auto flex justify-center items-center gap-4">
          <div className="flex justify-center items-center  w-1/2 lg:w-auto">
            <button
              className="border-[1px] border-MyTextLiteGray text-5xl  w-32 lg:w-20 h-14 flex items-center justify-center rounded-s-xl hover:text-primary hover:bg-slate-50 active:bg-MyTextLiteGray"
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              -
            </button>
            <div className=" w-full lg:w-18 h-14 bg-slate-100 flex items-center justify-center text-3xl font-bold">
              {quantity}
            </div>
            <button
              className="border-[1px] border-MyTextLiteGray text-4xl   w-32 lg:w-20 h-14 flex items-center justify-center rounded-e-xl hover:text-primary hover:bg-slate-50 active:bg-MyTextLiteGray"
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              +
            </button>
          </div>
          <button className="w-14 h-14 p-3 rounded-xl border-[1px] border-MyTextLiteGray text-MyGray hover:text-primary hover:bg-slate-50 active:bg-MyTextLiteGray">
            <Icons name="heart" />
          </button>
        </div>
        <div className="flex  flex-1">
          <button onClick={() => cartHandler()} className="bg-primary flex-1 text-myWhite rounded-lg h-14 flex items-center justify-center cursor-pointer  hover:bg-[#1f4d8d] active:bg-MyDarkBlue">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
