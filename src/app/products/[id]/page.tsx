import Image from "next/image";

async function getData(id: any) {
  const res = await fetch(
    "https://products-api-m9ho.onrender.com/products/" + id
  );
  return res.json();
}

export default async function SingleProductPage({ params }: any) {
  const product = await getData(params.id);
  return (
    <div className="container mx-auto p-5 w-full ">
      <div>
        <Image src={`/${product.image}`} alt="" width={150} height={150} />
      </div>
      <div>{product.title}</div>
    </div>
  );
}
