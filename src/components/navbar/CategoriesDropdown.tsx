import { useAppContext } from "../../hooks/AppContext";
import CategoryOption from "./CategoryOption";
import photos from "../../assets/Data/TopCategories.json";


const CategoriesDropdown = () => {
  const {  } = useAppContext();


  return (
    <div className="w-[690px] bg-white py-10 px-5 shadow-sm rounded-md absolute top-7
      grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5"
      >
      {
        photos.map((photo, index)=>(
          <CategoryOption 
            key={index}
            title={photo.title} 
            amount={photo.amount}
            thumbnail={photo.link}
          />
        ))
      }
    </div>
  )
}

export default CategoriesDropdown;