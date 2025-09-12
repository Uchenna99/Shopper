import { useAppContext } from "../../hooks/AppContext";
import CategoryOption from "./CategoryOption";
import photos from "../../assets/Data/TopCategories.json";


const CategoriesBurgerDropdown = () => {
  const {  } = useAppContext();


  return (
    <div className="w-[690px] max-w-screen p-5 rounded-md
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

export default CategoriesBurgerDropdown;