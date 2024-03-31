import ProductCard from "../components/product-card";

import Rosas from "../assets/rosas.jpg";
import Girassol from "../assets/girassol.jpg";
import Lirio from "../assets/lirios.jpg";
import Orquidea from "../assets/orquidea.jpg";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const products = [
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
  return (
    <div className="flex flex-col p-2 gap-2 justify-center items-center">
      <h1 className="text-2xl mb-10 font-bold">PRODUTOS</h1>
      <div className="grid grid-cols-2 gap-x-3 gap-y-3">
        {products.map((product) => (
          <Link
            className="flex"
            key={product.id}
            to={`/products/${product.id}`}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
