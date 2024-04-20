import { Icons } from "@/components/Icons/Icons";
import Image from "next/image";
import Link from "next/link";

async function getData(id: any) {
  const res = await fetch(
    "https://products-api-m9ho.onrender.com/products/" + id
  );
  return res.json();
}

export default async function SingleProductPage({ params }: any) {
  const product = await getData(params.id);
  return (
    <div className="container mx-auto p-5 w-full">
      <div className="flex flex-col lg:flex-row w-full gap-6 mb-10 ">
        <div className="flex-1 flex flex-col-reverse lg:flex-row gap-4">
          <div className="flex lg:flex-col gap-4">
            <div className="bg-[#F5F5F5] w-full h-28 flex items-center justify-center rounded-xl">
              <Image
                src={`/${product.image}`}
                alt=""
                width={150}
                height={150}
              />
            </div>
            <div className="bg-[#F5F5F5] w-full h-28 flex items-center justify-center rounded-xl">
              <Image
                src={`/${product.image}`}
                alt=""
                width={150}
                height={150}
              />
            </div>
            <div className="bg-[#F5F5F5] w-full h-28 flex items-center justify-center rounded-xl">
              <Image
                src={`/${product.image}`}
                alt=""
                width={150}
                height={150}
              />
            </div>
            <div className="bg-[#F5F5F5] w-full h-28 flex items-center justify-center rounded-xl">
              <Image
                src={`/${product.image}`}
                alt=""
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="bg-[#F5F5F5] lg:w-full lg:h-[490px] flex items-center justify-center rounded-xl">
            <Image src={`/${product.image}`} alt="" width={400} height={350} />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 h-full">
          <h1 className="text-xl lg:text-4xl font-bold tracking-wider">
            {product.title}
          </h1>
          <h2 className="text-primary text-xl lg:text-4xl font-bold tracking-wider">{`${product.price}.00 USD`}</h2>
          <p className="text-MyGray text-sm">{product.description}</p>
          <div className="flex flex-col lg:flex-row lg:py-7 gap-4 ">
            <div className="w-full lg:w-auto flex justify-center items-center gap-4">
              <div className="flex justify-center items-center  w-1/2 lg:w-auto">
                <div className="border-[1px] border-MyTextLiteGray text-4xl  w-32 lg:w-20 h-14 flex items-center justify-center rounded-s-xl cursor-pointer">
                  -
                </div>
                <div className=" w-full lg:w-18 h-14 bg-slate-100 flex items-center justify-center text-3xl font-bold">
                  2
                </div>
                <div className="border-[1px] border-MyTextLiteGray text-4xl   w-32 lg:w-20 text-primary h-14 flex items-center justify-center rounded-e-xl cursor-pointer">
                  +
                </div>
              </div>
              <div className="w-14 h-14 p-3 rounded-xl border-[1px] border-MyTextLiteGray text-MyGray cursor-pointer">
                <Icons name="heart" />
              </div>
            </div>
            <div className="flex  flex-1">
              <div className="bg-primary flex-1 text-myWhite rounded-lg h-14 flex items-center justify-center cursor-pointer">
                Add to cart
              </div>
            </div>
          </div>
          <div className="w-full border-[1px] flex flex-col border-MyTextLiteGray rounded-lg py-2">
            <div className="flex gap-5 items-center p-4 pb-6 border-b-[1px] border-slate-100">
              <div className="w-8 h-8 text-primary">
                <Icons name="car" />
              </div>
              <div>
                <h1 className="font-bold">Free Delivery</h1>
                <p className="underline text-sm text-MyGray">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center p-4">
              <div className="w-8 h-8 text-primary">
                <Icons name="car" />
              </div>
              <div className="">
                <h1 className="font-bold">Return Delivery</h1>
                <p className="text-sm text-MyGray">
                  Free 30 Days Delivery Returns.
                  <Link className="inline underline" href="/">
                    Details
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-10">
        <div className="mb-10 flex items-center gap-5">
          <div className="w-5 h-12 bg-primary rounded-md"></div>
          <h1 className="text-lg text-primary font-semibold">Related Item</h1>
        </div>
        <div className="w-full flex justify-center lg:justify-between  items-center flex-wrap gap-14">
          <Link
            href={`/products`}
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
          <Link
            href={`/products`}
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
          <Link
            href={`/products`}
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
          <Link
            href={`/products`}
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
        </div>
      </div>
    </div>
  );
}
