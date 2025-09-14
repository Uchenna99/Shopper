import HeroButton from "../buttons/HeroButton";



const CashBack = () => {
  return (
    <div className="w-full h-[400px] flex justify-center bg-orange-100 overflow-hidden">
        <div className="w-[1300px] flex items-center px-5 gap-10">

            <div className="flex flex-col gap-5 py-15">
                <h1 className="text-5xl text-black-text font-merienda-bold">
                    Get 5% Cash Back
                </h1>
                <p className="text-black-text font-monts-medium">
                    for orders above <span className="font-monts-semi-bold text-orange-500">$1000</span>
                </p>

                <HeroButton title="Learn More"/>
            </div>


            <div className="w-fit h-full relative bg-red-300">
                <img src="https://res.cloudinary.com/df6xz7bqp/image/upload/v1757869692/14276-removebg-preview-min_erlvzd.png" alt="happy lady" 
                    className="absolute bottom-0 max-h-none max-w-none"
                />
            </div>

        </div>
    </div>
  )
}

export default CashBack;