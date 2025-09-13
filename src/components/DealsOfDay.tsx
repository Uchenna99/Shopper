import ProductCard from "./ProductCard";
import products from "../assets/Data/Items.json";
import { getRandomItems } from "../utils/UtilityFunctions";


const DealsOfDay = () => {
    const deals = getRandomItems(products, 6);

  return (
    <>
        <div className="w-full flex justify-center">
            <div className="w-[1300px] max-w-full px-4 sm:px-5 py-20 flex flex-col gap-7">

                <h1 className="text-black-text text-2xl sm:text-3xl font-merienda-bold">
                    Best deals of the day
                </h1>


                <div className="w-full flex overflow-x-scroll">
                    <div className="w-full min-w-fit grid grid-cols-[repeat(6,300px)] gap-3 sm:gap-6 pb-8">
                        {
                            deals.map((product, index)=>(
                                <ProductCard 
                                    key={index}
                                    name={product.name}
                                    description={product.description}
                                    price={product.price}
                                    image={product.image}
                                    rating={product.rating}
                                />
                            ))
                        }

                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default DealsOfDay;