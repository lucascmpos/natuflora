import Header from "./components/header";
import About from "./pages/about";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/products";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
