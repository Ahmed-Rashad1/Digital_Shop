"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Icons } from "./Icons/Icons";
import Link from "next/link";
const Products = () => {
  const categName = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const getData = () => {
    fetch("https://products-api-flame.vercel.app/products/")
    // fetch("products.json")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        if (categName.get("class") == "All" || categName.get("class") == null) {
          setFilterProducts(products);
        } else {
          setFilterProducts(
            products.filter((product: any) => {
              return (
                product.class.toLowerCase().includes(categName.get("class")?.toLowerCase()) ||
                categName.get("class")?.toLowerCase().includes(product.category.toLowerCase())
              );
            })
          );
        }
      });
  };
  useEffect(() => {
    getData();
  }, [categName.get("class")]);
  return (
    <div className="flex flex-col">
      {/* title */}
      <div className="text-3xl font-bold py-10">
        {categName.get("class") ? categName.get("class") : "All Products"}
        <span className="ms-3">
          {categName.get("class") === "All" ? "Products" : ""}
        </span>
      </div>
      <div className="flex flex-row gap-10">
        {/* dashboard */}
        <div className="hidden lg:block min-w-60 w-60 bg-slate-500"></div>
        <div>
          {/* sorting */}
          <div className="flex flex-row justify-between items-center py-5">
            <div className="flex gap-2">
              <p>
                <span>{filterProducts.length}</span>
              </p>
              <p>product found</p>
            </div>
            <div>
              <form className="min-w-36  md:min-w-60 mx-auto">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option selected>Sort by</option>
                  <option value="name">Name</option>
                  <option value="category">Category</option>
                  <option value="date">Date</option>
                  <option value="price">Price</option>
                </select>
              </form>
            </div>
          </div>
          {/* products */}
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-wrap gap-16 justify-center items-center">
              {filterProducts?.map((product: any) => (
                <Link
                  href={`/products/${product.id}`}
                  key={product.id}
                  className="w-64 h-80 relative flex flex-col items-start justify-between"
                >
                  <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full text-MyGray flex items-center justify-center">
                    <div className="h-7 w-7">
                      <Icons name="heart" />
                    </div>
                  </button>
                  <div className="bg-[#F5F5F5] w-full h-56 flex items-center justify-center rounded-md">
                    <Image
                      src={`/${product.image}`}
                      alt=""
                      width={220}
                      height={220}
                    ></Image>
                  </div>
                  <div className="h-20 text-xl font-bold">
                    <div className="">{product.title}</div>
                    <div className="text-primary">{product.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
