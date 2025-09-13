import ProductCard from "./ProductCard";


const DealsOfDay = () => {
  return (
    <>
        <div className="w-full flex justify-center">
            <div className="w-[1300px] max-w-full px-4 sm:px-5 py-20 flex flex-col gap-7">

                <h1 className="text-black-text text-2xl sm:text-3xl font-merienda-bold">
                    Best deals of the day
                </h1>


                <div className="w-full flex overflow-x-scroll">
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 row-auto gap-3 sm:gap-6">
                        
                        <ProductCard/>

                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default DealsOfDay;