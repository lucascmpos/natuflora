import Button from "../components/button";
import ProductCard from "../components/product-card";

import Rosas from "../assets/rosas.jpg";
import Girassol from "../assets/girassol.jpg";
import Lirio from "../assets/lirios.jpg";
import Orquidea from "../assets/orquidea.jpg";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const topProducts = [
    {
      id: 1,
      name: "Rosa vermelha",
      description: "Uma linda rosa vermelha.",
      price: "R$ 15,00",
      imageSrc: Rosas,
    },
    {
      id: 2,
      name: "Girassol",
      description: "Um belo girassol amarelo.",
      price: "R$ 10,00",
      imageSrc: Girassol,
    },
    {
      id: 3,
      name: "Lírio",
      description: "Um belo lírio branco.",
      price: "R$ 18,00",
      imageSrc: Lirio,
    },
    {
      id: 4,
      name: "Orquídea",
      description: "Uma bela orquídea rosa.",
      price: "R$ 20,00",
      imageSrc: Orquidea,
    },
  ];

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col justify-center  items-center mb-10">
      <div className="flex flex-col gap-5 mx-3 lg:flex-row h-fit p-5 w-auto bg-white rounded-lg">
        <div className="flex justify-center items-center">
          <img
            className=" w-full h-auto max-h-96 max-w object-contain rounded-lg"
            src={product.imageSrc}
            alt={product.name}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl lg: text-5xl font-semibold">
            {product.name}
          </h1>
          <h2 className="text-lg lg:text-2xl mt-2">{product.description}</h2>
          <div className="flex flex-col lg:mt-20">
            <h1 className="text-2xl lg:text-4xl font-bold text-green-600 mt-5">
              {product.price}
            </h1>
            <h2 className="text-xl text-gray-600">No PIX ou Cartão</h2>
            <Button style="bg-green-500 hover:bg-green-400 w-auto text-2xl text-white font-semibold">
              ENCOMENDAR
            </Button>
          </div>
        </div>
      </div>
      <h1 className="text-2xl mt-10 font-bold">PRODUTOS RELACIONADOS</h1>
      <div className="flex w-full mt-2 [&::-webkit-scrollbar]:hidden lg:justify-center lg: gap-3 lg:gap-10 overflow-x-auto ">
        {topProducts.map((product) => (
          <div key={product.id} className="px-2 lg:w-auto lg:max-w-auto">
            <Link
              onClick={handleClick}
              key={product.id}
              to={`/products/${product.id}`}
            >
              <ProductCard product={product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItem;
