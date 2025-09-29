import InputText from "./InputText";



const DeliveryInfo = () => {
  return (
    <div className="w-full bg-white rounded-sm shadow-sm pt-4 px-4 border border-gray-300">

        <div className="w-full flex justify-between items-center gap-2 border-b border-gray-300 pb-2 mb-5">
            <p className="text-black-text font-monts-semi-bold">
                Delivery Information
            </p>
        </div>


        <div className="w-full flex flex-col md:flex-row items-center">
            <div className="flex-1">
                <InputText title="Name"/>    
            </div>    
        </div>    
    </div>
  )
}

export default DeliveryInfo;