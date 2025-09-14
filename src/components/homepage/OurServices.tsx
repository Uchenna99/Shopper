import ServicesCard from "../ServicesCard";
import services from "../../assets/Data/Services.json";


const OurServices = () => {
    
  return (
    <>
        <div className="w-full flex justify-center">
            <div className="w-[1300px] max-w-full px-4 sm:px-5 py-20 flex flex-col gap-10">

                <h1 className="text-black-text text-2xl sm:text-3xl font-merienda-bold">
                    Our Services
                </h1>

                
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {
                        services.map((service, index)=>(
                            <ServicesCard
                                key={index}
                                title={service.title}
                                text={service.text}
                                image={service.image}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    </>
  )
}

export default OurServices;