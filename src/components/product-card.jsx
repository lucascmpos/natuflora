import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-48 h-72 bg-[#38211c] justify-center items-center rounded-lg border-[#4d3222] border-2 overflow-hidden hover:bg-[#58352d] cursor-pointer transition-all duration-300">
      <div className="relative w-full h-48" style={{ paddingBottom: "100%" }}>
        <img
          className="absolute h-full w-full object-cover p-2"
          src={product.imageSrc}
          alt={product.name}
        />
      </div>

      <div className="px-4 py-1 flex flex-col justify-center items-center">
        <div className="text-[#e1e3de] font-bold text-sm mb-1">
          {product.name}
        </div>

        <p className="text-gray-200 text-nowrap text-sm">
          {product.description}
        </p>

        <p className="text-green-500 text-md font-semibold mt-1">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
