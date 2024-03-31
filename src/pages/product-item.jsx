import Button from "../components/button";

const ProductItem = ({ product }) => {
  return (
    <div className="flex justify-center mt-10 h-screen">
      <div className="flex flex-col lg:flex-row h-fit p-5 w-64 bg-white rounded-lg">
        <div className="">
          <img
            className="w-52 rounded-lg"
            src={product.imageSrc}
            alt={product.name}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <h2 className="text-lg">{product.description}</h2>
          <h1 className="text-xl font-bold text-green-600">{product.price}</h1>
          <Button style="bg-green-500 w-auto">ENCOMENDAR</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
