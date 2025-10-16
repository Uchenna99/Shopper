import { Swiper, SwiperSlide } from "swiper/react";
import { useScreenHeight } from "../../hooks/HeightQuery";
import HeroButton from "../buttons/HeroButton";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";


const Hero = () => {
  const smallHeigth = useScreenHeight(500);
  const heroImages = [
    "https://res.cloudinary.com/df6xz7bqp/image/upload/v1758227704/Adobe_Express_-_file_1_-min_zgpbdj.png",
    "https://res.cloudinary.com/df6xz7bqp/image/upload/v1758218900/Remove_background_project-min_stzmq9.png",
    "https://res.cloudinary.com/df6xz7bqp/image/upload/v1758217872/Remove_background_project_2_-min_yfahkp.png"
  ]

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
              autoplay={{delay: 3000}}
              slidesPerView={1}
              loop
              effect="fade"
              speed={1500}
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
                  <SwiperSlide className="" key={index}>
                    <div 
                      className="h-full w-full bg-orange-500 flex bg-[length:200%] xs:bg-[length:140%] md:bg-[length:120%] 
                      lg:bg-[length:95%] xl:bg-[length:90%] bg-bottom bg-no-repeat" 
                      style={{backgroundImage:`url(${img})`}}>
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