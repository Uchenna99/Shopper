import { getRandomItems } from "../../utils/UtilityFunctions";  
import ProductCard2 from "./../ProductCard2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";               // core Swiper
import "swiper/css/navigation";    // for navigation buttons
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../hooks/AppContext";
import { useEffect, useRef } from "react";
import type { AxiosResponse } from "axios";
import { fetchWithRetry } from "../../utils/FetchWithRetry";
import { HOST } from "../../utils/Host";
import { toast } from "sonner";
import { useInView } from "framer-motion";


const DealsOfDay = () => {
    const navigate = useNavigate();
    const {loadingProducts, setLoadingProducts, allProducts, setAllProducts} = useAppContext();
    const deals = getRandomItems(allProducts, 7);
    const slideRef = useRef(null);
    const slideInView = useInView(slideRef, {amount:0.1, once:true});

    const fetchProducts = async()=>{
        setLoadingProducts(true);
        try {
            const response: AxiosResponse = await fetchWithRetry(
                {
                method: "GET",
                url: `${HOST}/api/v1/products/all-products`,
                },
                5, // retries
                2000 // delay
            );
            setAllProducts(response.data);
            setLoadingProducts(false);
        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Network error, please refresh page");
        } finally {
        };
    };

    useEffect(()=>{
        if(slideInView && allProducts.length === 0) {
            fetchProducts();
        }
    },[slideInView]);

  return (
    <>
        <div className="w-full flex justify-center" ref={slideRef}>
            <div className="w-[1300px] max-w-full px-4 sm:px-5 py-20 flex flex-col gap-14">

                <h1 className="text-black-text text-2xl sm:text-3xl font-merienda-bold">
                    Best deals of the day
                </h1>


                <div className="w-full flex relative">
                    <Swiper 
                        breakpoints={{
                            0: { slidesPerView: 2 },    // mobile
                            640: { slidesPerView: 3 },  // tablet
                            1024: { slidesPerView: 4 }, // desktop
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-custom",
                            nextEl: ".swiper-button-next-custom",
                        }}
                        spaceBetween={25} 
                        modules={[Navigation]}
                        >
                        {
                            loadingProducts?
                            Array.from({ length: 12 }).map((_, index) => (
                                <SwiperSlide key={index}>
                                {/* Skeleton Card */}
                                <div className="flex flex-col gap-3 bg-gray-100 p-3 rounded-xl animate-pulse">
                                    <div className="w-full h-40 bg-gray-200 rounded-lg"></div>
                                    <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                                    <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
                                </div>
                                </SwiperSlide>
                            ))
                            :
                            deals.map((product, index) => (
                                <SwiperSlide key={index}>
                                    <ProductCard2
                                        name={product.name}
                                        price={product.price}
                                        image={product.images[0]}
                                        rating={product.rating}
                                        onCardSelect={()=> navigate(`/${product.categoryName}/productdetails`, {state: {item: product}})}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    <button className="swiper-button-prev-custom absolute left-0 -top-11 bg-white text-black-text w-9 h-9 
                        rounded-full z-20 flex items-center justify-center transition-all duration-300 cursor-pointer ring-1 ring-black/20
                        hover:ring-orange-400 hover:text-orange-400 active:ring-orange-400 active:text-orange-400">
                        <ChevronLeft size={20}/>
                        <p className="hidden">Prev</p>
                    </button>
                    <button className="swiper-button-next-custom absolute right-0 -top-11 bg-white text-black-text w-9 h-9 
                        rounded-full z-20 flex items-center justify-center transition-all duration-300 cursor-pointer ring-1 ring-black/20
                        hover:ring-orange-400 hover:text-orange-400 active:ring-orange-400 active:text-orange-400">
                        <ChevronRight size={20}/>
                        <p className="hidden">Next</p>
                    </button>
                </div>

            </div>
        </div>
    </>
  )
}

export default DealsOfDay;