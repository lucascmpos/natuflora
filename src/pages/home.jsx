import Flower1 from "../assets/flower1.png";
import Womans from "../assets/womans.png";
import BlurFlower from "../assets/about.jpg";
import BlurFlower2 from "../assets/instagram.png";
import FlowerSvg from "../assets/flowersvg.svg";

import Rosas from "/src/assets/rosas.jpg";
import Girassol from "/src/assets/girassol.jpg";
import Lirio from "/src/assets/lirios.jpg";
import Orquidea from "/src/assets/orquidea.jpg";

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
      name: "Buquê com 3 rosas vermelhas",
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
    <div className="flex flex-col ">
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
          <Button style="bg-green-600 hover:bg-green-700 text-[#e1e3de] font-bold w-fit px-2 text-2xl">
            ENVIE SEU PRESENTE
          </Button>
        </div>
        <img className="w-auto " src={Flower1} alt="Flower1" />
      </div>
      <div className="relative z-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${BlurFlower})` }}
        />
        <div className="relative  flex flex-row justify-center items-center py-32 gap-20 ">
          <h3 className="text-[#e1e3de] group text-3xl flex flex-col justify-center items-center gap-2">
            <BsShopWindow
              className="transition-all duration-200 group-hover:scale-110"
              size={70}
            />
            8 anos de história
          </h3>
          <h3 className="text-[#e1e3de] group text-3xl flex flex-col justify-center items-center gap-2">
            <MdOutlineWorkspacePremium
              className="transition-all duration-200 group-hover:scale-110"
              size={70}
            />
            A melhor floricultura mundial
          </h3>
          <h3 className="text-[#e1e3de] group text-3xl flex flex-col justify-center items-center gap-2">
            <RiEmotionHappyFill
              className="transition-all duration-200 group-hover:scale-110"
              size={70}
            />
            Atendimento personalizado
          </h3>
          <h3 className="text-[#e1e3de] group text-3xl flex flex-col justify-center items-center gap-2">
            <IoFlower
              className="transition-all duration-200 group-hover:scale-110"
              size={70}
            />
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
            <Button style="bg-green-600 hover:bg-green-700 text-[#e1e3de] font-bold w-fit px-2 text-2xl">
              LER MAIS
            </Button>
          </Link>
        </div>
      </div>
      <div className="bg-[#331e19] py-20 flex flex-col w-full gap-16 justify-center items-center">
        <h1 className="text-5xl font-semibold text-[#e1e3de]">
          Produtos em destaque!
        </h1>
        <h2 className="text-gray-300 text-2xl text-center">
          Desvende nossos produtos e encontre a flor perfeita pro seu momento.
          <br />
          Aqui estão as nossas flores mais amadas por vocês!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Button style="bg-[#e1e3de] hover:bg-green-700 text-black hover:text-[#e1e3de] font-bold w-fit px-2 text-2xl">
          VER TODOS PRODUTOS
        </Button>
      </div>
      <div className="relative z-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${BlurFlower2})` }}
        />
        <div className="relative flex flex-col justify-center items-center py-32  ">
          <h1 className="text-5xl font-semibold text-[#e1e3de]">
            Fique por dentro das novidades
          </h1>
          <h2 className="text-2xl text-gray-200">
            Nos siga no <span className="text-green-300">instagram</span>!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
