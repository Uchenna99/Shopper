
interface Props {
  onAdd: ()=>void;
  adding: boolean;
}

const ProductCardButton = ({ onAdd, adding }:Props) => {
  return (
    <>
      <button className={`border-none outline outline-orange-400 text-nowrap text-sm font-monts-medium rounded-4xl h-10 w-32 mt-1 
        cursor-pointer hover:bg-orange-500 hover:outline-transparent transition-all duration-200 hover:text-white px-5
        active:bg-orange-500 active:outline-transparent active:text-white z-10 active:scale-95 text-orange-400 
        ${adding && 'pointer-events-none cursor-not-allowed'}`}
        onClick={onAdd}>
        
        {adding? 'Adding' : 'Add to Cart'}
      </button>
    </>
  )
}

export default ProductCardButton;