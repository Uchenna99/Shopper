
interface Props {
  onAdd: ()=>void;
}

const ProductCardButton = ({ onAdd }:Props) => {
  return (
    <button className="border-none outline outline-black-text text-nowrap text-sm font-monts-medium rounded-4xl h-10 w-fit mt-1 
        cursor-pointer hover:bg-gray-800 hover:outline-transparent transition-all duration-300 hover:text-white px-5
        active:bg-gray-800 active:outline-transparent active:text-white z-10"
        onClick={onAdd}>

        Add to Cart
    </button>
  )
}

export default ProductCardButton;