import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs bg-[#38211c] justify-center items-center rounded-lg border-[#4d3222] border-2 overflow-hidden hover:bg-[#58352d] cursor-pointer transition-all duration-300">
      <div className="relative w-full" style={{ paddingBottom: "100%" }}>
        <img
          className="absolute h-64 w-full object-cover p-4"
          src={product.imageSrc}
          alt={product.name}
        />
      </div>

      <div className="px-6 py-2 flex flex-col justify-center items-center">
        <div className="text-[#e1e3de] font-bold text-xl mb-2">
          {product.name}
        </div>

        <p className="text-gray-200 text-base text-lg">{product.description}</p>

        <p className="text-green-500 text-base text-xl font-semibold mt-2">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
