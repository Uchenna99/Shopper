import products from "../assets/Data/Items.json";
import ProductCard from "./ProductCard";


const CardGrid = () => {
  return (
    <>
        <div className="w-full flex justify-center">
            <div className="w-[1300px] max-w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
                gap-x-5 gap-y-10 py-10 px-2">
                {
                    products.map((item, index)=>(
                        <ProductCard
                            key={index}
                            name={item.name}
                            image={item.image}
                            description={item.description}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default CardGrid;