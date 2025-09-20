import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";               // core Swiper
import "swiper/css/navigation";    // for navigation buttons
import ProductCard2 from "./ProductCard2";
import { ChevronLeft, ChevronRight } from "lucide-react";


interface Props {
    products: any[];
    title: string;
    customClass: string;
}

const CardsSlide = ({ title, products, customClass }:Props) => {
  return (
    <>
        <div className="w-full flex justify-center">
            <div className="w-[1300px] max-w-full px-4 sm:px-5 py-20 flex flex-col gap-14">

                <h1 className="text-black-text text-2xl sm:text-3xl font-merienda-bold">
                    {title}
                </h1>


                <div className="w-full flex relative">
                    <Swiper 
                        breakpoints={{
                            0: { slidesPerView: 2 },    // mobile
                            640: { slidesPerView: 3 },  // tablet
                            1024: { slidesPerView: 5 }, // desktop
                        }}
                        navigation={{
                            prevEl: `.${customClass}-prev-custom`,
                            nextEl: `.${customClass}-next-custom`,
                        }}
                        spaceBetween={25} 
                        modules={[Navigation]}
                        >
                        {products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <ProductCard2
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    rating={product.rating}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button className={`${customClass}-prev-custom absolute left-0 -top-11 bg-white text-black-text w-9 h-9 
                        rounded-full z-20 flex items-center justify-center transition-all duration-300 cursor-pointer ring-1 ring-black/20
                        hover:ring-orange-400 hover:text-orange-400 active:ring-orange-400 active:text-orange-400`}>
                        <ChevronLeft size={20}/>
                    </button>
                    <button className={`${customClass}-next-custom absolute right-0 -top-11 bg-white text-black-text w-9 h-9 
                        rounded-full z-20 flex items-center justify-center transition-all duration-300 cursor-pointer ring-1 ring-black/20
                        hover:ring-orange-400 hover:text-orange-400 active:ring-orange-400 active:text-orange-400`}>
                        <ChevronRight size={20}/>
                    </button>
                </div>

            </div>
        </div>
    </>
  )
}

export default CardsSlide;