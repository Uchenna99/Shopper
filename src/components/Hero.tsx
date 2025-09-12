import HeroButton from "./HeroButton";


const Hero = () => {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] bg-amber-100 flex justify-center">

        <div className="w-[1300px] max-w-full min-h-full p-5 flex items-center relative ">

          <div className="flex flex-col gap-6 z-20">
            <h1 className="w-[350px] text-black-text font-merienda-bold text-5xl leading-tight">
              Elevate Your Everyday Style
            </h1>
            <p className="w-[340px] text-black-text text-lg font-monts-medium">
              From casual fits to statement pieces, everything you need to shine.
            </p>
            <HeroButton/>
          </div>

          <div className="h-full w-full absolute right-0 bg-cover bg-no-repeat bg-bottom-right overflow-hidden">
            <img src='https://res.cloudinary.com/df6xz7bqp/image/upload/v1757692225/YV9oZmxpcA_ifv42z.png' alt="" 
              className="w-auto h-full max-w-none max-h-none absolute bottom-0 -right-20 lg:right-0"
            />
          </div>

        </div>


    </div>
  )
}

export default Hero;