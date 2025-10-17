import { useAppContext } from "../../hooks/AppContext";
import HeroButton from "../buttons/HeroButton";
import CardGrid from "../CardGrid";
import CardsSlide from "../CardsSlide";
import NavigationBar from "../navbar/NavigationBar";
import SortSelector from "../SortSelector";
import { motion } from "framer-motion";
import Footer from "../Footer";
import { useScreenWidth } from "../../hooks/WidthQuery";
import { useEffect, useState } from "react";
import type { AxiosResponse } from "axios";
import { fetchWithRetry } from "../../utils/FetchWithRetry";
import { HOST } from "../../utils/Host";
import type { DB_Product } from "../../utils/Types";
import { toast } from "sonner";
import LoadingGrid from "../LoadingGrid";
import { getRandomItems } from "../../utils/UtilityFunctions";
import LoadingHero from "../LoadingHero";



const MensCategory = () => {
    const { allProducts} = useAppContext();
    const slideCards = getRandomItems(allProducts, 12);
    const smallWidth = useScreenWidth(450);
    const [products, setProducts] = useState<DB_Product[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isFetching, setIsFetching] = useState(true);
    const isReady = !isLoading || !isFetching;

    useEffect(()=>{
        const fetchProducts = async()=>{
            try {
                const response: AxiosResponse = await fetchWithRetry(
                    {
                    method: "GET",
                    url: `${HOST}/api/v1/products/categories/men`,
                    },
                    5, // retries
                    2000 // delay
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
            <div className="w-full h-[300px] min-h-[300px] flex justify-center">
              <div className="w-[1300px] h-full max-w-full bg-orange-200 rounded-xs flex items-center gap-[200px] px-3 xs:px-5 md:px-20 
                relative overflow-hidden">

                <motion.div className="flex flex-col gap-5 z-10"
                  initial={{opacity:0, x:60, y:200}} animate={{opacity:1, x:0, y:0}} transition={{duration:0.4, ease:'easeOut'}}>
                  <h1 className="text-black-text text-3xl sm:text-4xl lg:text-5xl font-merienda-bold leading-normal">
                    Explore our Stellar <br /> Men's {smallWidth && <br/>} Collection
                  </h1>

                  <HeroButton 
                    title="Explore"
                    whenClicked={()=> window.scrollTo({top:310, behavior:'smooth'})}
                  />
                </motion.div>

                <motion.img
                  initial={{opacity:0, x:60, y:200}} animate={{opacity:1, x:0, y:0, rotateY:180}} 
                  transition={{duration:0.4, delay:0.2, ease:'easeOut'}} 
                  onLoad={()=> setIsLoading(false)}
                  src="https://res.cloudinary.com/df6xz7bqp/image/upload/v1758235659/Adobe_Express_-_file_2_-min_gvfg95.png" 
                  alt="young man" 
                  className="w-[400px] absolute top-15 sm:-top-3 -right-15 sm:right-0 lg:right-1/6"
                />

                {/* <div className="absolute inset-0 max-sm:bg-white/30"></div> */}

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

export default MensCategory;