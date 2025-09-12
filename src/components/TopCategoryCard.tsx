

interface Props {
    link: string;
    title: string;
}

const TopCategoryCard = ({ link, title }:Props) => {
  return (
    <div className="w-full aspect-[2/3] bg-gray-300 rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all duration-200
        relative flex justify-center items-end">
    
        <img src={link} alt="" 
            className="h-full w-auto max-w-none hover:scale-110 transition-all duration-300"
        />

        <h1 className="absolute z-20 text-white text-2xl font-merienda-semi-bold mb-5 pointer-events-none">
            {title}
        </h1>
    </div>
  )
}

export default TopCategoryCard;