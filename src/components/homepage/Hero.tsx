import pic from "../../assets/YV9oZmxpcA==.png";
import { useScreenHeight } from "../../hooks/HeightQuery";
import HeroButton from "../buttons/HeroButton";


const Hero = () => {
  const smallHeigth = useScreenHeight(500);

  return (
    <div className={`w-full bg-gray-500 flex justify-center
      ${smallHeigth? 'min-h-[600px]' : 'min-h-[calc(90vh-80px)] xs:min-h-[calc(100vh-80px)] max-h-[calc(100vh-80px)]'}`}>

        <div className="w-[1300px] max-w-full min-h-full p-5 flex items-end relative">

          <div className="w-[350px] max-w-full flex flex-col gap-6 z-20 mb-10 sm:mb-20">
            <h1 className="text-white font-merienda-bold text-3xl sm:text-5xl leading-tight">
              Elevate Your Everyday Style
            </h1>
            <p className="text-white sm:text-lg font-monts-medium">
              From casual fits to statement pieces, everything you need to shine.
            </p>
            <HeroButton title="Discover Your Style"/>
          </div>

          <div className="max-sm:hidden h-full w-full absolute right-0 bottom-0 bg-cover bg-no-repeat bg-bottom-right overflow-hidden">
            <img src='https://res.cloudinary.com/df6xz7bqp/image/upload/v1757692225/YV9oZmxpcA_ifv42z.png' alt="happy couple" 
              className="w-auto h-full max-w-none max-h-none absolute bottom-0 -right-25 lg:-right-15"
            />
          </div>

          <div className="sm:hidden h-full w-full absolute right-0 bottom-0 bg-cover bg-no-repeat bg-bottom overflow-hidden"
            style={{backgroundImage:`url(${pic})`}}>
          </div>

        </div>


    </div>
  )
}

export default Hero;