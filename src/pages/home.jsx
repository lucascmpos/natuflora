import Flower1 from "../assets/flower1.png";
import Womans from "../assets/womans.png";
import BlurFlower from "../assets/about.jpg";
import BlurFlower2 from "../assets/instagram.png";
import FlowerSvg from "../assets/flowersvg.svg";
import Flower2Svg from "../assets/flower2.svg";

import Rosas from "../assets/rosas.jpg";
import Girassol from "../assets/girassol.jpg";
import Lirio from "../assets/lirios.jpg";
import Orquidea from "../assets/orquidea.jpg";

import Post1 from "../assets/post1.png";
import Post2 from "../assets/post2.png";
import Post3 from "../assets/post3.png";

import PostMobile1 from "../assets/post1mobile.jpg";
import PostMobile2 from "../assets/post2mobile.jpg";
import PostMobile3 from "../assets/post3mobile.jpg";

import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { RiEmotionHappyFill } from "react-icons/ri";
import { IoFlower } from "react-icons/io5";
import { BsShopWindow } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../components/button";
import ProductCard from "../components/product-card";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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

  const posts =
    window.innerWidth < 500
      ? [PostMobile1, PostMobile2, PostMobile3]
      : [Post1, Post2, Post3];

  return (
    <div className="flex flex-col">
      <img
        src={FlowerSvg}
        alt="Flower background"
        className="absolute md:top-0 md:left-0 z-0 opacity-15 w-full"
      />
      <div className="flex flex-col md:flex-row mt-16 gap-10 py-32 items-center justify-center">
        <div className="flex flex-col justify-center items-center text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-7xl text-green-800">
            As flores que você mais gosta,
            <br /> da melhor forma!
          </h1>
          <h2 className="font-semibold text-xl md:text-3xl text-[#58352d]">
            Presenteie quem você ama!
          </h2>
          <Button
            className="mt-4 md:mt-0"
            style="bg-green-600 hover:bg-green-700 text-[#e1e3de] font-bold w-fit px-2 text-lg md:text-2xl"
          >
            ENVIE SEU PRESENTE
          </Button>
        </div>
        <img className="w-auto md:w-2/4" src={Flower1} alt="Flower1" />
      </div>
      <div className="relative z-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${BlurFlower})` }}
        />
        <div className="relative  flex flex-col md:flex-row justify-center items-center py-32 gap-20 ">
          <h3 className="text-[#e1e3de] group text-xl md:text-3xl flex flex-col justify-center items-center gap-2">
            <BsShopWindow
              className="transition-all duration-200 group-hover:scale-110"
              size={40}
            />
            8 anos de história
          </h3>
          <h3 className="text-[#e1e3de] group text-xl md:text-3xl flex flex-col justify-center items-center gap-2">
            <MdOutlineWorkspacePremium
              className="transition-all duration-200 group-hover:scale-110"
              size={40}
            />
            A melhor floricultura mundial
          </h3>
          <h3 className="text-[#e1e3de] group text-xl md:text-3xl flex flex-col justify-center items-center gap-2">
            <RiEmotionHappyFill
              className="transition-all duration-200 group-hover:scale-110"
              size={40}
            />
            Atendimento personalizado
          </h3>
          <h3 className="text-[#e1e3de] group text-xl md:text-3xl flex flex-col justify-center items-center gap-2">
            <IoFlower
              className="transition-all duration-200 group-hover:scale-110"
              size={40}
            />
            Mais de 30 tipos de flores
          </h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-20 ">
        <img className="w-full md:w-2/4" src={Womans} alt="Womans" />
        <div className="flex flex-col gap-2 w-full md:w-1/3 justify-center">
          <h1 className="text-[#58352d] text-3xl md:text-6xl font-semibold">
            A nossa história
          </h1>
          <h2 className="text-xl md:text-2xl mb-5">
            Conheça sua floricultura preferida
          </h2>
          <p className="text-lg md:text-xl text-left text-gray-700">
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
            <Button style="bg-green-600 hover:bg-green-700 text-[#e1e3de] font-bold w-fit px-2 text-lg md:text-2xl">
              LER MAIS
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative z-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${BlurFlower2})` }}
        />
        <div className="relative flex flex-col justify-center items-center py-20 md:py-32 gap-10 ">
          <h1 className="text-5xl md:text-5xl font-semibold text-[#e1e3de]">
            Produtos em destaque!
          </h1>
          <h2 className="text-lg md:text-2xl text-gray-200 text-center">
            Desvende nossos produtos e encontre a flor perfeita pro seu momento.
            <br />
            Aqui estão as nossas flores mais amadas por vocês!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Button style="bg-green-600 hover:bg-green-700 text-[#e1e3de] font-bold w-fit px-2 text-lg md:text-2xl">
            VER TODOS PRODUTOS
          </Button>
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center py-20 md:py-32 gap-10 ">
        <h1 className="text-xl md:text-3xl font-semibold text-[#58352d]">
          Fique por dentro das novidades
        </h1>
        <h2 className="text-lg md:text-2xl text-gray-700">
          Nos siga no{" "}
          <a
            href="https://www.instagram.com/natu.floraflori/"
            target="_blank"
            className="text-pink-800 font-semibold"
          >
            instagram
          </a>
          ! Postamos tudo oque acontece por lá!
        </h2>
        <Carousel className="w-2/3" showStatus={false} showThumbs={false}>
          {posts.map((post, index) => (
            <div key={index}>
              <img src={post} alt={`Post ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="bg-[#58352d] flex flex-col justify-center items-center py-20">
        <h1 className="text-xl md:text-3xl font-semibold text-[#e1e3de] mb-10">
          Onde estamos
        </h1>
        <div className="flex flex-col md:flex-row gap-12 w-full md:w-auto">
          <div className="flex flex-col w-full md:w-1/2">
            <h2 className="text-lg md:text-xl font-semibold text-[#e1e3de]">
              Entre em contato
            </h2>
            <form className="gap-2">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full py-2 px-4 mb-4 rounded-md bg-[#e1e3de] text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                placeholder="Seu email"
                className="w-full py-2 px-4 mb-4 rounded-md bg-[#e1e3de] text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <textarea
                placeholder="Digite sua mensagem..."
                className="w-full py-2 px-4 mb-4 rounded-md bg-[#e1e3de] text-gray-900 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
              <Button style="bg-green-600 hover:bg-green-700 text-[#e1e3de] font-bold w-full px-2 text-lg md:text-2xl">
                ENVIAR EMAIL
              </Button>
            </form>
          </div>
          <div className="flex flex-col gap-10 w-full md:w-1/2">
            <div className="text-lg md:text-xl flex flex-row gap-2 items-center text-[#e1e3de] mt-4">
              <IoLocationSharp size={40} />
              <div className="flex flex-col">
                <strong>Endereço:</strong>Rua das Flores, 123, Jardim Botânico,
                Cidade das Flores, Brasil
              </div>
            </div>
            <div className="text-lg md:text-xl flex flex-row gap-2 items-center text-[#e1e3de] mt-4">
              <MdEmail size={40} />
              <div className="flex flex-col">
                <strong>Email:</strong>contato@natuflora.com
              </div>
            </div>
            <div className="text-lg md:text-xl flex flex-row gap-2 items-center text-[#e1e3de] mt-4">
              <FaPhone size={40} />
              <div className="flex flex-col">
                <strong>Telefone:</strong>+55 1234-5678
              </div>
            </div>
            <div className="text-lg md:text-xl flex flex-row gap-2 items-center text-[#e1e3de] mt-4">
              <FaWhatsapp size={40} />
              <div className="flex flex-col">
                <strong>Whats App</strong>+55 98765-4321
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${BlurFlower2})` }}
        />
      </div>
    </div>
  );
};

export default Home;
