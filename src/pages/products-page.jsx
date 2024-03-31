import ProductCard from "../components/product-card";

import Rosas from "../assets/rosas.jpg";
import Girassol from "../assets/girassol.jpg";
import Lirio from "../assets/lirios.jpg";
import Orquidea from "../assets/orquidea.jpg";
import Tulipa from "../assets/tulipa.png";
import Margarida from "../assets/margarida.png";
import Violeta from "../assets/violeta.png";
import Camelia from "../assets/camelia.png";
import Cravo from "../assets/cravo.png";
import Hortensia from "../assets/hortensia.png";
import Dalia from "../assets/dalia.png";
import Iris from "../assets/iris.jpg";

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
    {
      id: 5,
      name: "Tulipa",
      description: "Uma tulipa vermelha vibrante.",
      price: "R$ 12,00",
      imageSrc: Tulipa,
    },
    {
      id: 6,
      name: "Margarida",
      description: "Uma margarida branca e amarela.",
      price: "R$ 8,00",
      imageSrc: Margarida,
    },
    {
      id: 7,
      name: "Violeta",
      description: "Uma violeta roxa delicada.",
      price: "R$ 14,00",
      imageSrc: Violeta,
    },
    {
      id: 8,
      name: "Camélia",
      description: "Uma camélia rosa elegante.",
      price: "R$ 16,00",
      imageSrc: Camelia,
    },
    {
      id: 9,
      name: "Cravo",
      description: "Um cravo vermelho perfumado.",
      price: "R$ 9,00",
      imageSrc: Cravo,
    },
    {
      id: 10,
      name: "Hortênsia",
      description: "Uma hortênsia azul encantadora.",
      price: "R$ 22,00",
      imageSrc: Hortensia,
    },
    {
      id: 11,
      name: "Dália",
      description: "Uma dália colorida e exuberante.",
      price: "R$ 25,00",
      imageSrc: Dalia,
    },
    {
      id: 12,
      name: "Íris",
      description: "Uma íris violeta magnífica.",
      price: "R$ 21,00",
      imageSrc: Iris,
    },
  ];

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col p-1 gap-2 justify-center items-center">
      <h1 className="text-2xl mb-10 font-bold">PRODUTOS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-x-3 md:gap-y-5 gap-x-1 gap-y-3 mb-10">
        {products.map((product) => (
          <Link
            onClick={handleClick}
            className="flex "
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
