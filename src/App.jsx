import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

const ProductsPage = React.lazy(() => import("./pages/products-page"));
const ProductItem = React.lazy(() => import("./pages/product-item"));
const Header = React.lazy(() => import("./components/header"));
const Home = React.lazy(() => import("./pages/home"));
const About = React.lazy(() => import("./pages/about"));
const Footer = React.lazy(() => import("./components/footer"));

import Rosas from "./assets/rosas.jpg";
import Girassol from "./assets/girassol.jpg";
import Lirio from "./assets/lirios.jpg";
import Orquidea from "./assets/orquidea.jpg";
import Tulipa from "./assets/tulipa.png";
import Margarida from "./assets/margarida.png";
import Violeta from "./assets/violeta.png";
import Camelia from "./assets/camelia.png";
import Cravo from "./assets/cravo.png";
import Hortensia from "./assets/hortensia.png";
import Dalia from "./assets/dalia.png";
import Iris from "./assets/iris.jpg";
import LoadingIndicator from "./components/loading-indicator";

function App() {
  const products = [
    {
      id: 1,
      name: "Rosa vermelha",
      description:
        "Uma bela rosa vermelha, perfeita para expressar amor e paixão.",
      price: "R$ 15,00",
      imageSrc: Rosas,
    },
    {
      id: 2,
      name: "Girassol",
      description:
        "Um belo girassol amarelo, que traz alegria e positividade onde quer que esteja.",
      price: "R$ 10,00",
      imageSrc: Girassol,
    },
    {
      id: 3,
      name: "Lírio",
      description:
        "Um belo lírio branco, símbolo de pureza e tranquilidade, perfeito para decorar ambientes calmos.",
      price: "R$ 18,00",
      imageSrc: Lirio,
    },
    {
      id: 4,
      name: "Orquídea",
      description:
        "Uma bela orquídea rosa, delicada e sofisticada, ideal para presentear em ocasiões especiais.",
      price: "R$ 20,00",
      imageSrc: Orquidea,
    },
    {
      id: 5,
      name: "Tulipa",
      description:
        "Uma tulipa vermelha vibrante, que simboliza amor verdadeiro e paixão intensa.",
      price: "R$ 12,00",
      imageSrc: Tulipa,
    },
    {
      id: 6,
      name: "Margarida",
      description:
        "Uma margarida branca e amarela, que representa inocência e pureza, ideal para presentear entes queridos.",
      price: "R$ 8,00",
      imageSrc: Margarida,
    },
    {
      id: 7,
      name: "Violeta",
      description:
        "Uma violeta roxa delicada, que transmite delicadeza e admiração, perfeita para expressar sentimentos sutis.",
      price: "R$ 14,00",
      imageSrc: Violeta,
    },
    {
      id: 8,
      name: "Camélia",
      description:
        "Uma camélia rosa elegante, símbolo de reconhecimento e gratidão, ideal para presentear pessoas especiais.",
      price: "R$ 16,00",
      imageSrc: Camelia,
    },
    {
      id: 9,
      name: "Cravo",
      description:
        "Um cravo vermelho perfumado, que representa amor e admiração, perfeito para celebrar momentos felizes.",
      price: "R$ 9,00",
      imageSrc: Cravo,
    },
    {
      id: 10,
      name: "Hortênsia",
      description:
        "Uma hortênsia azul encantadora, que simboliza gratidão e apreço, perfeita para presentear pessoas queridas.",
      price: "R$ 22,00",
      imageSrc: Hortensia,
    },
    {
      id: 11,
      name: "Dália",
      description:
        "Uma dália colorida e exuberante, que representa beleza e elegância, ideal para decoração em eventos especiais.",
      price: "R$ 25,00",
      imageSrc: Dalia,
    },
    {
      id: 12,
      name: "Íris",
      description:
        "Uma íris violeta magnífica, que simboliza fé, esperança e sabedoria, perfeita para presentear em momentos de reflexão.",
      price: "R$ 21,00",
      imageSrc: Iris,
    },
  ];

  return (
    <div>
      <Suspense fallback={<LoadingIndicator />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
          {products.map((product) => (
            <Route
              key={product.id}
              path={`/products/${product.id}`}
              element={<ProductItem product={product} />}
            />
          ))}
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
