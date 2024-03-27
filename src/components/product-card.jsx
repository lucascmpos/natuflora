import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs bg-[#e1e3de] justify-center items-center rounded overflow-hidden shadow-lg">
      <div className="relative w-full" style={{ paddingBottom: "100%" }}>
        <img
          className="absolute h-64 w-full object-cover p-4"
          src={product.imageSrc}
          alt={product.name}
        />
      </div>

      <div className="px-6 py-1">
        <div className="font-bold text-xl mb-2">{product.name}</div>

        <p className="text-gray-700 text-base">{product.description}</p>

        <p className="text-gray-700 text-base mt-2">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
