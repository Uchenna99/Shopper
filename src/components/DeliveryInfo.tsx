import InputText from "./InputText";



const DeliveryInfo = () => {
  return (
    <div className="w-full bg-white rounded-sm shadow-sm p-4 border border-gray-300 flex flex-col gap-4">

        <div className="w-full flex justify-between items-center gap-2 border-b border-gray-300 pb-2 mb-2">
            <p className="text-black-text font-monts-semi-bold">
                Delivery Information
            </p>
        </div>


        <div className="w-full flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full">
                <InputText title="First Name" placeHolder="eg. John" required/>    
            </div> 
            <div className="flex-1 w-full">
                <InputText title="Last Name" placeHolder="eg. Wick" required/>    
            </div>    
        </div>   

        <InputText title="Address" placeHolder="Enter your address" required/> 

        <div className="w-full flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full">
                <InputText title="City / Town" placeHolder="eg. Port Harcourt" required/>    
            </div> 
            <div className="flex-1 w-full">
                <InputText title="Zip Code" placeHolder="eg. 500272" required/>    
            </div>    
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full">
                <InputText title="Email" placeHolder="eg. johnwick@continental.com" required/>    
            </div> 
            <div className="flex-1 w-full">
                <InputText title="Phone" placeHolder="eg. +234-7031234567" required/>    
            </div>    
        </div>
    </div>
  )
}

export default DeliveryInfo;