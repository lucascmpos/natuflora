import { Link } from "react-router-dom";
import Womans from "../assets/womans.png";
import Button from "../components/button";

const About = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col justify-center items-center lg:gap-10 px-4 lg:px-0 py-20 ">
      <h1 className="text-[#58352d] text-4xl mb-5 lg:text-6xl font-semibold">
        Um pouco de nós
      </h1>
      <img
        className="w-full lg:w-2/4 mb-5 lg:mb-0 "
        src={Womans}
        alt="Womans"
      />
      <div className="flex flex-col gap-2 w-full lg:w-1/3 justify-center items-center">
        <p className="text-lg lg:text-xl text-left text-gray-700">
          A Natu Flora surge com uma missão nobre e inspiradora: proporcionar
          momentos de profunda serenidade e conexão com a exuberância
          inigualável da natureza no dia a dia das pessoas. Para aqueles que
          encontram beleza na delicadeza das flores e apreciam a calma
          revigorante que elas oferecem, aliada à sensação acolhedora e
          reconfortante de um ambiente familiar, nossa floricultura se ergue
          como um verdadeiro santuário de tranquilidade. Hoje, a Natu Flora é
          aclamada não apenas por sua excelência e comprometimento
          irrepreensível, mas também por sua elegância distinta e dedicação
          meticulosa aos mínimos detalhes. Somos reconhecidos como um refúgio
          singular e revigorante, onde cada visitante é imerso em uma atmosfera
          única e inspiradora, repleta de arranjos exclusivos e um toque
          artístico que encanta os sentidos e desperta emoções profundas. Nossa
          devoção inabalável à natureza transcende o ordinário, transformando
          cada flor em uma verdadeira mensageira de emoções e sentimentos
          genuínos. Cada flor é selecionada com esmero e combinada com maestria,
          não apenas para exibir sua beleza visual inconfundível, mas também
          para transmitir significado e emoção de forma vívida e comovente,
          transformando cada visita à Natu Flora em uma jornada sensorial
          verdadeiramente inesquecível e enriquecedora para a alma.
        </p>
        <h1 className="text-2xl font-semibold">
          Estamos aqui para te oferecer o nosso melhor!
        </h1>
        <Link to="/">
          <Button
            onClick={handleClick}
            style="bg-green-500 w-fit text-xl px-2 font-bold text-white"
          >
            VOLTAR PARA O ÍNICIO
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
