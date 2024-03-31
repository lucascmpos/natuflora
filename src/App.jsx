import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/products-page";
import ProductItem from "./pages/product-item";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";

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

import Footer from "./components/footer";

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
    </div>
  );
}

export default App;
