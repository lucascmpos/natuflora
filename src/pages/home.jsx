import Flower1 from "../assets/flower1.png";
import BlurFlower from "../assets/about.jpg";
import { MdOutlineWorkspacePremium, MdLocalShipping } from "react-icons/md";
import { RiEmotionHappyFill } from "react-icons/ri";
import { IoFlower } from "react-icons/io5";
import { BsShopWindow } from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex flex-col gap-52">
      <div className="flex flex-row mt-16 gap-32 items-center justify-center">
        <div className="flex flex-col">
          <h1 className="font-bold text-7xl w-auto text-green-800">
            As flores que você mais gosta,
            <br /> da melhor forma!
          </h1>
          <h2 className="font-semibold text-3xl text-[#58352d]">
            Presenteie quem você ama
          </h2>
          <button className="bg-green-950 w-52 h-16 mt-5 text-xl text-[#e1e3de] rounded-md">
            Clique aqui
          </button>
        </div>
        <img className="w-auto " src={Flower1} />
      </div>
      <div className="relative z-10">
        <img className="absolute top-0 left-0" src={BlurFlower} />
        <div className="relative flex flex-row justify-center items-center mt-64 gap-20 ">
          <h3 className="text-[#e1e3de] text-2xl flex flex-col justify-center items-center gap-2">
            <BsShopWindow size={70} />8 anos de história
          </h3>
          <h3 className="text-[#e1e3de] text-2xl flex flex-col justify-center items-center gap-2">
            <MdOutlineWorkspacePremium size={70} />A melhor floricultura mundial
          </h3>
          <h3 className="text-[#e1e3de] text-2xl flex flex-col justify-center items-center gap-2">
            <RiEmotionHappyFill size={70} />
            Atendimento personalizado
          </h3>
          <h3 className="text-[#e1e3de] text-2xl flex flex-col justify-center items-center gap-2">
            <IoFlower size={70} />
            Mais de 30 tipos de flores
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
