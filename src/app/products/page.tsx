import Products from "@/components/Products";
import React, { Suspense } from "react";

const ProductsPage = () => {
  // let categName = "All"
  return (
    <div className="container mx-auto px-5">
      <Suspense fallback={<>Loading...</>}>
        <Products />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
