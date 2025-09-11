import HeroButton from "./HeroButton";


const Hero = () => {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-amber-100 flex justify-center">
        <div className="w-[1300px] max-w-full min-h-full p-5 flex items-center">

          <div className="flex flex-col gap-6">
            <h1 className="w-[350px] text-black-text font-merienda-bold text-5xl leading-tight">
              Elevate Your Everyday Style
            </h1>
            <p className="w-[340px] text-black-text text-lg font-monts-medium">
              From casual fits to statement pieces, everything you need to shine.
            </p>
            <HeroButton/>
          </div>

        </div>
    </div>
  )
}

export default Hero;