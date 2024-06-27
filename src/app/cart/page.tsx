import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartPage = () => {
  return (
    <div className="w-full bg-[#ECF1F6]">
      <div className="container mx-auto p-5 w-full">
        <div className="flex flex-col lg:flex-row w-full gap-6 my-10">
          <div className="bg-myWhite w-full h-96 lg:w-2/3 rounded-lg p-2 sm:p-5">
            <h1 className="font-bold mb-6">
              Your Cart <span className="font-normal text-MyGray 
              ms-2">{`(2 items)`}</span></h1>
            <div className="flex flex-col gap-10">
              <div className="grid grid-cols-12 font-bold text-sm sm:text-base">
                <div className="col-span-4">Product</div>
                <div className="col-span-3">Price</div>
                <div className="col-span-3">Quantity</div>
                <div className="col-span-2 text-end">Subtotal</div>
              </div>
              <div className="grid grid-cols-12 text-sm sm:text-base items-center">
                <div className="col-span-4">
                  <div className="flex flex-col sm:flex-row  items-start sm:items-center justify-start  gap-3">
                    <div className="bg-MyTextLiteGray w-16 h-16 rounded-lg flex justify-center items-center ">
                      <Image src="/samsung-car-charger.jpg" alt="" width={50} height={50} className="rounded-lg" />
                    </div>
                    <div className="text-nowrap flex flex-col items-center justify-center">
                      <h2>Having hv</h2>
                      <h2>Gamepad</h2>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <h2>
                    $650
                  </h2>
                </div>
                <div className="col-span-3"><h2>01</h2></div>
                <div className="col-span-2 text-end">
                  <h2>
                    $650
                  </h2></div>
              </div>
            </div>
            {/* <table className="w-full">
              <thead >
                <tr className="h-14  text-sm sm:text-base">
                  <th className="text-center sm:text-start">
                    Product
                  </th>
                  <th className="text-center sm:text-start">
                    Price
                  </th>
                  <th className="text-center sm:text-start">
                    Quantity
                  </th>
                  <th className="text-center sm:text-start">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-32 text-sm">
                  <td className="text-center sm:text-start w-0 sm:w-auto text-nowrap">
                    <div className="flex flex-col md:flex-row items-center justify-start  gap-3">
                      <div className="bg-MyTextLiteGray w-16 h-16 rounded-lg flex justify-center items-center ">
                        <Image src="/samsung-car-charger.jpg" alt="" width={50} height={50}  className="rounded-lg"/>
                      </div>
                      <div className="md:me-10">
                        <h2>Having hv</h2>
                        <h2>Gamepad</h2>
                      </div>
                    </div>
                  </td>
                  <td className="text-center sm:text-start">
                    <h2>
                      $650
                      </h2>
                  </td>
                  <td className="text-center sm:text-start">
                    <h2>01</h2>
                  </td>
                  <td className="text-center sm:text-start">
                    <h2>$650</h2>
                  </td>
                </tr>
              </tbody>
            </table> */}
            <button className="text-primary rounded-lg border-[1px] border-primary px-12 py-4"> <Link href={"/products"}>Return To Shop</Link></button>
          </div>
          <div className="bg-myWhite w-full h-96 lg:w-1/3 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
