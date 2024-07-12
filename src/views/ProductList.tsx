import React from 'react';
import Image from "next/image";
import image1 from "/public/image1.webp";
import ProductCart from "@/components/ProductCart";

const ProductList = () => {
  return (
    
    <div className="flex justify-evenly mt-16">
      <ProductCart />
    </div>
  );
};

export default ProductList;
