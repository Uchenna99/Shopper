
interface Props {
  onAdd: ()=>void;
  adding: boolean;
}

const ProductCardButton = ({ onAdd, adding }:Props) => {
  return (
    <>
      {
        adding?
        <button className="border-none outline outline-transparent text-nowrap text-sm font-monts-medium rounded-4xl h-10 w-32 mt-1 
            cursor-not-allowed transition-all duration-200 text-white px-5 bg-gray-800"
            onClick={onAdd}>

            Adding...
        </button>
        :
        <button className="border-none outline outline-black-text text-nowrap text-sm font-monts-medium rounded-4xl h-10 w-32 mt-1 
            cursor-pointer hover:bg-gray-800 hover:outline-transparent transition-all duration-200 hover:text-white px-5
            active:bg-gray-800 active:outline-transparent active:text-white z-10 active:scale-95"
            onClick={onAdd}>

            Add to Cart
        </button>
      }
    </>
  )
}

export default ProductCardButton;