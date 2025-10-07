
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
            cursor-not-allowed transition-all duration-200 text-white px-5 bg-orange-500">

            Adding...
        </button>
        :
        <button className="border-none outline outline-orange-400 text-nowrap text-sm font-monts-medium rounded-4xl h-10 w-32 mt-1 
            cursor-pointer hover:bg-orange-500 hover:outline-transparent transition-all duration-200 hover:text-white px-5
            active:bg-orange-500 active:outline-transparent active:text-white z-10 active:scale-95 text-orange-400"
            onClick={onAdd}>

            Add to Cart
        </button>
      }
    </>
  )
}

export default ProductCardButton;