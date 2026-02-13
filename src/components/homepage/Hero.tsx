import { Swiper, SwiperSlide } from "swiper/react";
import { useScreenHeight } from "../../hooks/HeightQuery";
import HeroButton from "../buttons/HeroButton";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import slide1 from "../../assets/Images/slide1.png";
import slide2 from "../../assets/Images/slide2.png";
import slide3 from "../../assets/Images/slide3.png";


const Hero = () => {
  const smallHeigth = useScreenHeight(500);
  const heroImages = [slide1, slide2, slide3];

  return (
    <div className={`w-full bg-orange-500 flex justify-center
      ${smallHeigth? 'min-h-[600px]' : 'min-h-[calc(70vh-80px)] lg:min-h-[calc(100vh-80px)] max-h-[calc(100vh-80px)]'}`}>

        <div className="w-[1300px] max-w-full min-h-full p-5 flex items-end relative">

          <div className="w-[450px] max-w-full flex flex-col gap-6 z-20 mb-10 sm:mb-20">
            <h1 className="text-white font-merienda-bold text-4xl sm:text-6xl leading-tight">
              Elevate Your Everyday Style
            </h1>
            <p className="text-white sm:text-lg font-monts-medium">
              From casual fits to statement pieces, everything you need to shine.
            </p>
            <HeroButton title="Discover Your Style"/>
          </div>


          <div className="absolute bottom-0 left-0 w-full h-full flex">

            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              autoplay={{delay: 5000}}
              slidesPerView={1}
              loop
              effect="slide"
              speed={2000}
              pagination={{
                clickable: true,
                renderBullet: (_index, className)=> {
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }}
              className="mySwiper w-full h-full"  
            >
              {
                heroImages.map((img, index)=>(
                  <SwiperSlide key={index}>
                    <div className="relative h-full w-full">
                      <img
                        src={img}
                        alt="Hero slide"
                        className="w-full h-full object-cover"
                        fetchPriority={index === 0? 'high':'auto'}
                        loading={index === 0? 'eager':'lazy'}
                      />
                      <div className="absolute inset-0 bg-black/40 md:hidden"></div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>

          </div>

        </div>


    </div>
  )
}

export default Hero;