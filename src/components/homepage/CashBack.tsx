import HeroButton from "../buttons/HeroButton";



const CashBack = () => {
  return (
    <div className="w-full flex items-center justify-center bg-blue-50 p-5">

        <div className="flex flex-col gap-5 py-10">
            <h1 className="text-5xl text-black-text font-merienda-bold">
                Get 5% Cash Back
            </h1>
            <p className="text-black-text font-monts-medium">
                for orders above <span className="font-monts-semi-bold text-orange-500">$1000</span>
            </p>

            <HeroButton title="Learn More"/>
        </div>

    </div>
  )
}

export default CashBack;