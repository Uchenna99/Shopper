import HeroButton from "../buttons/HeroButton";
import CardGrid from "../CardGrid";
import CardsSlide from "../CardsSlide";
import NavigationBar from "../navbar/NavigationBar";
import SortSelector from "../SortSelector";
import { motion } from "framer-motion";
import products from "../../assets/Data/Items.json";
import Footer from "../Footer";
import { useScreenWidth } from "../../hooks/WidthQuery";


const ShoesCollection = () => {
    const popular = products.slice(0, 6);
    const smallWidth = useScreenWidth(470);

  return (
    <>
        <div className="w-full relative">

          <NavigationBar/>

          <div className="w-full h-[300px] flex justify-center">
            <div className="w-[1300px] h-full max-w-full bg-orange-500 rounded-xs flex items-center gap-[200px] px-5 md:px-20 
              relative overflow-hidden">

              <motion.div className="flex flex-col gap-5 z-10"
                initial={{opacity:0, x:60, y:200}} animate={{opacity:1, x:0, y:0}} transition={{duration:0.4, ease:'easeOut'}}>
                <h1 className="text-black-text text-3xl sm:text-4xl lg:text-5xl font-merienda-bold leading-normal">
                  Explore our Stellar <br /> Shoes {smallWidth && <br/>} Collection
                </h1>

                <HeroButton 
                  title="Explore"
                  whenClicked={()=> window.scrollTo({top:310, behavior:'smooth'})}
                />
              </motion.div>

              <motion.img
                initial={{opacity:0, x:60, y:200}} animate={{opacity:1, x:0, y:0}} 
                transition={{duration:0.4, delay:0.2, ease:'easeOut'}} 
                src="https://res.cloudinary.com/df6xz7bqp/image/upload/v1758403695/409868915_b6e9634d-c83b-4344-996f-4e7de82c6a65-removebg-preview-min_wmskmq.png" 
                alt="young man" 
                className="w-[260px] absolute bottom-0 right-0 sm:right-0 lg:right-1/6 max-sm:opacity-70"
              />

              {/* <div className="absolute inset-0 max-sm:bg-white/30"></div> */}

            </div>
          </div>


          <div className="w-full flex flex-col items-center py-10">

            <div className="w-[1300px] max-w-full flex items-center justify-end px-3">
              <SortSelector/>

            </div>

            <CardGrid/>
          </div>


          <CardsSlide
            title="Popular this week"
            products={popular}
            customClass="slide1"
          />

          <Footer/>
            
        </div>
    </>
  )
}

export default ShoesCollection;