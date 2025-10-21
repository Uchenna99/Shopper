import HeroButton from "../buttons/HeroButton";
import CardGrid from "../CardGrid";
import CardsSlide from "../CardsSlide";
import NavigationBar from "../navbar/NavigationBar";
import SortSelector from "../SortSelector";
import { motion } from "framer-motion";
import Footer from "../Footer";
import { useScreenWidth } from "../../hooks/WidthQuery";
import LoadingGrid from "../LoadingGrid";
import { HOST } from "../../utils/Host";
import { useEffect, useState } from "react";
import type { DB_Product } from "../../utils/Types";
import type { AxiosResponse } from "axios";
import { fetchWithRetry } from "../../utils/FetchWithRetry";
import { toast } from "sonner";
import { useAppContext } from "../../hooks/AppContext";
import { getRandomItems } from "../../utils/UtilityFunctions";
import LoadingHero from "../LoadingHero";


const AccessoriesCategory = () => {
    const smallWidth = useScreenWidth(470);
    const [products, setProducts] = useState<DB_Product[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { allProducts} = useAppContext();
    const slideCards = getRandomItems(allProducts, 12);
    const [isFetching, setIsFetching] = useState(true);
    const isReady = !isLoading || !isFetching;

    useEffect(()=>{
        const fetchProducts = async()=>{
            try {
                const response: AxiosResponse = await fetchWithRetry(
                    {
                    method: "GET",
                    url: `${HOST}/api/v1/products/categories/accessories`,
                    },
                    5, 2000 // retries and delay
                );
                setProducts(response.data);
            } catch (error: any) {
                toast.error(error?.response?.data?.message || "Network error, please refresh page");
            } finally {
              setIsFetching(false);
            };
        };
        fetchProducts();
    },[]);

  return (
    <>
        <div className="w-full relative">

          <NavigationBar/>

          {
            !isReady?
            <LoadingHero />
            :
            <div className="w-full h-[300px] flex justify-center">
              <div className="w-[1300px] h-full max-w-full bg-orange-600 rounded-xs flex items-center gap-[200px] px-5 md:px-20 
                relative overflow-hidden">

                <motion.div className="flex flex-col gap-5 z-10"
                  initial={{opacity:0, x:60, y:200}} animate={{opacity:1, x:0, y:0}} transition={{duration:0.4, ease:'easeOut'}}>
                  <h1 className="text-black-text text-3xl sm:text-4xl lg:text-5xl font-merienda-bold leading-normal">
                    Explore our Stellar <br /> Accessories {smallWidth && <br/>} Collection
                  </h1>

                  <HeroButton 
                    title="Explore"
                    whenClicked={()=> window.scrollTo({top:320, behavior:'smooth'})}
                  />
                </motion.div>

                <motion.img
                  initial={{opacity:0, x:60, y:200}} animate={{opacity:1, x:0, y:0}} 
                  transition={{duration:0.4, delay:0.2, ease:'easeOut'}} 
                  onLoad={()=> setIsLoading(false)}
                  src="https://res.cloudinary.com/df6xz7bqp/image/upload/v1758408193/6421-removebg-preview-min_thkuvq.png" 
                  alt="young man" 
                  className="w-[300px] top-10 sm:top-0 absolute -right-5 sm:right-0 lg:right-1/7"
                />

              </div>
            </div>
          }


          <div className="w-full flex flex-col items-center py-10">

            <div className="w-[1300px] max-w-full flex items-center justify-end px-3">
              <SortSelector/>

            </div>

            {
              !isReady?
              <LoadingGrid/>
              :
              products && products.length >=1?
              <CardGrid
                products={products}
              />
              : 
              <p>No items found</p>
            }
          </div>


          <CardsSlide
            title="Popular this week"
            products={slideCards}
            customClass="slide1"
          />

          <Footer/>
            
        </div>
    </>
  )
}

export default AccessoriesCategory;