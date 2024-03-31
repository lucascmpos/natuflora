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
import Footer from "./components/footer";

function App() {
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
