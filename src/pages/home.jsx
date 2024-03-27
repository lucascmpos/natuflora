import Flower1 from "../assets/flower1.png";
import Womans from "../assets/womans.png";
import BlurFlower from "../assets/about.jpg";
import FlowerSvg from "../assets/flowersvg.svg";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { RiEmotionHappyFill } from "react-icons/ri";
import { IoFlower } from "react-icons/io5";
import { BsShopWindow } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../components/button";
import ProductCard from "../components/product-card";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Buque com 3 rosas vermelhas",
      description: "Uma linda rosa vermelha.",
      price: "R$ 10,00",
      imageSrc: "/src/assets/rosas.jpg",
    },
    {
      id: 2,
      name: "Girassol",
      description: "Um belo girassol amarelo.",
      price: "R$ 15,00",
      imageSrc: "/src/assets/girassol.jpg",
    },
    {
      id: 3,
      name: "Lírio",
      description: "Um belo lírio branco.",
      price: "R$ 18,00",
      imageSrc: "/src/assets/lirios.jpg",
    },
  ];
  return (
    <div className="flex flex-col gap-20">
      <img
        src={FlowerSvg}
        alt="Flower background"
        className="absolute top-50 z-0 opacity-15"
        style={{
          width: "90%",
          height: "100%",
          zIndex: -1,
          fill: "red",
        }}
      />
      <div className="flex flex-row mt-16 gap-32 py-20 items-center justify-center">
        <div className="flex flex-col">
          <h1 className="font-bold text-7xl w-auto text-green-800">
            As flores que você mais gosta,
            <br /> da melhor forma!
          </h1>
          <h2 className="font-semibold text-3xl text-[#58352d]">
            Presenteie quem você ama!
          </h2>
          <Button>Envie seu presente</Button>
        </div>
        <img className="w-auto " src={Flower1} alt="Flower1" />
      </div>
      <div className="relative z-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${BlurFlower})` }}
        />
        <div className="relative flex flex-row justify-center items-center py-32 gap-20 ">
          <h3 className="text-[#e1e3de] text-3xl flex flex-col justify-center items-center gap-2">
            <BsShopWindow size={70} />8 anos de história
          </h3>
          <h3 className="text-[#e1e3de] text-3xl flex flex-col justify-center items-center gap-2">
            <MdOutlineWorkspacePremium size={70} />A melhor floricultura mundial
          </h3>
          <h3 className="text-[#e1e3de] text-3xl flex flex-col justify-center items-center gap-2">
            <RiEmotionHappyFill size={70} />
            Atendimento personalizado
          </h3>
          <h3 className="text-[#e1e3de] text-3xl flex flex-col justify-center items-center gap-2">
            <IoFlower size={70} />
            Mais de 30 tipos de flores
          </h3>
        </div>
      </div>
      <div className="flex flex-row py-5 ">
        <img className="w-2/4" src={Womans} alt="Womans" />
        <div className="flex flex-col  gap-2 w-1/3 justify-center">
          <h1 className="text-[#58352d] text-6xl font-semibold">
            A nossa história
          </h1>
          <h2 className="text-2xl mb-5">Conheça sua floricultura preferida</h2>
          <p className="text-xl text-left text-gray-700">
            A Natu Flora floresceu com o propósito de oferecer momentos de
            beleza e conexão com a natureza no cotidiano das pessoas. Para os
            amantes de flores e da delicadeza que elas proporcionam, aliada ao
            aconchego de um ambiente acolhedor e familiar, nossa floricultura é
            o lugar perfeito. Hoje, a Natu Flora é reconhecida pela sua
            qualidade, charme e atenção aos detalhes, sendo um refúgio único,
            com uma atmosfera própria, arranjos exclusivos e um toque de arte em
            cada criação.
          </p>
          <Link to="/about" className="text-green-800 hover:underline">
            <Button>Ler mais</Button>
          </Link>
        </div>
      </div>
      <div className="bg-[#331e19] py-20 flex flex-col w-full gap-12 justify-center items-center">
        <h1 className="text-5xl font-semibold text-[#e1e3de]">
          Os nossos produtos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
